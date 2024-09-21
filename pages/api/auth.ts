import { prisma } from "@/config/prisma-config";
import { findMerchant, findUser } from "@/utils/backend/utils";
import { comparePassword } from "@/utils/share-code";
import { NextApiRequest, NextApiResponse } from "next";

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { credential, password, category,merchant } = req.body;

  try {
    let user;
    if(category === "merchant"){
      user = await findMerchant(credential);
    }else if(category === 'user'){
      console.log("is caegogy user")
      const merchants = await findMerchant(merchant)
      if(!merchants){
        return res.status(404).json({message:"Invalid merchant Details"})
      }
      user = await findUser(credential,merchants.id)
      if(!user){
        return res.status(404).json({message:"user not please re-register"});
      }
      const passwordCheck = comparePassword(password,user.password)
    }else{
      // write code for customers
    }

    if(!user){
      return res.status(404).json("user not defined")
    }
    console.log("user detail",user);
    res.status(200).json({message:"successfully login"})
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error." });
  }

}
async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ message: "GET request received." });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      await handlePost(req, res);
      break;
    case "GET":
      await handleGet(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST", "GET"]);
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
