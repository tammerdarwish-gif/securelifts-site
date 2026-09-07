import assert from "node:assert/strict";
import test from "node:test";
import {
  DEFAULT_LEAD_NOTIFICATION_EMAIL,
  getLeadNotificationEmail,
} from "../lib/leadDelivery.ts";

test("uses the active AAA inbox as the default lead destination", () => {
  assert.equal(DEFAULT_LEAD_NOTIFICATION_EMAIL, "info@aaagds.com");
  assert.equal(getLeadNotificationEmail(""), "info@aaagds.com");
});

test("allows the deployed lead destination to be overridden", () => {
  assert.equal(
    getLeadNotificationEmail("  leads@example.com  "),
    "leads@example.com"
  );
});
