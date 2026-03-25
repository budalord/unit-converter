import { siteConfig } from '@/config/site';

interface ToolJsonLdProps {
  name: string;
  description: string;
  slug: string;
  howToSteps: string[];
  faqs: { q: string; a: string }[];
  url?: string;
}

export default function ToolJsonLd({ name, description, slug, howToSteps, faqs, url }: ToolJsonLdProps) {
  const pageUrl = url ?? `${siteConfig.url}/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name,
        description,
        url: pageUrl,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@type': 'HowTo',
        name: `How to use ${name}`,
        step: howToSteps.map((step: string, i: number) => ({
          '@type': 'HowToStep',
          position: i + 1,
          text: step,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}