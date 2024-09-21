import { prisma } from "@/config/prisma-config";



export async function findMerchant(identifier: string) {
  if (!identifier) {
    return null;
  }
  return await prisma.merchant.findFirst({
    where: {
      OR: [{ email: identifier }, { username: identifier }],
    },
  });
}

export async function findUser(identifier: string, merchantId: number) {
  if (!identifier || !merchantId) {
    return null; // Return null if either identifier or merchantId is missing
  }
  
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { username: identifier },
      ],
      merchantId: merchantId, // Ensure the user belongs to the specified merchant
    },
  });
  
  return user; // This will return the user if found, or null if not
}
