"use client";

import { images } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/reviews" },
  { name: "Ren Feed", href: "/ren-feed" },
  { name: "Notifications", href: "/notifications" },
  { name: "Account", href: "/account" },
];

// List of routes where the navbar should NOT be shown
const hideNavOnRoutes = [
  "/login",
  "/register",
  "/new-review",
  "/business-info",
  "/user-plan",
];

function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  // Check if current path matches any hidden routes
  const shouldHideNav = hideNavOnRoutes.includes(pathname);

  if (shouldHideNav) return null; // hide nav bar entirely

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#EFEFEF] bg-white px-6 md:px-14 py-4">
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

          {/* Navigation Links */}
          <ul className="flex items-center gap-8 text-sm md:text-base">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname === href;

              return (
                <li key={name} className="relative list-none">
                  <Link
                    href={href}
                    className={cn(
                      "transition-colors duration-300 hover:text-primary",
                      isActive ? "text-black font-semibold" : "text-gray-500"
                    )}
                  >
                    {name}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* CTA Button */}
        <div>
          {/* <button
            onClick={() => {
              router.push("/new-review");
            }}
            className="btn text-white primarybg rounded-md hover:bg-opacity-80 transition"
          >
            New Review
          </button> */}
          <button className="btn text-white primarybg rounded-md hover:bg-opacity-80 transition">
            New Review
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
