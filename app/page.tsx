import type { Metadata } from "next";
import Hero           from "@/components/home/Hero";
import ClientsGrid    from "@/components/home/ClientsGrid";
import AboutStrip     from "@/components/home/AboutStrip";
import Services       from "@/components/home/Services";
import Method         from "@/components/home/Method";
import ComparisonTable from "@/components/home/ComparisonTable";
import MultiProperty  from "@/components/home/MultiProperty";
import Integrations   from "@/components/home/Integrations";
import GlobalReach    from "@/components/home/GlobalReach";
import Network        from "@/components/home/Network";
import WorkWithUs     from "@/components/home/WorkWithUs";
import TeamShowcase   from "@/components/team/TeamShowcase";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://dolphx.com",
    siteName: "DolphX",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/brand/icon.webp", alt: "DolphX" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/brand/icon.webp", alt: "DolphX" }],
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsGrid />
      <AboutStrip />   {/* About DolphX / Why DolphX */}
      <Services />        {/* What we do */}
      <Method />          {/* How we operate — engagement timeline */}
      <ComparisonTable /> {/* Why DolphX vs others */}
      <MultiProperty />   {/* Product console — multi-property */}
      <Integrations />    {/* Ecosystem / integrations */}
      <GlobalReach />     {/* Global Data Network */}
      <Network />      {/* Our Network */}
      <TeamShowcase /> {/* The crew (home + about only) */}
      <WorkWithUs />   {/* Work with us */}
    </>
  );
}
