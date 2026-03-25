import type { Metadata } from "next";
import Hero           from "@/components/home/Hero";
import ClientsGrid    from "@/components/home/ClientsGrid";
import AboutStrip     from "@/components/home/AboutStrip";
import Services       from "@/components/home/Services";
import ComparisonTable from "@/components/home/ComparisonTable";
import GlobalReach    from "@/components/home/GlobalReach";
import Network        from "@/components/home/Network";
import WorkWithUs     from "@/components/home/WorkWithUs";

export const metadata: Metadata = {
  title: "DolphX — Intelligent Media. Measurable Growth.",
  description:
    "DolphX is a technology-mediatique company. We deliver digital consulting, marketing automation & SaaS, AI-powered data intelligence and media distribution — powered by 40+ owned media properties.",
  openGraph: {
    title: "DolphX — Intelligent Media. Measurable Growth.",
    description:
      "A technology-mediatique platform operating 40+ owned media properties and delivering measurable audience intelligence for enterprise clients.",
    url: "https://dolphx.com",
    siteName: "DolphX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DolphX — Intelligent Media. Measurable Growth.",
    description:
      "Technology-mediatique company. 40+ owned properties. 120M+ monthly readers. Proprietary audience data for enterprise growth.",
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
      <WorkWithUs />   {/* Work with us */}
    </>
  );
}
