import type {
  WebSite,
  Organization,
  Person,
  LocalBusiness,
  BlogPosting,
  BreadcrumbList,
  FAQPage,
  WithContext,
} from 'schema-dts';
import siteConfig from '@/config/site.config';

/** Website schema */
export function createWebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

/** Person schema */
export function createPersonSchema(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    jobTitle: 'Media & Computer Science Student',
    url: siteConfig.url,
    email: siteConfig.email,
    ...(siteConfig.authorImage ? { image: `${siteConfig.url}${siteConfig.authorImage}` } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'DE',
    },
    sameAs: siteConfig.socialLinks,
  };
}

/** Service schema */
export function createProfessionalServiceSchema(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService' as 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.authorImage ? { image: `${siteConfig.url}${siteConfig.authorImage}` } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'DE',
    },
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Worldwide' },
    ],
    sameAs: siteConfig.socialLinks,
  };
}

/** Create Organization schema */
export function createOrganizationSchema(): WithContext<Organization> {
  const logoUrl = siteConfig.branding.logo.imageUrl
    ? `${siteConfig.url}${siteConfig.branding.logo.imageUrl}`
    : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    ...(logoUrl ? { logo: logoUrl } : {}),
    sameAs: siteConfig.socialLinks,
    contactPoint: siteConfig.phone
      ? {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          contactType: 'customer service',
        }
      : undefined,
  };
}

/** BlogPosting schema */
export function createBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
  dateModified?: Date;
  author: { name: string; url?: string };
}): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image,
    datePublished: post.datePublished.toISOString(),
    dateModified: post.dateModified?.toISOString() || post.datePublished.toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      ...(siteConfig.branding.logo.imageUrl
        ? {
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}${siteConfig.branding.logo.imageUrl}`,
            },
          }
        : {}),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };
}

/** Create BreadcrumbList schema */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Create FAQPage schema */
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
