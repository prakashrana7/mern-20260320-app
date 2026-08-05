"use client";
import Image from "next/image";
import placeholder from "@/assets/images/placeholder.png";
import { useState } from "react";

const ProductImage = ({ imageUrls, productName, productCategory }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentImage = imageUrls?.[selectedIndex];
  const totalImages = imageUrls?.length || 0;

   const mainAltText = productName 
    ? `${productName} ${productCategory ? `(${productCategory})` : ""} - View ${selectedIndex + 1} of ${totalImages}`
    : "Product image presentation";

  return (
    <div>
      <div className="">
        <Image
        src={currentImage ?? placeholder}
        alt={mainAltText}
        height={600}
        width={600}
        priority
        className="w-auto h-120 mx-auto rounded-2xl object-cover"
      />
      </div>

      <div className="flex gap-3 mt-10 justify-center">
        {imageUrls?.map((url, index) => {
          const isSelected = selectedIndex === index;
        
        return (
           <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Switch main display to ${productName} view ${index + 1} of ${totalImages}`}
              aria-current={isSelected ? "true" : undefined}
              className={`relative h-20 w-20 overflow-hidden rounded-md border-2 transition-all focus-visible:outline-2 focus-visible:outline-blue-500 ${
                isSelected 
                  ? "border-primary scale-110" 
                  : "border-primary opacity-80 hover:opacity-100"
              }`}
            >
          <Image
            src={url ?? placeholder}
            alt=""
            height={250}
            width={250}
            className="h-20 w-20 object-cover rounded-md border-2 border-primary/50"
          />
          </button>
        );
      })}
      </div>
    </div>
  );
};

export default ProductImage;