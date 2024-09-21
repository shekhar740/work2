"use client";
import { useState, useCallback } from "react";
import { toast } from "@/hooks/use-toast";
import { ManualFormData } from "@/types/type";
import { imageToObject } from "@/hook/image-to-object";
import { saveMetaData } from "@/lib/save-metadata";
import { useRouter } from "next/navigation"; 
import { handleError } from "@/hook/erro";

interface UseSendOtpProps {
  verify:boolean;
  logo?: File;
  storePhotos: File[];
  formData: ManualFormData;
}

interface UseSendOtpReturn {
  handleSubmitCode: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  verify: boolean;
  response: unknown;
  submitButton: string;
  loading : boolean;
}

export const useHandleSubmitSection = ({
  logo,
  storePhotos,
  formData,
  verify
}: UseSendOtpProps): UseSendOtpReturn => {
  const [response, setResponse] = useState<unknown>(null);
  const [submitButton, setSubmitButton] = useState("Create an account");
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // Use router for navigation

  const handleSubmitCode = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value as string);
    });

    const error = handleError(verify, formData);
    if (error) {
      toast({ title: error.title, description: error.body });
      return; // Stop execution if there's an error
    }

    setLoading(true);

    try {
      // Upload logo and store images to AWS S3
      const logoStoreImage = await imageToObject(logo as File);
      const storeImages = await imageToObject(...storePhotos);

      // Check if any upload failed (missing 'key' in any image object)
      if (!logoStoreImage) {
        setLoading(false);
        // setSubmitButton("Submit");
        console.error("Error: Failed to upload logo");
        return;
      }

      if (storeImages?.some(image => !image.key )) {
        setLoading(false);
        console.error("Error: Failed to upload one or more store images");
        toast({ title: "Upload Error", description: "Failed to upload one or more store images" });
        setSubmitButton("Submit");
        return;
      }

      // Update button text
      setSubmitButton("Saving to the database...");

      // Append images to FormData
      data.append("logo", JSON.stringify(logoStoreImage));
      data.append("storeImages", JSON.stringify(storeImages));

      // Save metadata to the database 
      const prismaSave = await saveMetaData({ data });

      // Check if the Prisma save operation failed
      if (!prismaSave.success) {
        console.error("Error: Failed to save metadata to the database");
        toast({ title: "Database Error", description: "Failed to save metadata to the database" });
        setSubmitButton("Submit");
        return; // Stop execution if database save failed
      }

      // Handle success and redirect
      setResponse(prismaSave);
      setSubmitButton("Redirecting...");
      router.push("/login"); // Use router.push for navigation
    } catch (error: any) {
      // Handle error during the process
      console.error("Error:", error.message || error);

      toast({
        title: "Error",
        description: error.message || "Something went wrong",
      });
      setSubmitButton("Submit");
    } finally {
      setLoading(false);
    }
  }, [logo, storePhotos, formData,router,verify]);

  return { handleSubmitCode, verify, response, submitButton,loading };
};


export const Registeruser = async ()=>{
  
}
