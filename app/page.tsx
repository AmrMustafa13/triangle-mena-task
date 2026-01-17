import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { SessionsResponse } from "./types/session";
import { formatSession } from "./utils/formatSession";

async function getSessions(): Promise<SessionsResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sessions`,
    {
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch sessions");
  }

  return res.json();
}

export default async function Home() {
  const data = await getSessions();
  const upcomingSessions = data.sessions.upcoming.map(formatSession);
  const previousSessions = data.sessions.previous.map(formatSession);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <MainContent
        upcomingSessions={upcomingSessions}
        previousSessions={previousSessions}
      />
      <Footer />
    </div>
  );
}
