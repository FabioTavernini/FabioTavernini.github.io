import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

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

            <a href="https://instagram.com/F_Tavernini" target='_blank' aria-label="Instagram">
              <FaInstagram size={25} />
            </a>

            <a href="mailto:fabiomeo.tavernini@gmail.com" target='_blank' aria-label="Mail">
              <FaEnvelope size={25} />
            </a>
            <a href="https://wa.me/41774028394?text=pläuderle" target='_blank' aria-label="Whatsapp">
              <SiWhatsapp size={24} />
            </a>

          </div>

        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-white-500">
            Made with Next.js + React , TailwindCSS & ❤️ <br></br>
            Hosted on netlify
          </p>
        </div>


      </div>
    </footer>
  );
};
