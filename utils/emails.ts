import { resend } from "@/config/email-config";
import { EmailCredential } from "@/helper/email-credential";

interface MerchantUserPasswordProps {
    from? : string,
  to: string[];
  subject: string;
  username: string;
  email: string;
  autoGeneratePassword: string;
}

export async function MerchantUserPassword({
  to,
  subject,
  username,
  email,
  autoGeneratePassword,
}: MerchantUserPasswordProps) {
  try {
    const { data, error } = await resend.emails.send({
      from : "Acme <onboarding@resend.dev>",
      to,
      subject,
      react: EmailCredential({
        username,
        password: autoGeneratePassword,
        email,
      }),
    });

    // Check for errors
    if (error) {
      console.error("Error sending credentials email:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Unexpected error sending email:", error);
    return { success: false, error: error.message };
  }
}


export async function NewUserPassword({
    from,
    to,
    subject,
    username,
    email,
    autoGeneratePassword,
  }: MerchantUserPasswordProps) {
    try {
      const { data, error } = await resend.emails.send({
        from : from || "Acme <onboarding@resend.dev>",
        to,
        subject,
        react: EmailCredential({
          username,
          password: autoGeneratePassword,
          email,
        }),
      });
  
      // Check for errors
      if (error) {
        console.error("Error sending credentials email:", error);
        return { success: false, error };
      }
  
      return { success: true, data };
    } catch (error) {
      console.error("Unexpected error sending email:", error);
      return { success: false, error: error.message };
    }
  }


