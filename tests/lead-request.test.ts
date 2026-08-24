import assert from "node:assert/strict";
import test from "node:test";
import { normalizeAndValidateLead } from "../lib/leadRequest.ts";

test("normalizes a valid lead", () => {
  const result = normalizeAndValidateLead({
    leadId: "lead-123",
    name: "  Jane   Customer ",
    phone: "(561) 555-1212",
    email: "JANE@EXAMPLE.COM",
    address: "123 Main Street",
    city: "Boca Raton",
    service: "Garage Door Repair",
    smsOptIn: true,
  });

  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.value.name, "Jane Customer");
  assert.equal(result.value.phone, "+15615551212");
  assert.equal(result.value.email, "jane@example.com");
  assert.equal(result.value.state, "FL");
  assert.equal(result.value.smsOptIn, true);
});

test("rejects an invalid phone number", () => {
  const result = normalizeAndValidateLead({
    name: "Jane Customer",
    phone: "123",
    address: "123 Main Street",
    city: "Miami",
    service: "Garage Door Repair",
  });

  assert.equal(result.ok, false);
});

test("rejects an invalid optional email", () => {
  const result = normalizeAndValidateLead({
    name: "Jane Customer",
    phone: "561-555-1212",
    email: "not-an-email",
    address: "123 Main Street",
    city: "Miami",
    service: "Garage Door Repair",
  });

  assert.equal(result.ok, false);
});

test("bounds untrusted text fields", () => {
  const result = normalizeAndValidateLead({
    name: "Jane Customer",
    phone: "561-555-1212",
    address: "123 Main Street",
    city: "Miami",
    service: "Garage Door Repair",
    message: "x".repeat(5_000),
  });

  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.value.message?.length, 2_000);
});
