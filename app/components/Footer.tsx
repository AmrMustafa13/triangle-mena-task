"use client";

import Link from "next/link";
import { useState } from "react";

const Hub71Logo = () => (
  <svg
    width="100"
    height="28"
    viewBox="0 0 100 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="22"
      fontFamily="Arial Black, Arial"
      fontWeight="900"
      fontSize="22"
      fill="#1A2B4A"
    >
      HUB71
    </text>
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke="#1A2B4A"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="4" stroke="#1A2B4A" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="1" fill="#1A2B4A" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991243 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.8384 17.9581 2.17817 18.2945C2.51794 18.6308 2.9389 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42Z"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="9"
      width="4"
      height="12"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="4"
      cy="4"
      r="2"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TiktokIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 3V17C15 19.2091 13.2091 21 11 21C8.79086 21 7 19.2091 7 17"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 7C17.2091 7 19 5.20914 19 3"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="#1A2B4A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const column1Links = [
    { label: "I AM A STARTUP", href: "#" },
    { label: "DISCOVER HUB71+", href: "#" },
    { label: "OUR PARTNERS", href: "#" },
    { label: "EVENTS", href: "#" },
    { label: "ADGM TECH LICENSE", href: "#" },
  ];

  const column2Links = [
    { label: "I WANT TO INVEST", href: "#" },
    { label: "STARTUPS", href: "#" },
    { label: "STARTUP CAREERS", href: "#" },
    { label: "PROGRAMS", href: "#" },
    { label: "CONTACT US", href: "#" },
  ];

  const column3Links = [
    { label: "WHO WE ARE", href: "#" },
    { label: "INVESTORS", href: "#" },
    { label: "LATEST NEWS", href: "#" },
    { label: "REPORTS", href: "#" },
    { label: "FEEDBACK/SUGGESTION", href: "#" },
  ];

  return (
    <footer className="bg-[#F5F5F5] pt-12 pb-6">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10">
          {/* Left Section - Logo and Newsletter */}
          <div className="lg:col-span-4">
            <Hub71Logo />

            <div className="mt-8">
              <h3 className="text-[#00C853] text-3xl font-bold leading-none">
                GET
              </h3>
              <h3 className="text-[#00C853] text-3xl font-black leading-none">
                IN TOUCH
              </h3>
            </div>

            <div className="mt-6">
              <p className="text-[#1A2B4A] text-xs font-bold tracking-wider mb-3">
                SUBSCRIBE
                <br />
                TO OUR NEWSLETTER
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Your Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-l bg-white focus:outline-none focus:border-[#00A651]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white border border-l-0 border-gray-300 rounded-r hover:bg-gray-50 transition-colors flex items-center gap-1 text-xs font-semibold text-[#1A2B4A]"
                >
                  SUBSCRIBE
                  <ArrowIcon />
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-3">
                {column1Links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-xs font-semibold text-[#1A2B4A] hover:text-[#00A651] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                {column2Links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-xs font-semibold text-[#1A2B4A] hover:text-[#00A651] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                {column3Links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-xs font-semibold text-[#1A2B4A] hover:text-[#00A651] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-[#1A2B4A] hover:text-[#00A651] transition-colors"
            >
              PRIVACY NOTICE
            </Link>
            <Link
              href="#"
              className="text-xs text-[#1A2B4A] hover:text-[#00A651] transition-colors"
            >
              TERMS OF USE
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <FacebookIcon />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <InstagramIcon />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <YoutubeIcon />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <LinkedinIcon />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <TiktokIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
