import { Wallet, Program, AnchorProvider, BN } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';

import { getAssociatedTokenAddress } from "@solana/spl-token";
import idl from './crowdfunding.json';
import { Crowdfunding } from './crowdfunding';


export const getProgramDetails = (keyPair) => {
  const connection = new Connection(process.env.NETWORK_URL, 'confirmed');
  const provider = new AnchorProvider(connection, new Wallet(keyPair), {
    preflightCommitment: 'confirmed',
  });
  return new Program(idl as Crowdfunding, provider);
};

export const getProjectPDA = (id: string, program) => {
  const [projectPDA] = PublicKey.findProgramAddressSync(
    [new BN(id).toArrayLike(Buffer, 'le', 8)],
    program.programId,
  );

  return projectPDA;
};
// module.exports = {
//   async getAta(wallet, mint) {
//     try {
//       const { userPublicKey, mintPublicKey } = ctx.request.body;

//       if (!userPublicKey || !mintPublicKey) {
//         return ctx.badRequest("Missing userPublicKey or mintPublicKey");
//       }

//       // Convert the provided keys into PublicKey objects
//       const userPublicKeyObj = new PublicKey(userPublicKey);
//       const mintPublicKeyObj = new PublicKey(mintPublicKey);

//       // Get the user's Associated Token Account (ATA)
//       const ata = await getAssociatedTokenAddress(
//         mintPublicKeyObj, // Mint public key
//         userPublicKeyObj  // User's wallet public key
//       );

//       return ctx.send({ ata: ata.toString() });
//     } catch (error) {
//       console.error("Error fetching ATA:", error);
//       return ctx.internalServerError("Failed to fetch user's ATA.");
//     }
//   },
// };
