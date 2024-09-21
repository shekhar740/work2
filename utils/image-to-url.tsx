'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define the props type
interface ImageUploadPreviewProps {
  image: File | null; // Accept File object or null
}

export const ImageUploadPreview: React.FC<ImageUploadPreviewProps> = ({
  image,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageUrl(reader.result as string);
      };

      reader.readAsDataURL(image);

      // Clean up the URL when the component unmounts or image changes
      return () => {
        setImageUrl(null); // Optionally clear the imageUrl state
      };
    } else {
      setImageUrl(null); // Clear imageUrl if image is null
    }
  }, [image]);

  return (
    <Image src={imageUrl as string} alt="Preview"  className="object-cover w-full h-full rounded-lg" width={50} height={50}  />
  );
};
