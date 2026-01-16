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
    { label: "FEEDBACK/SUGGESTION", href: "#" },
  ];

  return (
    <footer className="bg-[#EFF1F5] pt-14 pb-5.5">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ">
          {/* Left Section - Logo and Newsletter */}
          <div className="lg:col-span-4">
            <Image
              src="/logo.svg"
              alt="Hub71 Logo"
              width={101}
              height={29}
              className="object-contain"
            />

            <Image
              src="/in-touch.svg"
              alt="Get in Touch"
              width={472}
              height={152}
              className="object-contain mb-2.5 mt-12.5"
            />

            <div className="mb-15">
              <p className="text-black text-xl font-bold tracking-wider mb-5">
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
                  <MdOutlineKeyboardArrowRight size={20} color="#1A2B4A" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-5">
                {column1Links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm font-medium text-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-5">
                {column2Links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm font-medium text-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-5">
                {column3Links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm font-medium text-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 50.21%, rgba(0, 0, 0, 0) 100%)",
            borderImageSlice: 1,
          }}
        >
          <div className="flex items-center gap-9">
            <Link href="#" className="text-xs text-black">
              PRIVACY NOTICE
            </Link>
            <Link href="#" className="text-xs text-black">
              TERMS OF USE
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <Link href="#">
              <FaFacebookF size={20} color="#000" />
            </Link>
            <Link href="#">
              <FaInstagram size={20} color="#000" />
            </Link>
            <Link href="#">
              <FaYoutube size={20} color="#010A4A" />
            </Link>
            <Link href="#">
              <FaLinkedinIn size={20} color="#010A4A" />
            </Link>
            <Link href="#">
              <FaTiktok size={20} color="#010A4A" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
