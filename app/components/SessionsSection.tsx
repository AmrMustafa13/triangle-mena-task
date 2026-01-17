import SessionCard from "./SessionCard";
import { SessionsSectionProps } from "../types/components";

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
    <section className={headingLevel === "h1" ? "mb-20" : ""}>
      <p className="text-accent-blue text-sm font-bold mb-2.5">{label}</p>
      <Heading className="text-black text-4xl font-bold mb-7.5">{title}</Heading>

      {sessions.length === 0 ? (
        <div className="bg-light-gray-bg-alpha px-6 py-8 text-center">
          <p className="text-gray-500">{emptyMessage}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <SessionCard
              key={`${buttonType}-${index}`}
              date={session.date}
              time={session.time}
              title={session.title}
              buttonText={buttonText}
              buttonType={buttonType}
            />
          ))}
        </div>
      )}
    </section>
  );
}
