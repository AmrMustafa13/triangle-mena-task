import SessionsSection from "./SessionsSection";
import RegistrationForm from "./RegistrationForm";
import { MainContentProps } from "../types/components";

export default function MainContent({
  upcomingSessions,
  previousSessions,
}: MainContentProps) {
  return (
    <main className="flex-1 max-w-350 mx-auto w-full px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-26 pt-6 sm:pt-8 lg:pt-12">
      <div className="flex flex-col xl:flex-row justify-between gap-6 sm:gap-8 lg:gap-9.5">
        {/* Left Column - Sessions */}
        <div className="mt-6 sm:mt-10 lg:mt-16 order-2 lg:order-1">
          <SessionsSection
            label="KEEP UPDATED"
            title="Upcoming Sessions"
            sessions={upcomingSessions}
            buttonText="REGISTER NOW"
            buttonType="register"
            headingLevel="h1"
            emptyMessage="No upcoming sessions available"
          />

          <SessionsSection
            label="KEEP UPDATED"
            title="Previous Sessions"
            sessions={previousSessions}
            buttonText="GET RECORDING"
            buttonType="recording"
            headingLevel="h2"
            emptyMessage="No previous sessions available"
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
