"use client";

interface SessionCardProps {
  date: string;
  time: string;
  title: string;
  buttonText: string;
  buttonType: "register" | "recording";
}

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="2" width="14" height="13" rx="2" stroke="#00A651" strokeWidth="1.5"/>
    <path d="M1 6H15" stroke="#00A651" strokeWidth="1.5"/>
    <path d="M5 1V3" stroke="#00A651" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 1V3" stroke="#00A651" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function SessionCard({ date, time, title, buttonText, buttonType }: SessionCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between gap-4">
      <div className="flex-1">
        {/* Date and Time */}
        <div className="flex items-center gap-2 text-[#00A651] text-xs font-semibold mb-2">
          <CalendarIcon />
          <span>{date} | {time}</span>
        </div>

        {/* Title */}
        <h3 className="text-[#1A2B4A] text-base font-bold leading-tight">
          {title}
        </h3>
      </div>

      {/* Action Button */}
      <button
        className={`px-6 py-3 text-sm font-bold text-white rounded transition-colors whitespace-nowrap ${
          buttonType === "register"
            ? "bg-[#E63B2E] hover:bg-red-600"
            : "bg-[#E63B2E] hover:bg-red-600"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
