"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Programme {
  id: string;
  type: "sector-specific" | "specialised" | "general";
  name: string;
  description: string;
  hasApplyButton: boolean;
  stage: "ideation" | "pre-seed" | "high-performers";
}

const programmes: Programme[] = [
  {
    id: "initiate",
    type: "sector-specific",
    name: "Initiate",
    description:
      "Are you a founder with a bold idea but need the right support to turn it into a successful startup?",
    hasApplyButton: true,
    stage: "ideation",
  },
  {
    id: "access",
    type: "general",
    name: "Access",
    description:
      "Are you an established startup seeking investment opportunities and hoping to gain a foothold in Abu Dhabi so you can scale your business?",
    hasApplyButton: false,
    stage: "pre-seed",
  },
  {
    id: "sector-agnostic",
    type: "specialised",
    name: "SECTOR AGNOSTIC",
    description:
      "Are you a founder with a bold idea but need the right support to turn it into a successful startup?",
    hasApplyButton: true,
    stage: "pre-seed",
  },
  {
    id: "life-sciences",
    type: "specialised",
    name: "LIFE SCIENCES",
    description:
      "Are you a founder with a bold idea but need the right support to turn it into a successful startup?",
    hasApplyButton: true,
    stage: "pre-seed",
  },
  {
    id: "digital-assets",
    type: "specialised",
    name: "DIGITAL ASSETS",
    description:
      "Are you a start-up operating in Web3 or leveraging blockchain technology?",
    hasApplyButton: true,
    stage: "pre-seed",
  },
  {
    id: "climatetech",
    type: "specialised",
    name: "CLIMATETECH",
    description:
      "Are you a start-up focused on advancing sustainable innovative solutions?",
    hasApplyButton: true,
    stage: "pre-seed",
  },
  {
    id: "bright",
    type: "general",
    name: "BRIGHT",
    description:
      "Are you a founder with a bold idea but need the right support to turn it into a successful startup?",
    hasApplyButton: false,
    stage: "high-performers",
  },
];

const ProgrammeCard = ({
  programme,
  index,
}: {
  programme: Programme;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isSpecialised = programme.type === "specialised";
  const isGeneral = programme.type === "general" && programme.id !== "access";
  const isAccess = programme.id === "access";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative bg-white rounded-lg border border-gray-200 shadow-sm ${
        isSpecialised ? "ml-12" : ""
      }`}
    >
      <div className="p-6">
        {/* Expand button - top right */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 right-4 w-7 h-7 bg-hub71-green text-white rounded flex items-center justify-center hover:bg-green-600 transition-colors text-sm font-bold"
        >
          {isExpanded ? "−" : "+"}
        </button>

        {/* Programme type label */}
        {isSpecialised && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-hub71-green">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-hub71-green text-[11px] font-medium tracking-wide">
              Specialised programme
            </span>
          </div>
        )}

        {programme.type === "sector-specific" && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-hub71-green">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-hub71-green text-[11px] font-medium tracking-wide">
              Sector-specific programme
            </span>
          </div>
        )}

        {/* Programme name */}
        <h3
          className={`font-bold text-dark-blue mb-3 ${
            isAccess || isGeneral ? "text-2xl" : "text-base tracking-widest"
          }`}
        >
          {programme.name}
        </h3>

        {/* Chevrons for Access card */}
        {isAccess && (
          <div className="flex flex-col items-start mb-4">
            <svg
              className="w-5 h-5 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-5 h-5 text-gray-300 -mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-5 h-5 text-gray-300 -mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {programme.hasApplyButton && (
            <button className="bg-hub71-green text-white text-[11px] font-bold px-4 py-2 rounded hover:bg-green-600 transition-colors tracking-wide">
              APPLY NOW
            </button>
          )}
          <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-400">
            +
          </button>
        </div>

        {/* Description - positioned to the right */}
        <p className="text-gray-500 text-sm mt-4 italic max-w-md">
          {programme.description}
        </p>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-6 pb-6 pt-2 border-t border-gray-100"
        >
          <p className="text-gray-500 text-sm">
            More details about the {programme.name} programme will be displayed
            here.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

const TimelineLabel = ({
  lines,
  className = "",
}: {
  lines: string[];
  className?: string;
}) => {
  return (
    <div
      className={`text-[18px] font-bold uppercase text-center leading-tight ${className}`}
    >
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
};

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[70px] font-bold text-black mb-10"
        >
          Hub71 programmes
        </motion.h1>

        <div className="flex gap-15 items-stretch">
          {/* Left Timeline */}
          <div className="hidden lg:block w-[230px] flex-shrink-0 relative self-stretch">
            {/* Background sections with arrows */}
            <div className="absolute inset-0 flex flex-col">
              {/* Light mint section (IDEATION area) */}
              <div className="relative h-[250px] bg-[#EEF9F4]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <svg className="w-4 h-8" viewBox="0 0 16 32" fill="#EEF9F4">
                    <path d="M0 0 L16 16 L0 32 Z" />
                  </svg>
                </div>
              </div>
              {/* Green section (PRE-SEED TO SERIES A area) */}
              <div className="relative flex-1 bg-[#6BCE97]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <svg className="w-4 h-8" viewBox="0 0 16 32" fill="#6BCE97">
                    <path d="M0 0 L16 16 L0 32 Z" />
                  </svg>
                </div>
              </div>
              {/* Dark green section (HIGH PERFORMERS area) */}
              <div className="relative h-[200px] bg-[#36A266]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <svg className="w-4 h-8" viewBox="0 0 16 32" fill="#36A266">
                    <path d="M0 0 L16 16 L0 32 Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stage Labels */}
            <div className="relative z-10 h-full flex flex-col">
              {/* IDEATION */}
              <div className="h-[250px] flex items-center justify-center">
                <TimelineLabel
                  lines={["IDEATION"]}
                  className="text-[#6BCE97]"
                />
              </div>

              {/* PRE-SEED TO SERIES A */}
              <div className="flex-1 flex items-center justify-center">
                <TimelineLabel
                  lines={["PRE-SEED", "TO SERIES A"]}
                  className="text-white"
                />
              </div>

              {/* HIGH PERFORMERS */}
              <div className="h-[200px] flex items-center justify-center">
                <TimelineLabel
                  lines={["HIGH", "PERFORMERS"]}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* Main Content - Programme Cards */}
          <div className="flex-1 min-w-0 space-y-4">
            {programmes.map((programme, index) => (
              <ProgrammeCard
                key={programme.id}
                programme={programme}
                index={index}
              />
            ))}
          </div>

          {/* Right Sidebar - AI Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-64 shrink-0 self-stretch relative"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-blue-900" />
            <div className="relative z-10 h-full">
              <div className="rounded-lg overflow-hidden sticky top-1/2 -translate-y-1/2">
                <div className="relative z-10 p-6">
                  {/* Label */}
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="/star.png"
                      alt="star"
                      width={20}
                      height={20}
                      className="object-contain w-5 h-5"
                    />
                    <span className="text-[#6BCE97] text-sm font-medium">
                      Cross programme ecosystem
                    </span>
                  </div>

                  {/* Title with sparkle */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    <span>✦</span>
                    Hub71+ AI
                    <br />
                    ecosystem
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xs mb-6 leading-relaxed">
                    Select a program to apply for Hub71+ AI benefits and answer
                    the question: &quot;Is your startup using or building AI in
                    its core offering? Which category best fits your
                    focus?&quot;
                  </p>

                  {/* Learn More Button */}
                  <button className="bg-hub71-green text-white text-[11px] font-bold px-5 py-2.5 rounded hover:bg-green-600 transition-colors tracking-wide">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
