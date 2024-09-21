import { PutObjectCommand } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";
export const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY ,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
  }
});
export const uploadToS3 = async (logo: File,key:string) => {
  const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const putCommand = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: logo,
    ContentType: logo.type,
  });

  try {
    // Upload the object to S3
    await s3Client.send(putCommand);
    console.log("File stored successfully on S3");
    return {success:true}
  } catch (error) {
    console.error("Error uploading image to S3:", error);
    return {success:false}
  }
};
