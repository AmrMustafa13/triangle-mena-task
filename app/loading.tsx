import Header from "./components/Header";
import Footer from "./components/Footer";

function SessionCardSkeleton() {
  return (
    <div className="bg-light-gray-bg-alpha px-4 sm:px-5 lg:px-6 py-5 sm:py-6 lg:py-8.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-24 animate-pulse">
      <div className="flex-1 w-full sm:w-auto">
        <div className="h-3 sm:h-4 bg-gray-300 rounded w-32 sm:w-48 mb-1.5 sm:mb-2"></div>
        <div className="h-4 sm:h-6 bg-gray-300 rounded w-full sm:w-72"></div>
      </div>
      <div className="h-10 sm:h-12 bg-gray-300 rounded w-full sm:w-40"></div>
    </div>
  );
}

function SessionsSectionSkeleton() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-20">
      <div className="h-3 sm:h-4 bg-gray-300 rounded w-24 sm:w-32 mb-1.5 sm:mb-2 lg:mb-2.5 animate-pulse"></div>
      <div className="h-6 sm:h-8 lg:h-9 bg-gray-300 rounded w-48 sm:w-64 mb-4 sm:mb-5 lg:mb-7.5 animate-pulse"></div>
      <div className="space-y-3 sm:space-y-4">
        <SessionCardSkeleton />
        <SessionCardSkeleton />
        <SessionCardSkeleton />
      </div>
    </section>
  );
}

function FormSkeleton() {
  return (
    <div className="bg-light-gray-bg-alpha py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="mb-4 sm:mb-6">
        <div className="h-3 sm:h-4 bg-gray-300 rounded w-40 sm:w-56 mb-1.5 sm:mb-2"></div>
        <div className="h-6 sm:h-8 lg:h-9 bg-gray-300 rounded w-36 sm:w-48 mb-2"></div>
        <div className="h-6 sm:h-8 lg:h-9 bg-gray-300 rounded w-44 sm:w-56"></div>
      </div>
      <div className="h-px bg-gray-300 my-4 sm:my-6"></div>
      <div className="space-y-2.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-10 sm:h-12 bg-gray-300 rounded"></div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 lg:gap-32 mt-5 sm:mt-6">
        <div className="flex-1 h-12 sm:h-14 bg-gray-300 rounded"></div>
        <div className="h-5 sm:h-6 bg-gray-300 rounded w-24 mx-auto sm:mx-0"></div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-350 mx-auto w-full px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-26 pt-6 sm:pt-8 lg:pt-12">
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-9.5">
          <div className="mt-6 sm:mt-10 lg:mt-16 order-2 lg:order-1">
            <SessionsSectionSkeleton />
            <SessionsSectionSkeleton />
          </div>
          <div className="order-1 lg:order-2 lg:shrink-0">
            <FormSkeleton />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
