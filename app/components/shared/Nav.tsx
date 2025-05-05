"use client";

import { images } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { Icons } from "../icons";

const navLinks = [
  { name: "Features", href: "/" },
  { name: "Integrations", href: "/reviews" },
  { name: "Pricing", href: "/ren-feed" },
  { name: "Reviews", href: "/notifications" },
];

function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white px-6 md:px-14 py-4">
      <div className="flex items-center justify-between flex-wrap gap-6">
        {/* Logo Section */}
        <section className="flex gap-12 items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src={images.logo}
                height={40}
                width={40}
                alt="Ren AI logo"
              />
              <p className="text-lg font-semibold">Ren AI</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm md:text-base">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname === href;

              return (
                <li key={name} className="relative list-none">
                  <Link
                    href={"/"}
                    className={cn(
                      "transition-colors duration-300 hover:text-primary",
                      isActive ? "" : "text-gray-500"
                    )}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button isPrimary={false} name="Login" />
          <button className="btn relative z-20 text-white bg-black rounded-md hover:bg-opacity-80 transition">
            <span className="mt-1 flex items-center gap-2">
              Follow us on
              <Icons.Twitter />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={cn(
                "w-full h-0.5 bg-black transition-all",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "w-full h-0.5 bg-black transition-all",
                isMobileMenuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "w-full h-0.5 bg-black transition-all",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ name, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={name} className="relative list-none">
                    <Link
                      href={"/"}
                      className={cn(
                        "block py-2 transition-colors duration-300 hover:text-primary",
                        isActive ? "text-black font-semibold" : "text-gray-500"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-4 mt-4 pt-4 border-t">
              <Button isPrimary={false} name="Login" />
              <button className="btn relative z-20 text-white bg-black rounded-md hover:bg-opacity-80 transition w-full">
                <span className="mt-1 flex items-center justify-center gap-2">
                  Follow us on
                  <Icons.Twitter />
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
