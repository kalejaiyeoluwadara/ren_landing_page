"use client";

import { images } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
              <span className="text-lg font-semibold">Ren</span>
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
          <button className="btn !font-light relative z-20 text-white bg-black rounded-md hover:bg-opacity-80 transition">
            <span className="mt-1 flex items-center gap-2">
              Follow us on
              <Icons.Twitter />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
