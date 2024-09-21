import { registerSchema } from "@/lib/user-validataion";

export const handleError = (verify: boolean, ...args: any[]) => {
  // Check if OTP verification is necessary and valid
  // if (!verify) {
  //   return { title: "OTP Error", body: "OTP verification is necessary" };
  // }
  const response = registerSchema.safeParse(args[0]);

  if (!response.success) {
    // Flatten the errors
    const errors = response.error.flatten();

    // Log only the first error message from the fields
    const firstErrorMessage = Object.values(errors.fieldErrors)[0]?.[0];
    if (firstErrorMessage) {
      console.log(firstErrorMessage);
      return { title: "Form Validation Error", body: firstErrorMessage };
    }
  }
  return null; // If no errors, return null
};

export const apiError = (error: any) => {
  const prismaError = error.response.data.error.meta.target[0];
  const emailError = error.response.data.error.message;
  console.log("emailAErr",emailError)
  if (emailError) {
    return { message: emailError };
  } else if (prismaError === "email") {
    return { mesage: "Merchant  should be unique" };
  } else if (prismaError === "username") {
    return { message: "please be unique username" };
  }
  return {message:"all are corrected"}
};
