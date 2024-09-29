
import { resend } from "@/config/email-config";
import { EmailTemplate } from "@/helper/email-template";
import { generatePassword, hashPassword } from "@/utils/share-code";
import type { NextApiRequest, NextApiResponse } from "next";


async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  // Validate input
  if (!email) {
    return res.status(400).json({ error: "Missing email in request body" });
  }

  // Generate OTP

  const emailotp = (await generatePassword()).toString();

  const hashOtp = await hashPassword({ code: emailotp, saltRounds: 10 }); // No need for JSON.stringify here

  try {
    // Send email
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Acme!",
      react: EmailTemplate({ firstName: email, otp: emailotp }), // Use the EmailTemplate function
    });


    // Handle errors from the resend API
    if (error) {
      return res
        .status(400)
        .json({ error: "Failed to send email", details: error });
    }

    res
      .status(200)
      .json({ message: "Email sent successfully", email, hashOtp });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Internal server error",
      details: "An error occurred while sending the email",
    });
  }
}

async function handleGet(req: NextApiRequest, resp: NextApiResponse) {
  const { username, password, email } = req.query;

  if (!username || !password || !email) {
    return resp
      .status(400)
      .json({ error: "Missing required query parameters" });
  }

  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Email:", email);

  return resp.status(200).json({
    message: "Query parameters received successfully",
    data: { username, password, email },
  });
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
      res.status(405).json({ message: "Method Not Allowed" });
  }
}
