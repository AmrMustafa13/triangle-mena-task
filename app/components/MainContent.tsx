import SessionsSection from "./SessionsSection";
import RegistrationForm from "./RegistrationForm";
import { MainContentProps } from "../types/components";

export default function MainContent({
  upcomingSessions,
  previousSessions,
}: MainContentProps) {
  return (
    <main className="flex-1 max-w-350 mx-auto w-full px-6 lg:px-12 pb-26 pt-12">
      <div className="flex justify-between gap-9.5">
        {/* Left Column - Sessions */}
        <div className="mt-16">
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
        <div>
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
