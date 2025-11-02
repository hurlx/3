"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-black text-white px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-24 text-center md:text-right">
        {/* Brand Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight uppercase">
            Rize
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm md:max-w-md mx-auto md:mx-0">
            حقيبتك ليست مجرد إكسسوار — إنها تعبير عن أسلوبك، تميزك، وثقتك.
          </p>
        </div>

        {/* Social Section */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center space-y-4">
          <h3 className="font-semibold text-lg mb-2">تابعنا</h3>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/rizemybags?igsh=MW93ZmNpdXIybGlkbw=="
              target="_blank"
              rel="Instagram"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/963997206837"
              target="_blank"
              rel="WhatsApp"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/14MTnhCys6H/"
              target="_blank"
              rel="Facebook"
              aria-label="Facebook"
              className="text-gray-400 hover:text-gray-200 transition-transform duration-300 hover:scale-110"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-xs tracking-wide">
        © {new Date().getFullYear()} Rize — جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
