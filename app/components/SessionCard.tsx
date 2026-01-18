"use client";

import { BiCalendar } from "react-icons/bi";
import { SessionCardProps } from "../types/components";
import { motion } from "framer-motion";

export default function SessionCard({
  date,
  time,
  title,
  buttonText,
  buttonType,
}: SessionCardProps) {
  return (
    <motion.div
      className="bg-light-gray-bg-alpha px-4 sm:px-5 lg:px-6 py-5 sm:py-6 lg:py-8.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-24"
      whileHover={{
        scale: 1.01,
        backgroundColor: "rgba(239, 241, 245, 0.7)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex-1 w-full sm:w-auto">
        {/* Date and Time */}
        <div className="flex gap-2 text-accent-blue text-xs sm:text-sm font-bold mb-1.5 sm:mb-2">
          <BiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="break-words">
            {date} | {time}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-black text-base sm:text-lg lg:text-5.5 font-bold leading-tight">
          {title}
        </h3>
      </div>

      {/* Action Button */}
      <motion.button
        className={`w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-xs sm:text-sm font-bold text-white whitespace-nowrap ${
          buttonType === "register" ? "bg-btn-register" : "bg-btn-recording"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
