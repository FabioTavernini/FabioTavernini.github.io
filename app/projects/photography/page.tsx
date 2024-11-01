"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

const images = [
  "parking-ticket.jpg",
  "well.jpg",
  "alfa_landscape.jpg",
  "antelope_canyon.jpg",
  "balcony.jpg",
  "falera_summer.jpg",
  "flowerpetal.jpg",
  "gas_station.jpg",
  "grand_canyon.jpg",
  "kantine.jpg",
  "MB-BMW.jpg",
  "monument_valley.jpg",
  "mühlentalstrasse.jpg",
  "plitvice1.jpg",
  "alfa_portrait.jpg",
  "roadstop.jpg",
  "stahlgiesserei.jpg",
  "plitvice2.jpg",
].map((img) => `/images/thumbnails/${img}`); // Update paths to thumbnails

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null); // Clear selected image on Escape key press
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (

    <div className="flex flex-col items-center">
      
      <h2 className="text-xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">Image Gallery</h2>

      <h3 className="bg-gradient-to-r from-yellow-400 to-red-600 text-transparent bg-clip-text font-bold text-xs leading-2 sm:text-xl sm:tracking-tight">Be patient when loading an image. When clicking on one, the "uncompressed" file is loaded :)</h3>
  

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[98vw] justify-center">
        {images.map((src, index) => (
          <Button
            key={index}
            onPress={() => setSelectedImage(src.replace('/thumbnails/', '/'))} 
            className="h-96 w-64 lg:h-auto lg:w-auto object-cover cursor-pointer rounded-lg shadow-lg hover:shadow-xl justify-self-center transition-shadow duration-300"
            style={{ background: 'none', border: 'none' }}
          >
            <img
              src={src}
              className="h-96 w-64 lg:h-auto lg:w-auto object-cover cursor-pointer rounded-lg shadow-lg hover:shadow-xl justify-self-center transition-shadow duration-300"
             
            />
          </Button>
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
            <Button
              onPress={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-xl font-bold bg-red-500"
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
