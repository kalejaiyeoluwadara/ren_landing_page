import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/public/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="max-w-7xl  py-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left navigation links */}
          <div className="md:flex hidden space-x-6 mb-4 md:mb-0">
            <Link href="/legal" className="text-gray-600 hover:text-gray-900">
              Legal
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms & Co
            </Link>
          </div>

          {/* Center logo */}
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="bg-red-500 p-2 rounded-md">
                <Image
                  src={images.logo}
                  alt="Ren Logo"
                  className="h-5 w-5 text-white"
                />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">Ren</span>
            </Link>
          </div>

          {/* Right navigation links */}
          <div className="flex items-center md:justify-normal justify-center space-x-6">
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms & Co
            </Link>
            <span className="text-gray-600">© {currentYear} — Copyright</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
