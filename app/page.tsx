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
      <main className="flex-1 max-w-350 mx-auto w-full px-6 lg:px-12 pb-26 pt-12">
        <div className="flex justify-between gap-9.5">
          {/* Left Column - Sessions */}
          <div className="mt-16">
            {/* Upcoming Sessions */}
            <section className="mb-20">
              <p className="text-accent-blue text-sm font-bold mb-2.5">
                KEEP UPDATED
              </p>
              <h1 className="text-black text-4xl font-bold mb-7.5">
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
              <p className="text-accent-blue text-sm font-bold mb-2.5">
                KEEP UPDATED
              </p>
              <h2 className="text-black text-4xl font-bold mb-7.5">
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
          <div>
            <RegistrationForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
