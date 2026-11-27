import type { ConsentConfig } from '@/lib/consent.types';

const consentConfig: ConsentConfig = {
  /** Consent version */
  version: 1,

  /** Consent mode */
  mode: 'consent_mode_v2',

  /** Storage key */
  storageKey: 'cookie-consent',

  categories: {
    necessary: {
      label: 'Necessary',
      description: 'Essential cookies required for the website to function. These cannot be disabled.',
      required: true,
      defaultEnabled: true,
      gcmTypes: ['security_storage'],
    },
    analytics: {
      label: 'Analytics',
      description: 'Help us understand how visitors interact with the website by collecting anonymous usage data.',
      required: false,
      defaultEnabled: false,
      gcmTypes: ['analytics_storage'],
    },
    marketing: {
      label: 'Marketing',
      description: 'Used to deliver relevant ads and track ad campaign performance across websites.',
      required: false,
      defaultEnabled: false,
      gcmTypes: ['ad_storage', 'ad_user_data', 'ad_personalization'],
    },
    preferences: {
      label: 'Preferences',
      description: 'Allow the website to remember choices you make, such as language or region.',
      required: false,
      defaultEnabled: false,
      gcmTypes: ['functionality_storage', 'personalization_storage'],
    },
  },

  ui: {
    heading: 'Cookie Preferences',
    description: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.',
    acceptAll: 'Accept All',
    declineAll: 'Decline All',
    customize: 'Customize',
    savePreferences: 'Save Preferences',
    settingsHeading: 'Privacy Settings',
    alwaysOnLabel: 'Always on',
    privacyPolicyLabel: 'Privacy Policy',
  },

  /** Banner delay */
  showDelay: 500,
};

export default consentConfig;
