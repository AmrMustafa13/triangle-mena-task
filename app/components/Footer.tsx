"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
    { label: "FEEDBACK / SUGGESTION", href: "#" },
  ];

  return (
    <footer className="bg-light-gray-bg pt-8 sm:pt-10 lg:pt-14 pb-5.5">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          {/* Left Section - Logo and Newsletter */}
          <div className="w-full lg:w-auto">
            <Image
              src="/logo.svg"
              alt="Hub71 Logo"
              width={101}
              height={29}
              className="object-contain w-20 sm:w-24 lg:w-25.25"
            />
            <Image
              src="/in-touch.svg"
              alt="Get in Touch"
              width={472}
              height={152}
              className="object-contain mb-5 mt-6 sm:mt-8 lg:mt-12.5 w-full max-w-xs sm:max-w-sm lg:max-w-118"
            />

            <div className="mb-8 lg:mb-15">
              <p className="text-black text-base sm:text-lg lg:text-xl font-bold tracking-wider mb-4 sm:mb-5">
                SUBSCRIBE
                <br />
                TO OUR NEWSLETTER
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row"
              >
                <input
                  type="email"
                  placeholder="Your Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 p-3 sm:p-4 lg:p-5 text-sm border border-black sm:border-r-0 rounded-t sm:rounded-l sm:rounded-tr-none outline-none bg-light-gray-bg font-poppins"
                />
                <button
                  type="submit"
                  className="p-3 sm:p-4 lg:p-5 bg-light-gray-bg border sm:border-l-0 border-black flex items-center justify-center gap-1 text-sm font-bold text-black rounded-b sm:rounded-r sm:rounded-bl-none"
                >
                  SUBSCRIBE
                  <MdOutlineKeyboardArrowRight size={20} color="#000" />
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 lg:mt-16">
            {/* Column 1 */}
            <div
              className="space-y-3 sm:space-y-4 lg:space-y-5 pl-4 sm:pl-5"
              style={{
                borderLeft: "1px solid",
                borderImageSource:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 50.21%, rgba(0, 0, 0, 0) 100%)",
                borderImageSlice: 1,
              }}
            >
              {column1Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs sm:text-sm font-medium text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div
              className="space-y-3 sm:space-y-4 lg:space-y-5 pl-4 sm:pl-5"
              style={{
                borderLeft: "1px solid",
                borderImageSource:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 50.21%, rgba(0, 0, 0, 0) 100%)",
                borderImageSlice: 1,
              }}
            >
              {column2Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs sm:text-sm font-medium text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div
              className="space-y-3 sm:space-y-4 lg:space-y-5 pl-4 sm:pl-5 col-span-2 sm:col-span-1"
              style={{
                borderLeft: "1px solid",
                borderImageSource:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 50.21%, rgba(0, 0, 0, 0) 100%)",
                borderImageSlice: 1,
              }}
            >
              {column3Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs sm:text-sm font-medium text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="pt-6 mt-6 lg:mt-0 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 50.21%, rgba(0, 0, 0, 0) 100%)",
            borderImageSlice: 1,
          }}
        >
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-9">
            <Link href="#" className="text-xs text-black">
              PRIVACY NOTICE
            </Link>
            <Link href="#" className="text-xs text-black">
              TERMS OF USE
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
            <Link href="#">
              <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" color="#000" />
            </Link>
            <Link href="#">
              <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" color="#000" />
            </Link>
            <Link href="#">
              <FaYoutube
                className="w-4 h-4 sm:w-5 sm:h-5"
                color="var(--dark-blue)"
              />
            </Link>
            <Link href="#">
              <FaLinkedinIn
                className="w-4 h-4 sm:w-5 sm:h-5"
                color="var(--dark-blue)"
              />
            </Link>
            <Link href="#">
              <FaTiktok
                className="w-4 h-4 sm:w-5 sm:h-5"
                color="var(--dark-blue)"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
