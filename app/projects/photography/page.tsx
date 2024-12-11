"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import Masonry from 'react-masonry-css';

const images = [
  "parking-ticket.jpg",
  "well.jpg",
  "alfa_landscape.jpg",
  "grafenbuckstieg.jpg",
  "antelope_canyon.jpg",
  "balcony.jpg",
  "falera_summer.jpg",
  "flowerpetal.jpg",
  "gas_station.jpg",
  "stahlgiesserei.jpg",
  "grand_canyon.jpg",
  
  "MB-BMW.jpg",
  "monument_valley.jpg",
  "mühlentalstrasse.jpg",
  "plitvice1.jpg",
  "kantine.jpg",
  "alfa_portrait.jpg",
  "roadstop.jpg",
  "plitvice2.jpg",
  "velo.jpg",
  "hochstrasse.jpg",
  "sbb.jpg",
].map((img) => `/images/thumbnails/${img}`);

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Handle Escape key for modal
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    // Toggle Back to Top button visibility
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="bg-gradient-to-r from-yellow-400 to-red-600 text-transparent bg-clip-text font-bold text-2xl leading-2 sm:text-2xl sm:tracking-tight ">Image Gallery</h2>
      <h3 className="text-md font-bold leading-7 text-white sm:truncate sm:text-md sm:tracking-tight mb-5">
        Be patient when loading an image. When clicking on one, the high-res file is loaded :)
      </h3>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="flex justify-center w-[97vw]"
        columnClassName="masonry-grid-column"
      >
        {images.map((src, index) => (
          <Button
            key={index}
            onPress={() => setSelectedImage(src.replace('/thumbnails/', '/photography/'))}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover rounded-lg"
            style={{ background: 'none', border: 'none', marginBottom: '10px' }} // Add margin for spacing
          >
            <img
              src={src}
              className="w-full h-auto object-cover rounded-lg"
            />
          </Button>
        ))}
      </Masonry>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              className="max-w-full max-h-screen rounded-lg"
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

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="mt-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Back to top">
          Back to top
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
