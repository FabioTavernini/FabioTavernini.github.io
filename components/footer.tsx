// components/Footer.tsx
"use client";

import { FaBeer } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-lg font-bold">Fabio Tavernini</p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>




          <div className="flex space-x-6">
            <a href="https://twitter.com" aria-label="Twitter">
              <FaBeer size={25} />
            </a>
            <a href="https://github.com" aria-label="GitHub">
            <FaBeer size={25} />
            </a>
            <a href="https://discord.com" aria-label="Discord">
            <FaBeer size={25} />
            </a>
          </div>



         
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Built with Next.js, Tailwind CSS & ❤️ 
          </p>
        </div>


      </div>
    </footer>
  );
};
