import * as anchor from '@coral-xyz/anchor'
import { BN } from '@coral-xyz/anchor'
import * as spl from '@solana/spl-token'
import { PostedMessageData } from '@certusone/wormhole-sdk/lib/cjs/solana/wormhole'
import { expect } from 'chai'
import { toChainId } from '@certusone/wormhole-sdk'
import { MockEmitter, MockGuardians } from '@certusone/wormhole-sdk/lib/cjs/mock'
import * as fs from "fs";

import { type TransceiverMessage, NttManagerMessage, NativeTokenTransfer, TrimmedAmount, postVaa, WormholeTransceiverMessage, NTT } from '../ts/sdk'

export const GUARDIAN_KEY = 'cfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0'

describe('example-native-token-transfers', () => {
  const payerSecretKey = Uint8Array.from(JSON.parse(fs.readFileSync(`${__dirname}/../keys/test.json`, { encoding: "utf-8" })));
  const payer = anchor.web3.Keypair.fromSecretKey(payerSecretKey);

  const owner = anchor.web3.Keypair.generate()
  const connection = new anchor.web3.Connection('http://localhost:8899', 'confirmed');
  const ntt = new NTT(connection, {
    nttId: 'nttiK1SepaQt6sZ4WGW5whvc9tEnGXGxuKeptcQPCcS',
    wormholeId: 'worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth'
  })
  const user = anchor.web3.Keypair.generate()
  let tokenAccount: anchor.web3.PublicKey


  let mint: anchor.web3.PublicKey

  before(async () => {
    // airdrop some tokens to payer
    mint = await spl.createMint(
      connection,
      payer,
      owner.publicKey,
      null,
      9
    )

    tokenAccount = await spl.createAssociatedTokenAccount(connection, payer, mint, user.publicKey)
    await spl.mintTo(connection, payer, mint, tokenAccount, owner, BigInt(10000000))
  });

  describe('Locking', () => {
    before(async () => {
      await spl.setAuthority(
        connection,
        payer,
        mint,
        owner,
        0, // mint
        ntt.tokenAuthorityAddress()
      )

      await ntt.initialize({
        payer,
        owner: payer,
        chain: 'solana',
        mint,
        outboundLimit: new BN(1000000),
        mode: 'locking'
      })

      await ntt.registerTransceiver({
        payer,
        owner: payer,
        transceiver: ntt.program.programId
      })

      await ntt.setWormholeTransceiverPeer({
        payer,
        owner: payer,
        chain: 'ethereum',
        address: Buffer.from('transceiver'.padStart(32, '\0')),
      })

      await ntt.setPeer({
        payer,
        owner: payer,
        chain: 'ethereum',
        address: Buffer.from('ntt_manager'.padStart(32, '\0')),
        limit: new BN(1000000),
        tokenDecimals: 18
      })

    });

    it('Can send tokens', async () => {
      // TODO: factor out this test so it can be reused for burn&mint

      // transfer some tokens

      const amount = new BN(100000)

      const outboxItem = await ntt.transfer({
        payer,
        from: tokenAccount,
        fromAuthority: user,
        amount,
        recipientChain: 'ethereum',
        recipientAddress: Array.from(user.publicKey.toBuffer()), // TODO: dummy
        shouldQueue: false
      })

      const wormholeMessage = ntt.wormholeMessageAccountAddress(outboxItem)

      const wormholeMessageAccount = await connection.getAccountInfo(wormholeMessage)
      if (wormholeMessageAccount === null) {
        throw new Error('wormhole message account not found')
      }

      const messageData = PostedMessageData.deserialize(wormholeMessageAccount.data)
      const transceiverMessage = WormholeTransceiverMessage.deserialize(
        messageData.message.payload,
        a => NttManagerMessage.deserialize(a, NativeTokenTransfer.deserialize)
      )

      // assert theat amount is what we expect
      expect(transceiverMessage.ntt_managerPayload.payload.trimmedAmount).to.deep.equal(new TrimmedAmount(BigInt(10000), 8))
      // get from balance
      const balance = await connection.getTokenAccountBalance(tokenAccount)
      expect(balance.value.amount).to.equal('9900000')

      // grab logs
      // await connection.confirmTransaction(redeemTx, 'confirmed');
      // const tx = await anchor.getProvider().connection.getParsedTransaction(redeemTx, {
      //   commitment: "confirmed",
      // });
      // console.log(tx);

      // const log = tx.meta.logMessages[1];
      // const message = log.substring(log.indexOf(':') + 1);
      // console.log(message);

      // TODO: assert other stuff in the message
      // console.log(ntt_managerMessage);
    });

    it('Can receive tokens', async () => {
      const emitter =
        new MockEmitter(
          Buffer.from('transceiver'.padStart(32, '\0')).toString('hex'),
          toChainId('ethereum'),
          Number(0) // sequence
        )

      const guardians = new MockGuardians(0, [GUARDIAN_KEY])

      const sendingTransceiverMessage: TransceiverMessage<NativeTokenTransfer> = {
        sourceNttManager: Buffer.from('ntt_manager'.padStart(32, '\0')),
        recipientNttManager: ntt.program.programId.toBuffer(),
        ntt_managerPayload: new NttManagerMessage(
          BigInt(0),
          Buffer.from('FACE'.padStart(64, '0'), 'hex'),
          new NativeTokenTransfer(
            Buffer.from('FAFA'.padStart(64, '0'), 'hex'),
            new TrimmedAmount(BigInt(10000), 8),
            toChainId('solana'),
            user.publicKey.toBuffer()
          ),
        ),
        transceiverPayload: Buffer.alloc(0)
      }

      const serialized = WormholeTransceiverMessage.serialize(sendingTransceiverMessage, a => NttManagerMessage.serialize(a, NativeTokenTransfer.serialize))

      const published = emitter.publishMessage(
        0, // nonce
        serialized,
        0 // consistency level
      )

      const vaaBuf = guardians.addSignatures(published, [0])

      await postVaa(connection, payer, vaaBuf, ntt.wormholeId)

      const released = await ntt.redeem({
        payer,
        vaa: vaaBuf,
      })

      expect(released).to.equal(true)

    });
  });

  // describe('Burning', () => {
  //   beforeEach(async () => {
  //     await ntt.initialize({
  //       payer,
  //       owner,
  //       chain: 'solana',
  //       mint,
  //       outboundLimit: new BN(1000000),
  //       mode: 'burning'
  //     })
  //   });
  // });

})
