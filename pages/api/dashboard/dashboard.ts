import { NextApiRequest, NextApiResponse } from "next";
import authenticate from "../middleware";

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    console.log("backend secuir=g",req.user.email);
    res.status(200).json({message:"dummy seen"})
}

export default authenticate(
  async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
      case "POST":
        await handlePost(req, res);
        break;
      case "GET":
        await handleGet(req, res);
        break;
      default:
        res.status(405).json({ message: "Method Not Allowed" });
    }
  }
);
