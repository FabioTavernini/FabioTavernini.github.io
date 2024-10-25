// components/ImageGallery.tsx
"use client";

import React, { useState } from "react";

const images = [

  "/images/parking-ticket.jpg",
  "/images/well.jpg",
  "/images/alfa_landscape.jpg",
  "/images/antelope_canyon.jpg",
  "/images/balcony.jpg",
  "/images/falera_summer.jpg",
  "/images/flowerpetal.jpg",
  "/images/gas_station.jpg",
  "/images/grand_canyon.jpg",
  "/images/kantine.jpg",
  "/images/MB-BMW.jpg",
  "/images/monument_valley.jpg",
  "/images/mühlentalstrasse.jpg",
  "/images/plitvice1.jpg",
  "/images/alfa_portrait.jpg",
  "/images/roadstop.jpg",
  "/images/stahlgiesserei.jpg",
  "/images/stars.jpg",
  "/images/plitvice2.jpg",

];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center">

      <h2 className="text-xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">Image Gallery</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 w-screen pl-5 pr-5 justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="h-96 w-auto object-cover cursor-pointer rounded-lg shadow-lg hover:shadow-xl justify-self-center transition-shadow duration-300"
            // onMouseDown={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              className="max-w-full max-h-screen rounded-lg justify-self-center"
            />
            <button
              // onMouseDown={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
