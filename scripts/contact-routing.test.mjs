import assert from "node:assert/strict";
import test from "node:test";
import { TEAM, SERVICES, getContactRequests, getInquiryContact } from "../lib/team.ts";

test("every advertised request has exactly one valid team owner", () => {
  const routes = new Set();
  for (const member of TEAM) {
    for (const request of member.contactRequests) {
      assert(SERVICES.some((service) => service.key === request.service), "Unknown service");
      const route = `${request.service}.${request.key}`;
      assert(!routes.has(route), `Duplicate owner for ${route}`);
      routes.add(route);
      assert.equal(getInquiryContact(request.service, request.key), member);
    }
  }
  for (const service of SERVICES) {
    assert(getContactRequests(service.key).length > 0, `${service.key} has no requests`);
  }
});

test("different specialisms reach their responsible team members", () => {
  assert.equal(getInquiryContact("consulting", "audit")?.name, "Elif Şahin");
  assert.equal(getInquiryContact("consulting", "seo")?.name, "Emir Kaya");
  assert.equal(getInquiryContact("automation", "saas")?.name, "Wael Gharbi");
  assert.equal(getInquiryContact("aidata", "signals")?.name, "Aylin Arslan");
  assert.equal(getInquiryContact("media", "editorial")?.name, "Claire Moreau");
  assert.equal(getInquiryContact("general", "investment")?.name, "Kerem Yılmaz");
  assert.equal(getInquiryContact("general", "operations")?.name, "Mehmet Adali");
  assert.equal(getInquiryContact("general", "onboarding")?.name, "Selin Yıldız");
});

test("an empty, unknown or stale request cannot assign an unrelated contact", () => {
  assert.equal(getInquiryContact("", ""), undefined);
  assert.equal(getInquiryContact("consulting", "missing"), undefined);
  assert.equal(getInquiryContact("media", "saas"), undefined);
});

test("new requests added to the team list appear without another routing table", () => {
  const member = TEAM.find((item) => item.name === "Wael Gharbi");
  member.contactRequests.push({ service: "automation", key: "test-new-request", label: "New project type" });
  try {
    assert(getContactRequests("automation").some((request) => request.key === "test-new-request"));
    assert.equal(getInquiryContact("automation", "test-new-request"), member);
  } finally {
    member.contactRequests.pop();
  }
});
