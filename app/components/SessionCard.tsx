"use client";

import { BiCalendar } from "react-icons/bi";
interface SessionCardProps {
  date: string;
  time: string;
  title: string;
  buttonText: string;
  buttonType: "register" | "recording";
}

export default function SessionCard({
  date,
  time,
  title,
  buttonText,
  buttonType,
}: SessionCardProps) {
  return (
    <div className="bg-light-gray-bg-alpha px-6 py-8.5 flex items-center justify-between gap-24">
      <div className="flex-1">
        {/* Date and Time */}
        <div className="flex gap-2 text-accent-blue text-sm font-bold mb-2">
          <BiCalendar size={16} />
          <span>
            {date} | {time}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-black text-[22px] font-bold leading-tight">
          {title}
        </h3>
      </div>

      {/* Action Button */}
      <button
        className={`px-10 py-5 text-sm font-bold text-white whitespace-nowrap ${
          buttonType === "register" ? "bg-btn-register" : "bg-btn-recording"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
