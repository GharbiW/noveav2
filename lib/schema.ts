import { z } from "zod";

export const leadFormSchema = z.object({
  businessType: z.enum(
    ["ecommerce", "saas", "agency", "local-business", "startup", "other"],
    { error: "Please select your business type" }
  ),
  goals: z
    .array(z.string())
    .min(1, "Please select at least one goal"),
  timeline: z.enum(["asap", "1-2-weeks", "1-month", "flexible"], {
    error: "Please select a timeline",
  }),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const businessTypes = [
  { value: "ecommerce", label: "E-Commerce" },
  { value: "saas", label: "SaaS / Software" },
  { value: "agency", label: "Agency / Consulting" },
  { value: "local-business", label: "Local Business" },
  { value: "startup", label: "Startup" },
  { value: "other", label: "Other" },
] as const;

export const goals = [
  { value: "website", label: "New Website" },
  { value: "app", label: "Mobile App" },
  { value: "lead-gen", label: "Lead Generation" },
  { value: "seo", label: "SEO & Visibility" },
  { value: "branding", label: "Branding & Design" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "consulting", label: "Strategy Consulting" },
] as const;

export const timelines = [
  { value: "asap", label: "ASAP - Within 7 days" },
  { value: "1-2-weeks", label: "1-2 Weeks" },
  { value: "1-month", label: "Within a Month" },
  { value: "flexible", label: "Flexible" },
] as const;
