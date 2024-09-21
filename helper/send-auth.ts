import { toast } from "@/hooks/use-toast";
import axios from "axios";

export const sendAuthEmail = async (email: string) => {
    try {
      const response = await axios.post("/api/send-sign-in", { email });
      return;
    } catch (authError) {
      console.error("Error sending Google authentication email:", authError);
      toast({
        title: "Authentication Error",
        description: "Failed to send Google authentication email.",
      });
    }
  };