import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { tools, getToolBySlug } from '@/config/tools';
import { siteConfig } from '@/config/site';
import ToolJsonLd from '@/components/ToolJsonLd';
import ToolLayout from '@/components/ToolLayout';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};
  return {
    title: `${tool.name} | ${siteConfig.name}`,
    description: tool.tagline,
    keywords: tool.keywords,
    alternates: { canonical: `${siteConfig.url}/tools/${tool.slug}` },
    openGraph: {
      title: tool.name,
      description: tool.tagline,
      url: `${siteConfig.url}/tools/${tool.slug}`,
    },
  };
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  return (
    <>
      <ToolJsonLd name={tool.name} description={tool.tagline} slug={tool.slug} howToSteps={tool.howToSteps} faqs={tool.faqs} />
      <ToolLayout tool={tool}>
        <p className="text-gray-500 text-sm">
          Interactive converter coming soon. Use the guide below to convert {tool.name.toLowerCase()} manually.
        </p>
      </ToolLayout>
    </>
  );
}