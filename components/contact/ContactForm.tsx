"use client";

import { useId, useState } from "react";
import { SERVICES, getContactRequests, getInquiryContact, type ServiceKey } from "@/lib/team";
import { SITE_URL } from "@/lib/site";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const id = useId();
  const [service, setService] = useState<ServiceKey | "">("");
  const [requestKey, setRequestKey] = useState("");
  const requests = service ? getContactRequests(service) : [];
  const request = requests.find((item) => item.key === requestKey);
  const member = getInquiryContact(service, requestKey);
  const selectedService = SERVICES.find((item) => item.key === service);

  return (
    <form className={styles.form} action="https://formsubmit.co/hello@dolphx.com" method="POST">
      <input type="hidden" name="_subject" value={`DolphX enquiry${selectedService ? ` — ${selectedService.label}` : ""}`} />
      <input type="hidden" name="_next" value={`${SITE_URL}/thank-you`} />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className={styles.honeypot} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="service_label" value={selectedService?.label ?? ""} />
      <input type="hidden" name="request_label" value={request?.label ?? ""} />
      <input type="hidden" name="assigned_member_id" value={member?.id ?? ""} />
      <input type="hidden" name="assigned_contact" value={member?.name ?? ""} />
      <input type="hidden" name="assigned_role" value={member?.role ?? ""} />

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}><span>01</span> What can we help with?</legend>
        <p className={styles.hint}>Choose a service, then the kind of support you need.</p>
        <div className={styles.services}>
          {SERVICES.map((item) => (
            <label key={item.key} className={`${styles.service} ${service === item.key ? styles.selected : ""}`}>
              <input type="radio" name="service" value={item.key} required checked={service === item.key}
                onChange={() => { setService(item.key); setRequestKey(""); }} />
              <span><strong>{item.label}</strong><span className={styles.serviceDescription}>{item.desc}</span></span>
            </label>
          ))}
        </div>
        <label className={styles.label} htmlFor={`${id}-request`}>What do you need help with?</label>
        <select id={`${id}-request`} name="request" className={styles.input} required disabled={!service}
          value={requestKey} onChange={(event) => setRequestKey(event.target.value)}>
          <option value="" disabled>{service ? "Choose your request" : "Choose a service above first"}</option>
          {requests.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
        </select>
        <div className={styles.contact} aria-live="polite" aria-atomic="true">
          {member ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.photo} alt="" width={56} height={56} className={styles.avatar} />
              <div><p className={styles.contactLabel}>Your project contact</p><p className={styles.contactName}>{member.name}</p><p className={styles.role}>{member.role}</p><p className={styles.requestSummary}>{request?.label}</p></div>
            </>
          ) : <p className={styles.emptyContact}>Your project contact will appear here once you choose a request.</p>}
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}><span>02</span> Tell us about your project</legend>
        <p className={styles.hint}>Fields marked * are required.</p>
        <div className={styles.fields}>
          <div><label className={styles.label} htmlFor={`${id}-name`}>Full name *</label><input className={styles.input} id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} /></div>
          <div><label className={styles.label} htmlFor={`${id}-email`}>Email address *</label><input className={styles.input} id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} /></div>
        </div>
        <label className={styles.label} htmlFor={`${id}-company`}>Company <span className={styles.optional}>(optional)</span></label>
        <input className={styles.input} id={`${id}-company`} name="company" autoComplete="organization" maxLength={160} />
        <label className={styles.label} htmlFor={`${id}-message`}>Project details *</label>
        <textarea className={styles.input} id={`${id}-message`} name="message" rows={5} required maxLength={10000}
          placeholder="What would you like to achieve? Share your goals, timeline and any useful context." />
      </fieldset>

      <div className={styles.submitRow}>
        <button className={styles.submit} type="submit" disabled={!member}>Send enquiry <span aria-hidden="true">↗</span></button>
        <p className={styles.hint}>Your enquiry goes to the DolphX team inbox with your selected project contact.</p>
      </div>
      <p className={styles.email}>Prefer email? <a href="mailto:contact@dolphx.com">contact@dolphx.com</a></p>
      <noscript><p>Please enable JavaScript to select your service, or email contact@dolphx.com.</p></noscript>
    </form>
  );
}
