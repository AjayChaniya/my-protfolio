import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import StructuredData from "./components/StructuredData";
import { projects, siteData } from "./siteData";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: `${siteData.firstName} Chaniya | Frontend Developer Portfolio`,
    template: `%s | ${siteData.firstName} Chaniya`,
  },
  description: siteData.metaDescription,
  applicationName: `${siteData.firstName} Portfolio`,
  keywords: [
    "Frontend Developer",
    "Next.js Portfolio",
    "TypeScript Portfolio",
    "React Developer",
    "Tailwind CSS Portfolio",
  ],
  openGraph: {
    title: `${siteData.firstName} Chaniya | Frontend Developer Portfolio`,
    description: siteData.metaDescription,
    url: siteData.siteUrl,
    siteName: `${siteData.firstName} Portfolio`,
    type: "website",
    images: [
      {
        url: siteData.profileImage,
        width: 1200,
        height: 630,
        alt: `${siteData.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.firstName} Chaniya | Frontend Developer Portfolio`,
    description: siteData.metaDescription,
    images: [siteData.profileImage],
  },
  alternates: {
    canonical: "/",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteData.name,
      jobTitle: siteData.role,
      email: siteData.email,
      url: siteData.siteUrl,
      image: siteData.profileImage,
      address: {
        "@type": "PostalAddress",
        addressCountry: siteData.location,
      },
    },
    {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: project.title,
        description: project.description,
        url: `${siteData.siteUrl}/projects/${project.slug}`,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <StructuredData data={personSchema} />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
