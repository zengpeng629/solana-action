import { PublicKey, clusterApiUrl } from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

export const DEFAULT_SOL_ADDRESS: PublicKey = new PublicKey(
  process.env.RECIPIENT ?? "7MLFbwyJsGeFMzw8r6j52AYfkwX8MrhSyyjw22PdkxCg" // donate wallet
);

export const DEFAULT_SOL_AMOUNT: number = process.env.DEFAULTAMOUNT
  ? parseFloat(process.env.DEFAULTAMOUNT)
  : 0.1;

export const DEFAULT_RPC =
  process.env.RPC_URL_MAINNET ?? clusterApiUrl("mainnet-beta");

export const DEFAULT_TITLE = process.env.TITLE ?? "向zengp捐赠SOL";

export const DEFAULT_AVATOR = process.env.AVATAR;

export const DEFAULT_DESCRIPTION =
  process.env.DESCRIPTION ?? "I can create Blink for you!";
