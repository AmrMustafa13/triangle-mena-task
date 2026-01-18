"use client";

import Link from "next/link";
import Image from "next/image";
import { IoSearch, IoAccessibility, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { locale, setLocale, t } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white border-b border-border-light"
    >
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-8 lg:py-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Image
              src="/logo.svg"
              alt="Hub71 Logo"
              width={172}
              height={49}
              className="object-contain w-28 sm:w-36 lg:w-43"
            />
          </motion.div>
        </Link>

        {/* Right side navigation */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Impact Report Button - hidden on mobile */}
          <motion.button
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            <Image
              src="/nav-button.png"
              alt={t.header.impactReport}
              width={134}
              height={55}
              className="object-contain rounded-lg shadow-[0px_0px_20px_3px_var(--shadow-color)] w-24 lg:w-33.5"
            />
          </motion.button>
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13.75 lg:h-13.75 text-xs sm:text-sm lg:text-base text-white bg-primary-blue rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {t.header.arabic}
          </motion.button>

          {/* Search Icon - hidden on small mobile */}
          <motion.button
            className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 lg:w-13.75 lg:h-13.75 items-center justify-center bg-white rounded-lg shadow-[0px_0px_20px_3px_var(--shadow-color)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <IoSearch className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5" color="#000" />
          </motion.button>

          {/* Accessibility Icon - hidden on mobile */}
          <motion.button
            className="hidden md:flex w-10 h-10 sm:w-12 sm:h-12 lg:w-13.75 lg:h-13.75 items-center justify-center bg-white rounded-lg shadow-[0px_0px_20px_3px_var(--shadow-color)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <IoAccessibility className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6.5 lg:h-6.5" color="#000" />
          </motion.button>

          {/* Menu Button */}
          <motion.button
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13.75 lg:h-13.75 flex items-center justify-center rounded-lg bg-primary-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <IoMenu className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7.5 lg:h-7.5" color="#FFF" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
