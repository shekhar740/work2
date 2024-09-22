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
  if (!identifier && !merchantId) {
    return null;
  }
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { username: identifier },
      ],
    },
  });
  if(user && user.merchantId === merchantId){
        return user;
  }
  return null;
}
