"use client";

import Link from "next/link";
import Image from "next/image";
import { IoSearch, IoAccessibility, IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-[#E5E5E5]">
      <div className="max-w-350 mx-auto px-6 lg:px-12 py-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Hub71 Logo"
            width={172}
            height={49}
            className="object-contain"
          />
        </Link>

        {/* Right side navigation */}
        <div className="flex items-center gap-4">
          {/* Impact Report Button */}
          <button>
            <Image
              src="/nav-button.png"
              alt="Impact Report Icon"
              width={134}
              height={55}
              className="object-contain rounded-lg shadow-[0px_0px_20px_3px_#0000001A]"
            />
          </button>
          {/* Arabic Toggle */}
          <button className="w-13.75 h-13.75 text-white bg-[#0347FF] rounded-lg">
            عربي
          </button>

          {/* Search Icon */}
          <button className="w-13.75 h-13.75 flex items-center justify-center bg-white rounded-lg shadow-[0px_0px_20px_3px_#0000001A]">
            <IoSearch size={22} color="#000" />
          </button>

          {/* PersonStanding Icon */}
          <button className="w-13.75 h-13.75 flex items-center justify-center bg-white rounded-lg shadow-[0px_0px_20px_3px_#0000001A]">
            <IoAccessibility size={26} color="#000" />
          </button>

          {/* Menu Button */}
          <button className="w-13.75 h-13.75 flex items-center justify-center rounded-lg bg-[#0347FF]">
            <IoMenu size={30} color="#FFF" />
          </button>
        </div>
      </div>
    </header>
  );
}
