import { resend } from "@/config/email-config";
import { prisma } from "@/config/prisma-config";
import { EmailCredential } from "@/helper/email-credential";
import message from "@/store/slices/message";
import { MerchantUserPassword } from "@/utils/emails";
import { generatePassword, hashPassword } from "@/utils/share-code";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

async function handlePost(req: NextApiRequest, resp: NextApiResponse) {
    const { logo, storePhotos, shopName, businessType, shopAddress, username, merchantId, email, mobile } = req.body;

    try {
        const autoGeneratePassword = (await generatePassword()).toString();
        const hashedPassword = await hashPassword({
            code: autoGeneratePassword,
            saltRounds: 10,
        });

        // Check if user already exists
        const user = await prisma.merchant.findFirst({
            where: {
                email,
            },
        });

        if (user) {
            return resp.status(409).json({ message: "User already exists." });
        }

        // Create new merchant
        await prisma.merchant.create({
            data: {
                email: email as string,
                shopName: shopName as string,
                businessType: businessType as string,
                shopAddress: shopAddress as string,
                username: username as string,
                merchantId: merchantId as string || "sdfasfdasf",
                password: hashedPassword,
                userMobileNumber: mobile as string,
                liveLocation: "sfdasdfasf",
                storeLogo: logo, // Assuming logo is already in the correct format
                storePhotos: storePhotos, // Assuming storePhotos is already in the correct format
            },
        });
        const mesager = await MerchantUserPassword({to:email,autoGeneratePassword,subject:"Welcome Note",username,email});
        if(!mesager?.success){
            return resp.status(404).json({message:mesager.error})
        }

        return resp.status(200).json({ message: "You are registered successfully" });
    } catch (error) {
        console.error("Error saving metadata:", error);
        return resp.status(500).json({ message: "Please check network error", error: error instanceof Error ? error.message : "Unknown error" });
    }
}

async function handleGet(req: NextApiRequest, resp: NextApiResponse) {
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
