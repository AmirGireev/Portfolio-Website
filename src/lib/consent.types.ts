/** Consent types */

/** Built-in categories */
export type DefaultConsentCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

/** Category key */
export type ConsentCategory = string;

/** Consent enforcement mode */
export type ConsentModeType = 'consent_mode_v2' | 'strict';

/** GCM types */
export type GCMType =
  | 'ad_storage'
  | 'ad_user_data'
  | 'ad_personalization'
  | 'analytics_storage'
  | 'functionality_storage'
  | 'personalization_storage'
  | 'security_storage';

/** Category config */
export interface ConsentCategoryConfig {
  /** Display label */
  label: string;
  /** Description */
  description: string;
  /** Required */
  required: boolean;
  /** Default state */
  defaultEnabled: boolean;
  /** GCM mapping */
  gcmTypes: GCMType[];
}

/** Stored preferences */
export interface ConsentPreferences {
  /** Config version */
  version: number;
  /** Consent timestamp */
  timestamp: string;
  /** Per-category granted/denied state */
  categories: Record<string, boolean>;
}

/** Banner text */
export interface ConsentUIText {
  heading: string;
  description: string;
  acceptAll: string;
  declineAll: string;
  customize: string;
  savePreferences: string;
  settingsHeading: string;
  /** Required label */
  alwaysOnLabel?: string;
  /** Privacy label */
  privacyPolicyLabel?: string;
}

/** Consent config */
export interface ConsentConfig {
  /** Consent version */
  version: number;
  /** Enforcement mode */
  mode: ConsentModeType;
  /** Storage key */
  storageKey: string;
  /** Category definitions */
  categories: Record<string, ConsentCategoryConfig>;
  /** UI text strings */
  ui: ConsentUIText;
  /** Banner delay */
  showDelay: number;
}
