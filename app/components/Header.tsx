"use client";

import Link from "next/link";

const Hub71Logo = () => (
  <svg
    width="120"
    height="32"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="24"
      fontFamily="Arial Black, Arial"
      fontWeight="900"
      fontSize="24"
      fill="#000000"
    >
      HUB71
    </text>
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="7" stroke="#1A2B4A" strokeWidth="2" />
    <path
      d="M16 16L20 20"
      stroke="#1A2B4A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const AccessibilityIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="4" r="2" fill="#1A2B4A" />
    <path
      d="M12 8V14M12 14L8 22M12 14L16 22"
      stroke="#1A2B4A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4 10H20" stroke="#1A2B4A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="#1A2B4A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-350 mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Hub71Logo />
        </Link>

        {/* Right side navigation */}
        <div className="flex items-center gap-3">
          {/* Impact Report Button */}
          <button className="px-5 py-2.5 text-sm font-semibold text-[#1A2B4A] border border-[#1A2B4A] rounded-full hover:bg-gray-50 transition-colors">
            IMPACT
            <br />
            REPORT
          </button>

          {/* Arabic Toggle */}
          <button className="px-4 py-2.5 text-sm font-medium text-white bg-[#E63B2E] rounded-full hover:bg-red-600 transition-colors">
            عربي
          </button>

          {/* Search Icon */}
          <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors">
            <SearchIcon />
          </button>

          {/* Accessibility Icon */}
          <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors">
            <AccessibilityIcon />
          </button>

          {/* Menu Button */}
          <button className="p-2.5 border border-[#00C853] rounded-lg hover:bg-gray-50 transition-colors">
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
