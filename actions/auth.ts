import { imageToObject } from "@/hook/image-to-object";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

interface UserData {
  username: string;
  password: string;
}

export const loginUser = async (userData: UserData) => {
  try {
    const response = await axios.post("/api/auth",userData);
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

export const Registeruser = async (formData: FormData): Promise<any> => {
  const logo = formData.get("logo") as File;
  const storePhotos = formData.getAll("storePhotos") as File[];

  const logoImage = await imageToObject(logo);
  const storePhotoImages = await Promise.all(
    storePhotos.map((photo) => imageToObject(photo))
  ); // Ensure all store photos are converted

  const dataToSend: Record<string, any> = {
    logo: logoImage,
    storePhotos: storePhotoImages,
  };

  formData.forEach((value, key) => {
    if (key !== "logo" && key !== "storePhotos") {
      dataToSend[key] = value;
    }
  });

  try {
    const resoinse = await axios.post("/api/merchant", dataToSend, {
        headers: { "Content-Type": "application/json" },
      });
  } catch (error) {
    const erresd = error?.response?.data?.message;
    if(erresd){
        toast({title:"errr",description:`${erresd} please be unique`})
    }
    throw new Error("Regisgeration failed");
  }


};
