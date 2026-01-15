import Header from "./components/Header";
import SessionCard from "./components/SessionCard";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

interface Session {
  start: string;
  end: string;
  title: string;
}

interface SessionsResponse {
  sessions: {
    upcoming: Session[];
    previous: Session[];
  };
}

async function getSessions(): Promise<SessionsResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sessions`, {
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch sessions");
  }

  return res.json();
}

function formatSession(session: Session) {
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

export default async function Home() {
  const data = await getSessions();
  const upcomingSessions = data.sessions.upcoming.map(formatSession);
  const previousSessions = data.sessions.previous.map(formatSession);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-350 mx-auto w-full px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Sessions */}
          <div className="lg:col-span-7">
            {/* Upcoming Sessions */}
            <section className="mb-12">
              <p className="text-[#00A651] text-xs font-bold tracking-wider mb-2">
                KEEP UPDATED
              </p>
              <h1 className="text-[#1A2B4A] text-3xl font-bold mb-6">
                Upcoming Sessions
              </h1>

              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <SessionCard
                    key={`upcoming-${index}`}
                    date={session.date}
                    time={session.time}
                    title={session.title}
                    buttonText="REGISTER NOW"
                    buttonType="register"
                  />
                ))}
              </div>
            </section>

            {/* Previous Sessions */}
            <section>
              <p className="text-[#00A651] text-xs font-bold tracking-wider mb-2">
                KEEP UPDATED
              </p>
              <h2 className="text-[#1A2B4A] text-3xl font-bold mb-6">
                Previous Sessions
              </h2>

              <div className="space-y-4">
                {previousSessions.map((session, index) => (
                  <SessionCard
                    key={`previous-${index}`}
                    date={session.date}
                    time={session.time}
                    title={session.title}
                    buttonText="GET RECORDING"
                    buttonType="recording"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Registration Form */}
          <div className="lg:col-span-5">
            <RegistrationForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
