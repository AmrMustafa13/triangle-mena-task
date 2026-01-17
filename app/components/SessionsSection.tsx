import SessionCard from "./SessionCard";
import { FormattedSession } from "../types/session";

interface SessionsSectionProps {
  label: string;
  title: string;
  sessions: FormattedSession[];
  buttonText: string;
  buttonType: "register" | "recording";
  headingLevel?: "h1" | "h2";
}

export default function SessionsSection({
  label,
  title,
  sessions,
  buttonText,
  buttonType,
  headingLevel = "h2",
}: SessionsSectionProps) {
  const Heading = headingLevel;

  return (
    <section className={headingLevel === "h1" ? "mb-20" : ""}>
      <p className="text-accent-blue text-sm font-bold mb-2.5">{label}</p>
      <Heading className="text-black text-4xl font-bold mb-7.5">{title}</Heading>

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
    </section>
  );
}
