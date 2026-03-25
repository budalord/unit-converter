import { Metadata } from 'next';
import Link from 'next/link';
import { tools, getAllCategories } from '@/config/tools';
import { siteConfig } from '@/config/site';
import { Tool } from '@/lib/types';

export const metadata: Metadata = {
  title: `${siteConfig.name} — Free Unit Converter`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  const categories = getAllCategories();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Unit Converter</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Convert length, weight, and temperature instantly. No ads, no sign-up required.
        </p>
      </section>

      {categories.map((category: string) => {
        const categoryTools = tools.filter((t: Tool) => t.category === category);
        return (
          <section key={category} className="mb-10">
            <h2 className="text-xl font-semibold capitalize mb-4 text-gray-800">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categoryTools.map((tool: Tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  {tool.icon && <span className="text-3xl mb-2 block">{tool.icon}</span>}
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{tool.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section className="mt-16 text-center text-sm text-gray-400">
        <p>
          Looking for more tools?{' '}
          <Link href="/tools" className="underline hover:text-gray-600">
            Browse all converters
          </Link>
        </p>
      </section>
    </main>
  );
}