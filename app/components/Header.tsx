"use client";

import Link from "next/link";
import Image from "next/image";
import { IoSearch, IoAccessibility, IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-border-light">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-8 lg:py-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Hub71 Logo"
            width={172}
            height={49}
            className="object-contain w-28 sm:w-36 lg:w-43"
          />
        </Link>

        {/* Right side navigation */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Impact Report Button - hidden on mobile */}
          <button className="hidden md:block">
            <Image
              src="/nav-button.png"
              alt="Impact Report Icon"
              width={134}
              height={55}
              className="object-contain rounded-lg shadow-[0px_0px_20px_3px_var(--shadow-color)] w-24 lg:w-33.5"
            />
          </button>
          {/* Arabic Toggle */}
          <button className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13.75 lg:h-13.75 text-xs sm:text-sm lg:text-base text-white bg-primary-blue rounded-lg">
            عربي
          </button>

          {/* Search Icon - hidden on small mobile */}
          <button className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 lg:w-13.75 lg:h-13.75 items-center justify-center bg-white rounded-lg shadow-[0px_0px_20px_3px_var(--shadow-color)]">
            <IoSearch className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5" color="#000" />
          </button>

          {/* Accessibility Icon - hidden on mobile */}
          <button className="hidden md:flex w-10 h-10 sm:w-12 sm:h-12 lg:w-13.75 lg:h-13.75 items-center justify-center bg-white rounded-lg shadow-[0px_0px_20px_3px_var(--shadow-color)]">
            <IoAccessibility className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6.5 lg:h-6.5" color="#000" />
          </button>

          {/* Menu Button */}
          <button className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13.75 lg:h-13.75 flex items-center justify-center rounded-lg bg-primary-blue">
            <IoMenu className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7.5 lg:h-7.5" color="#FFF" />
          </button>
        </div>
      </div>
    </header>
  );
}
