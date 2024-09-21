-- AlterTable
ALTER TABLE "Merchant" ADD COLUMN     "googleLogin" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "canManageInventory" BOOLEAN NOT NULL DEFAULT false,
    "canPlaceOrders" BOOLEAN NOT NULL DEFAULT false,
    "canCreateBills" BOOLEAN NOT NULL DEFAULT false,
    "merchantId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
