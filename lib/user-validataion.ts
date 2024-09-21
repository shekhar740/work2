import { z } from "zod";


export const registerSchema = z.object({
  shopName: z.string().min(1, { message: "Shop name is required" }),
  businessType: z.enum(["retail", "wholesale", "services", "manufacturing"], {
    message: "Business type is required",
  }),
  shopAddress: z.string().min(1, { message: "Shop address is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  merchantId: z.string().min(1, { message: "Merchant ID is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobile: z
  .string()
  .min(10, { message: "Mobile number must be at least 10 digits" })
  .max(10, { message: "Mobile number must not exceed 15 digits" })
});
