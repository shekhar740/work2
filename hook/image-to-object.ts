import { uploadToS3 } from "@/config/aws-store";
import { v4 as uuidv4 } from "uuid";

// Define a type for your custom file object
type CustomFile = {
  originalname: string | null;
  mimetype: string | null;
  size: number | null;
  key: string | null;
};

export const imageToObject = async (
  ...files: File[]
): Promise<CustomFile[] | null> => {
  if (!files || files.length === 0) {
    return null; // Handle case where no files are passed
  }

  // Use Promise.all to handle all file uploads concurrently
  const results: CustomFile[] = await Promise.all(
    files.map(async (file) => {
      try {
        const originalFileName = file.name;
        const fileExtension = originalFileName.substring(
          originalFileName.lastIndexOf(".") + 1
        );

        // Generate a unique key using UUID
        const key = `${uuidv4()}.${fileExtension}`;

        // Upload the file to S3
        const response = await uploadToS3(file, key);

        // Check if the upload was successful
        if (response?.success) {
          return {
            originalname: file.name,
            mimetype: file.type,
            size: file.size,
            key: key,
          };
        } else {
          // Return null values for failure
          return {
            originalname: null,
            mimetype: null,
            size: null,
            key: null,
          };
        }
      } catch (error) {
        console.error(`Failed to upload ${file.name}:`, error);

        // Return null values in case of an error
        return {
          originalname: null,
          mimetype: null,
          size: null,
          key: null,
        };
      }
    })
  );

  return results;
};
