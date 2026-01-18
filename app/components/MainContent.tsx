"use client";

import SessionsSection from "./SessionsSection";
import RegistrationForm from "./RegistrationForm";
import { MainContentProps } from "../types/components";
import { useLanguage } from "../i18n/LanguageContext";

export default function MainContent({
  upcomingSessions,
  previousSessions,
}: MainContentProps) {
  const { t } = useLanguage();

  return (
    <main className="flex-1 max-w-350 mx-auto w-full px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-26 pt-6 sm:pt-8 lg:pt-12">
      <div className="flex flex-col xl:flex-row justify-between gap-6 sm:gap-8 lg:gap-9.5">
        {/* Left Column - Sessions */}
        <div className="mt-6 sm:mt-10 lg:mt-16 order-2 lg:order-1">
          <SessionsSection
            label={t.sessions.keepUpdated}
            title={t.sessions.upcomingSessions}
            sessions={upcomingSessions}
            buttonText={t.sessions.registerNow}
            buttonType="register"
            headingLevel="h1"
            emptyMessage={t.sessions.noUpcoming}
          />

          <SessionsSection
            label={t.sessions.keepUpdated}
            title={t.sessions.previousSessions}
            sessions={previousSessions}
            buttonText={t.sessions.getRecording}
            buttonType="recording"
            headingLevel="h2"
            emptyMessage={t.sessions.noPrevious}
          />
        </div>

        {/* Right Column - Registration Form */}
        <div className="order-1 lg:order-2 lg:shrink-0">
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
