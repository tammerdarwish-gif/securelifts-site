export const DEFAULT_LEAD_NOTIFICATION_EMAIL = "info@aaagds.com";

export function getLeadNotificationEmail(value = process.env.LEAD_NOTIFICATION_EMAIL) {
  return value?.trim() || DEFAULT_LEAD_NOTIFICATION_EMAIL;
}
