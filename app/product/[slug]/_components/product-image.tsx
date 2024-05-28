"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  imageUrls: string[];
  name: string;
}

const ProductImage = ({ imageUrls, name }: ProductImageProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>
      <div className="grid grid-cols-4 gap-3 p-5">
        {imageUrls.map((imageUrls) => (
          <button
            key={imageUrls}
            className={`flex h-[90px] items-center justify-center rounded-lg bg-accent ${
              imageUrls === currentImage && "border-2 border-primary"
            }`}
            onClick={() => handleImageClick(imageUrls)}
          >
            <Image
              src={imageUrls}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
