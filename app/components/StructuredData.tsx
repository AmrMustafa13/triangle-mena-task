import { Session } from "../types/session";

interface OrganizationSchemaProps {
  siteUrl: string;
}

interface EventSchemaProps {
  sessions: Session[];
  siteUrl: string;
}

export function OrganizationSchema({ siteUrl }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hub71",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Hub71 is Abu Dhabi's global tech ecosystem designed to enable startups and scale-ups to grow.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    sameAs: [
      "https://www.facebook.com/Hub71AD",
      "https://www.instagram.com/hub71ad",
      "https://www.linkedin.com/company/hub71",
      "https://www.youtube.com/@Hub71AD",
      "https://www.tiktok.com/@hub71ad",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function EventListSchema({ sessions, siteUrl }: EventSchemaProps) {
  if (!sessions || sessions.length === 0) return null;

  const eventSchemas = sessions.map((session) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: session.title,
    startDate: session.start,
    endDate: session.end,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: siteUrl,
    },
    organizer: {
      "@type": "Organization",
      name: "Hub71",
      url: siteUrl,
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": eventSchemas,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({ siteUrl }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hub71 Sessions",
    description:
      "Join Hub71 Info Sessions to explore Abu Dhabi's leading tech ecosystem. Connect with startups, investors, and industry experts.",
    url: siteUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Hub71",
      url: siteUrl,
    },
    about: {
      "@type": "Thing",
      name: "Tech Ecosystem Events",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Entrepreneurs, Startups, Investors",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
