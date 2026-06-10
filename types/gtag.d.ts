export {};

declare global {
  interface Window {
    __secureLiftsGoogleTagsReady?: boolean;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    loadSecureLiftsGoogleTags?: () => Promise<void>;
    trackSecureLiftsLeadConversion?: (service?: string) => Promise<boolean>;
    trackSecureLiftsPhoneConversion?: (label?: string) => Promise<boolean>;
  }
}
