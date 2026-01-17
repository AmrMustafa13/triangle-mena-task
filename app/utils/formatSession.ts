import { Session, FormattedSession } from "../types/session";

export function formatSession(session: Session): FormattedSession {
  const startDate = new Date(session.start);
  const endDate = new Date(session.end);

  const date = startDate
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase()
    .replace(" ", " ")
    .replace(",", ",");

  const startTime = startDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const endTime = endDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return {
    date,
    time: `${startTime} TO ${endTime}`,
    title: session.title,
  };
}
