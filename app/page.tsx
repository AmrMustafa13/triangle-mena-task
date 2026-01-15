import Header from "./components/Header";
import SessionCard from "./components/SessionCard";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

const upcomingSessions = [
  {
    date: "29 JUL, 2025",
    time: "10:00 TO 12:00 PM",
    title: "Info Session: A Deep Dive into the Hub71 Ecosystem",
  },
  {
    date: "29 JUL, 2025",
    time: "10:00 TO 12:00 PM",
    title: "Info Session: A Deep Dive into the Hub71 Ecosystem",
  },
  {
    date: "29 JUL, 2025",
    time: "10:00 TO 12:00 PM",
    title: "Info Session: A Deep Dive into the Hub71 Ecosystem",
  },
];

const previousSessions = [
  {
    date: "29 JUL, 2025",
    time: "10:00 TO 12:00 PM",
    title: "Info Session: A Deep Dive into the Hub71 Ecosystem",
  },
  {
    date: "29 JUL, 2025",
    time: "10:00 TO 12:00 PM",
    title: "Info Session: A Deep Dive into the Hub71 Ecosystem",
  },
  {
    date: "29 JUL, 2025",
    time: "10:00 TO 12:00 PM",
    title: "Info Session: A Deep Dive into the Hub71 Ecosystem",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-12">
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
