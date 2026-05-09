import type { Metadata } from "next";
import Hero           from "@/components/home/Hero";
import ClientsGrid    from "@/components/home/ClientsGrid";
import AboutStrip     from "@/components/home/AboutStrip";
import Services       from "@/components/home/Services";
import ComparisonTable from "@/components/home/ComparisonTable";
import GlobalReach    from "@/components/home/GlobalReach";
import Network        from "@/components/home/Network";
import WorkWithUs     from "@/components/home/WorkWithUs";
import TeamShowcase   from "@/components/team/TeamShowcase";

export const metadata: Metadata = {
  title: "DolphX — Owned Media. First-Party Data. Enterprise Delivery.",
  description:
    "DolphX operates 40+ owned media properties and turns 2.4 billion annual first-party data points into consulting strategies, marketing automation, AI intelligence and direct media distribution for enterprise clients.",
  openGraph: {
    title: "DolphX — Owned Media. First-Party Data. Enterprise Delivery.",
    description:
      "40+ owned properties. 120M+ monthly readers. Digital consulting, automation, AI data and media distribution — built on first-party intelligence, not rented audiences.",
    url: "https://dolphx.com",
    siteName: "DolphX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DolphX — Owned Media. First-Party Data. Enterprise Delivery.",
    description:
      "40+ owned properties. 2.4B data points/year. Consulting, automation, AI & distribution — DolphX delivers attribution, not estimates.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsGrid />
      <AboutStrip />   {/* About DolphX / Why DolphX */}
      <Services />        {/* What we do */}
      <ComparisonTable /> {/* Why DolphX vs others */}
      <GlobalReach />     {/* Global Data Network */}
      <Network />      {/* Our Network */}
      <TeamShowcase /> {/* The crew (home + about only) */}
      <WorkWithUs />   {/* Work with us */}
    </>
  );
}
