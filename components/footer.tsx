import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

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
            <a
              aria-label="GitHub"
              href="https://github.com/FabioTavernini"
              rel="noopener"
              target="_blank"
            >
              <FaGithub size={25} />
            </a>

            <a
              aria-label="Instagram"
              href="https://instagram.com/F_Tavernini"
              rel="noopener"
              target="_blank"
            >
              <FaInstagram size={25} />
            </a>

            <a
              aria-label="Mail"
              href="mailto:fabiomeo.tavernini@gmail.com"
              rel="noopener"
              target="_blank"
            >
              <FaEnvelope size={25} />
            </a>
            <a
              aria-label="Whatsapp"
              href="https://wa.me/41774028394?text=pläuderle"
              rel="noopener"
              target="_blank"
            >
              <SiWhatsapp size={24} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-white-500">
            Made with Next.js + React , TailwindCSS & ❤️ <br />
            Hosted on netlify
          </p>
        </div>
      </div>
    </footer>
  );
};
