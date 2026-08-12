"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductImageLightbox from "./ProductImageLightbox";

export default function ProductGallery({
  images = [],
  productName = "",
  wrapperClassName = "relative h-64 w-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)]",
  thumbnailClassName = "h-16 w-24 rounded-md bg-[#F7FAFC] overflow-hidden",
}) {
  const validImages = (images || []).filter(Boolean);
  const [index, setIndex] = useState(0);
  const main = validImages.length > 0 ? validImages[index] : null;

  return (
    <div className="flex flex-col items-center gap-4">
      {main ? (
        <ProductImageLightbox
          imageUrl={main}
          productName={productName}
          wrapperClassName={wrapperClassName}
          imagePadding="p-6"
        />
      ) : (
        <div className={wrapperClassName}>
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl opacity-10">📦</span>
          </div>
        </div>
      )}

      {validImages.length > 1 && (
        <div className="flex gap-3">
          {validImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`focus:outline-none ${thumbnailClassName} ${i === index ? "ring-2 ring-[#C8A96E]" : ""}`}
              aria-label={`Show image ${i + 1}`}
            >
              <div className="relative h-full w-full">
                <Image src={src} alt={`${productName} ${i + 1}`} fill className="object-contain p-2" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}