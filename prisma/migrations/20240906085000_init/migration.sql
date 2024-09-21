-- CreateTable
CREATE TABLE "Merchant" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "businessType" TEXT NOT NULL,
    "shopName" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '',
    "shopAddress" TEXT NOT NULL,
    "liveLocation" TEXT NOT NULL,
    "storeLogo" JSONB,
    "storePhotos" JSONB,
    "merchantId" TEXT NOT NULL,
    "userMobileNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_username_key" ON "Merchant"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_email_key" ON "Merchant"("email");
