import { resend } from "@/config/email-config";
import { prisma } from "@/config/prisma-config";
import { setCookie } from "@/helper/cookies";
import { EmailCredential } from "@/helper/email-credential";
import { generatePassword, hashPassword } from "@/utils/share-code";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

async function handlePost(req: NextApiRequest, resp: NextApiResponse) {
    // resp.status
}

async function handleGet(req: NextApiRequest, resp: NextApiResponse) {
    setCookie(resp,{email:"metreshekhar249@gmail.com",password : "112214554"});
    resp.status(200).json({ message: "Hello" });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
