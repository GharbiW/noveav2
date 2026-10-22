import ContactForm from "@/components/contact/ContactForm";

type WorkWithUsProps = { precoloredFaces?: boolean };

export default function WorkWithUs(_: WorkWithUsProps = {}) {
  return (
    <section id="work-with-us" style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)", padding: "80px 20px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Work with us</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 400, color: "var(--color-foreground)", letterSpacing: "-0.025em", lineHeight: 1.15, margin: 0 }}>Let’s talk about your project.</h2>
          <p style={{ fontSize: 15, color: "var(--color-muted-foreground)", lineHeight: 1.7, maxWidth: 540, margin: "16px auto 0" }}>Choose what you need and meet the right contact from our team. Tell us about your project in the form below.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
