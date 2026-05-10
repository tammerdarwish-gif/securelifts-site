export {};

declare global {
  interface Window {
    __secureLiftsGoogleTagsReady?: boolean;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    loadSecureLiftsGoogleTags?: () => void;
  }
}
