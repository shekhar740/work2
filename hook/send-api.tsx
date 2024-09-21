"use client";
import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

interface UseSendOtpProps {
  email: string;
  otp?: string;
}

interface UseSendOtpReturn {
  otpSend?: () => Promise<void>;
  isLoading: boolean;
  response: any; // Adjust this type according to your actual API response
}
export const useSendOtp = ({ email }: UseSendOtpProps): UseSendOtpReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null); // Adjust this type according to your actual API response

  const otpSend = useCallback(async () => {
    if (!email) {
      toast({ title: "Error", description: "Please fill the email" });
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        "/api/send",
        { email }, // Send the email as an object
        { headers: { "Content-Type": "application/json" } } // Ensure content type is set
      );
      console.log("respondd", res.data);
      setResponse(res.data); // Store the response if needed
      toast({
        title: "Success",
        description: "OTP sent successfully to the user",
      });
    } catch (error) {
      console.error(error);
      toast({ title: "Error", description: "Failed to send OTP" });
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  return { otpSend, isLoading, response };
};