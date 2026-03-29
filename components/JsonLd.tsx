import { siteConfig } from "@/lib/config";
import { personal } from "@/lib/data";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: siteConfig.url,
    email: personal.email,
    telephone: personal.phone,
    jobTitle: personal.role,
    worksFor: {
      "@type": "Organization",
      name: personal.company,
      url: personal.companyUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University",
    },
    sameAs: [personal.github, personal.linkedin],
    knowsAbout: [
      "Next.js",
      "React",
      "NestJS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Full Stack Web Development",
      "Software Engineering",
    ],
    description: siteConfig.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
