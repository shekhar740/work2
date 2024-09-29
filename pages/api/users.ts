import { NextApiRequest, NextApiResponse } from "next";
import authenticate from "./middleware";
import { findMerchant } from "@/utils/backend/utils";
import { prisma } from "@/config/prisma-config";
import { decodeToken, generatePassword, hashPassword } from "@/utils/share-code";
import { NewUserPassword } from "@/utils/emails";
import { sendErrorResponse } from "@/helper/return-statement";
import {generateUsername} from "unique-username-generator"

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { merchantId } = req.query;
  try {
    if (!merchantId) {
      return res.status(400).json({ message: "Missing userId parameter" });
    }

    const user = await prisma.merchant.findFirst({
        where: { id: parseInt(merchantId as string, 10) },
        select: {
          users: true, 
        },
      });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}


async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { email, firstName, lastName } = req.body;
  const merchantId = req.user?.id; 
  // Validate required fields
  if (!email || !firstName || !lastName) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Check if the user is authorized
  if (!merchantId) {
    return res.status(404).json({ message: "You are not Authorized" });
  }

  const genPass = (await generatePassword()).toString();
  const hashedPassword = await hashPassword({ code: genPass , saltRounds: 10 });
  const defaultUser = generateUsername(firstName.toLowerCase(), lastName.toLowerCase());

  const existingUser = await prisma.user.findFirst({
    where: {
      merchantId: merchantId,
      OR: [{ email: email }, { username: email }],
    },
  });

  if (existingUser) {
    return res.status(202).json({ message: "User already registered on this user" });
  }

  // Create new user
  const newUser = await prisma.user.create({
    data: {
      username: defaultUser,
      email,
      password: hashedPassword,
      merchantId: merchantId,
    },
  });

  // Send email with credentials
  // const message = await NewUserPassword({
  //   to: [email],
  //   autoGeneratePassword: "sfgs",
  //   subject: "New user login detail",
  //   username: defaultUser,
  //   email,
  // });

  // if (!message.success) {
  //   return res.status(404).json({ message: message.error });
  // }

  return res.status(201).json({ message: "User created successfully" });
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const { firstName, lastName, email: credential, password: credentialCode } = req.body;

  try {
    if (!userId) {
      return res.status(400).json({ message: "Missing userId parameter" });
    }

    const user = await prisma.user.findMany({
      where: { id: parseInt(userId as string, 10) },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId as string, 10) },
      data: {
        username: firstName && lastName ? `${firstName}${lastName}${generatePassword()}` : user.username,
        email: credential || user?.email,
      },
    });

    return res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  try {
    if (!userId) {
      return res.status(400).json({ message: "Missing userId parameter" });
    }

    const user = await prisma.user.delete({
      where: { id: parseInt(userId as string, 10) },
    });

return res.status(201).json({ message: "User created successfully" });  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      await handlePost(req, res);
      break;
    case "GET":
      await handleGet(req, res);
      break;
    case "PUT":
      await handlePut(req, res);
      break;
    case "DELETE":
      await handleDelete(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
      return res.status(405).json({ message: "Method Not Allowed" });
  }
};

// Wrap the handler with the authenticate middleware before exporting
export default authenticate(handler);


//  try {
//     if (!email || !firstName || !lastName || !credential) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const merchant = await findMerchant(email);
//     if (!merchant || merchantId) {
//       return res.status(403).json({ message: "You are not authorized" });
//     }
//     const genPass = (await generatePassword()).toString();

//     const hashedPassword = await hashPassword({
//       code: genPass,
//       saltRounds: 10,
//     });

//     const usernamedd = `${firstName}${lastName}${genPass}`;
   

//     const existingUser = await prisma.user.findFirst({
//         where: {
//           merchantId: merchant.id,
//           OR: [
//             { email: credential },
//             { username: credential }
//           ]
//         }
//       });
      
//       if (existingUser) {
//         return res.status(202).json({ 
//           message: `User with email or username '${credential}' is already registered under merchant ID ${merchant.id}`
//         });
//       }
      

//     const newUser = await prisma.user.create({
//       data: {
//         username:usernamedd,
//         email: credential,
//         password: JSON.stringify(hashedPassword),
//         merchantId: merchant.id,
//       },
//     });
//     const messge = await NewUserPassword({to : [email],autoGeneratePassword:genPass,subject:"New user loggin detail",username : usernamedd,email});
//     if(!messge.success){
//         return res.status(404).json({message:messge.error})
//     }
//     return res.status(201).json({ message: "User created successfully" });

//   } catch (error) {
//     console.error("Error creating user:", error);
//     return res.status(500).json({ message: "Internal server error", error: error.message });
//   }
