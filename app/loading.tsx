import Header from "./components/Header";
import Footer from "./components/Footer";

function SessionCardSkeleton() {
  return (
    <div className="bg-light-gray-bg-alpha px-6 py-8.5 flex items-center justify-between gap-24 animate-pulse">
      <div className="flex-1">
        <div className="h-4 bg-gray-300 rounded w-48 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-72"></div>
      </div>
      <div className="h-12 bg-gray-300 rounded w-40"></div>
    </div>
  );
}

function SessionsSectionSkeleton() {
  return (
    <section className="mb-20">
      <div className="h-4 bg-gray-300 rounded w-32 mb-2.5 animate-pulse"></div>
      <div className="h-9 bg-gray-300 rounded w-64 mb-7.5 animate-pulse"></div>
      <div className="space-y-4">
        <SessionCardSkeleton />
        <SessionCardSkeleton />
        <SessionCardSkeleton />
      </div>
    </section>
  );
}

function FormSkeleton() {
  return (
    <div className="bg-light-gray-bg-alpha py-14 px-8 animate-pulse">
      <div className="mb-6">
        <div className="h-4 bg-gray-300 rounded w-56 mb-2"></div>
        <div className="h-9 bg-gray-300 rounded w-48 mb-2"></div>
        <div className="h-9 bg-gray-300 rounded w-56"></div>
      </div>
      <div className="h-px bg-gray-300 my-6"></div>
      <div className="space-y-2.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-300 rounded"></div>
        ))}
      </div>
      <div className="flex items-center gap-32 mt-6">
        <div className="flex-1 h-14 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded w-24"></div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-350 mx-auto w-full px-6 lg:px-12 pb-26 pt-12">
        <div className="flex justify-between gap-9.5">
          <div className="mt-16">
            <SessionsSectionSkeleton />
            <SessionsSectionSkeleton />
          </div>
          <div>
            <FormSkeleton />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
