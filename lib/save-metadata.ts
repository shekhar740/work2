"use server";
import { resend } from "@/config/email-config";
import { auth } from "@/config/firebase";
import { prisma } from "@/config/prisma-config";
import { EmailCredential } from "@/helper/email-credential";
import { generatePassword, hashPassword } from "@/utils/share-code";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface SaveMetaDataProps {
  data: FormData;
}

interface SaveMetaDataResponse {
  success: boolean;
  body?: string; // Optional message body
  error?: string; // Optional error message
}

export const saveMetaData = async ({ data }: SaveMetaDataProps): Promise<SaveMetaDataResponse> => {
  if (!data) {
    console.error("No data provided");
    return { success: false, error: "No data provided" };
  }

  // Convert FormData to an object before saving
  const formDataObject: { [key: string]: any } = {};
  data.forEach((value, key) => {
    formDataObject[key] = value;
  });

  try {
    // Generate and hash the password
    const autoGeneratePassword = (await generatePassword()).toString();
    const hashedPassword = await hashPassword({
      code: autoGeneratePassword,
      saltRounds: 10,
    });

    // Save data to the database
    const { email, shopName, businessType, shopAddress, username, merchantId, mobile, logo, storeImages } = formDataObject;
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
        storeLogo: JSON.parse(logo),
        storePhotos: JSON.parse(storeImages),
      },
    });

    // Create user in Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email as string, autoGeneratePassword);

    if (!userCredential.user) {
      console.error("Failed to create user in Firebase");
      return { success: false, error: "Failed to create user in Firebase" };
    }

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

    if (emailError) {
      console.error("Error sending credentials email:", emailError);
      return { success: false, error: "Failed to send credentials email" };
    }

    // Return success response
    return { success: true, body: "Data saved successfully" };

  } catch (error: any) {
    console.error("Error saving metadata:", error);
    return { success: false, error: error.message || "Error saving metadata" };
  }
};
