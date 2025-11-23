"use client";

import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export const Footer = () => {
  const icons = [
    {
      label: "GitHub",
      href: "https://github.com/FabioTavernini",
      icon: <FaGithub size={25} />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/F_Tavernini",
      icon: <FaInstagram size={25} />,
    },
    {
      label: "Mail",
      href: "mailto:fabiomeo.tavernini@gmail.com",
      icon: <FaEnvelope size={25} />,
    },
    {
      label: "Whatsapp",
      href: "https://wa.me/41774028394?text=pläuderle",
      icon: <SiWhatsapp size={24} />,
    },
  ];

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
            {icons.map(({ label, href, icon }) => (
              <motion.a
                key={label}
                whileHover={{ y: -8, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 500 }}
                aria-label={label}
                href={href}
                rel="noopener"
                target="_blank"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-white-500">
            Made with Next.js + React, TailwindCSS & ❤️ <br />
            Hosted on Netlify
          </p>
        </div>
      </div>
    </footer>
  );
};
