// components/Footer.tsx
"use client";

import { FaBeer, FaDiscord, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

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

            <a href="https://github.com/FabioTavernini" target='_blank' aria-label="GitHub">
            <FaGithub size={25} />
            </a>

            <a href="https://instagram.com/F_Tavernini" target='_blank' aria-label="Twitter">
              <FaInstagram size={25} />
            </a>


            <a href="mailto:fabiomeo.tavernini@gmail.com" target='_blank' aria-label="Twitter">
              <FaEnvelope size={25} />
            </a>




            {/* <a href="https://www.linkedin.com/in/fabio-tavernini-429750256/" target='_blank' aria-label="Discord">
            <FaLinkedin size={25} /> 
            </a> */}

            
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
