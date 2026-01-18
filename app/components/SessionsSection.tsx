"use client";

import SessionCard from "./SessionCard";
import { SessionsSectionProps } from "../types/components";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function SessionsSection({
  label,
  title,
  sessions,
  buttonText,
  buttonType,
  headingLevel = "h2",
  emptyMessage = "No sessions available",
}: SessionsSectionProps) {
  const Heading = headingLevel;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={headingLevel === "h1" ? "mb-10 sm:mb-14 lg:mb-20" : ""}
    >
      <motion.p
        variants={headerVariants}
        className="text-accent-blue text-xs sm:text-sm font-bold mb-1.5 sm:mb-2 lg:mb-2.5"
      >
        {label}
      </motion.p>
      <motion.div variants={headerVariants}>
        <Heading className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 lg:mb-7.5">
          {title}
        </Heading>
      </motion.div>

      {sessions.length === 0 ? (
        <motion.div
          variants={itemVariants}
          className="bg-light-gray-bg-alpha px-4 sm:px-6 py-6 sm:py-8 text-center"
        >
          <p className="text-gray-500 text-sm sm:text-base">{emptyMessage}</p>
        </motion.div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {sessions.map((session, index) => (
            <motion.div key={`${buttonType}-${index}`} variants={itemVariants}>
              <SessionCard
                date={session.date}
                time={session.time}
                title={session.title}
                buttonText={buttonText}
                buttonType={buttonType}
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
