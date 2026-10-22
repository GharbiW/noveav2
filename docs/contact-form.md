# Contact form

The homepage, service pages and Contact page share `components/contact/ContactForm.tsx`.

Edit each person's `contactRequests` in `lib/team.ts` to change assignments. Request options, names, roles and photos all come from that team list. Each service/request pair must belong to one person. Changing the selected service clears the previous request and contact while retaining entered project details.

The form posts to the existing FormSubmit endpoint for `hello@dolphx.com`. The email includes the service, request, assigned member ID, name and role. It does not send to individual team mailboxes: those addresses are not present in the team data. The site no longer simulates a successful submission in local state. FormSubmit handles submission and redirects to the absolute production thank-you URL. Its default CAPTCHA remains enabled, with a honeypot as an additional spam check.

Run `npm run test:contact` (Node 22.18+), `npm run build` and `npm run test:seo` against the running production build. Browser verification should cover service changes, all specialisms, invalid required fields, preserved draft details, submitted field values, and mobile layout. Do not send test enquiries to the live mailbox without explicit authorization. Mailbox activation and actual delivery still need verification in the hosting/mail account.

Verified locally: production build, four routing tests, and all 24-page SEO checks passed. Browser checks covered all five services, stale-contact reset, retained draft details, invalid email validation, the shared homepage form, light/dark themes and a 390px mobile viewport without horizontal overflow. No live enquiry was sent, and these changes have not been deployed.
