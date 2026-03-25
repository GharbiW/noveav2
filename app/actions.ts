"use server";

import { redirect } from "next/navigation";
import { type LeadFormData } from "@/lib/schema";
import { env } from "@/lib/env";

export async function submitLead(data: LeadFormData) {
  const payload = {
    ...data,
    source: "DolphX Lead Form",
    submittedAt: new Date().toISOString(),
  };

  // Send to Make.com webhook if configured
  if (env.makeWebhookUrl) {
    await fetch(env.makeWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  // Send to Formspree if configured
  if (env.formspreeEndpoint) {
    await fetch(env.formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  redirect("/thank-you");
}
