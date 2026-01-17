import { FormattedSession } from "./session";

export type ButtonType = "register" | "recording";

export type HeadingLevel = "h1" | "h2";

export interface SessionCardProps {
  date: string;
  time: string;
  title: string;
  buttonText: string;
  buttonType: ButtonType;
}

export interface SessionsSectionProps {
  label: string;
  title: string;
  sessions: FormattedSession[];
  buttonText: string;
  buttonType: ButtonType;
  headingLevel?: HeadingLevel;
}

export interface MainContentProps {
  upcomingSessions: FormattedSession[];
  previousSessions: FormattedSession[];
}
