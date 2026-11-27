import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Author photo */
  authorImage?: string;
  /** Image overlay */
  blogImageOverlay?: boolean;
  /** Branding */
  branding: {
    /** Logo alt */
    logo: {
      alt: string;
      /** Logo image */
      imageUrl?: string;
    };
    /** Favicon path */
    favicon: {
      svg: string;
    };
    /** Theme colors */
    colors: {
      /** Toolbar color */
      themeColor: string;
      /** Splash background */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Amir Gireev',
  description:
    '',
  url: SITE_URL || 'https://example.com',
  ogImage: '/og-default.svg',
  author: 'Amir Gireev',
  email: 'amir.gireev05@gmail.com',
  address: {
    street: '',
    city: 'Berlin',
    state: '',
    zip: '',
    country: 'Germany',
  },
  socialLinks: [
  ],
  twitter: {
    site: '',
    creator: '',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  branding: {
    logo: {
      alt: 'Amir Gireev',
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#3b82f6',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
