import { resend } from "@/config/email-config";
import { prisma } from "@/config/prisma-config";
import { EmailCredential } from "@/helper/email-credential";
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

        // Send welcome email
        const { data: emailData, error: emailError } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email as string],
            subject: "Welcome to Acme!",
            react: EmailCredential({
                username: username as string,
                password: autoGeneratePassword,
                email: email as string,
            }),
        });

        // Check for email sending errors
        if (emailError) {
            console.error("Error sending credentials email:", emailError);
            return resp.status(500).json({ message: "Error sending email", error: emailError });
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
