import { setCookie } from "@/helper/cookies";
import { findMerchant, findUser } from "@/utils/backend/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { comparePassword } from "@/utils/share-code";
import jwt from "jsonwebtoken";
import { sendErrorResponse } from "@/helper/return-statement";

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { credential, password, merchantId } = req.body;

  try {
    let merchant;
    if (merchantId) {
      merchant = await findMerchant(merchantId);
    } else {
      merchant = await findMerchant(credential);
    }

    if (!merchant) {
      return sendErrorResponse(res, 404, "Invalid merchant details");
    }

    let user;
    if (merchantId) {
      user = await findUser(credential, merchant.id);
      if (!user) {
        return sendErrorResponse(res, 404, "Invalid user details");
      }
    } else {
      user = merchant; // Assign merchant directly if no adminId
    }
    let compare: boolean;
    if (password.length > 6) {
      compare = user.password === password;
    } else {
      compare = await comparePassword(password, user.password);
    }
    if (!compare) {
      sendErrorResponse(res, 404, "Invalid Password");
    }
    if (user?.admin) {
      await setCookie(res, {
        email: user?.email,
        password: user.password,
        id: user?.id,
      });
    } else {
      await setCookie(res, {
        admin: merchant?.email,
        email: user?.email,
        password: user?.password,
      });
    }

    return sendErrorResponse(res, 202, "successfully login credential");
  } catch (error) {
    console.error("Error during login:", error);
    return sendErrorResponse(res, 500, "Internal server error.");
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const token =
    req.cookies?.authToken || req.headers.authorization?.split(" ")[1];

  // Check if the cookie exists
  if (!token) {
    return res
      .status(400)
      .json({ message: "Authentication token is required." });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);
    return res.status(200).json({ message: "succesfuly", decoded });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
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
