import { Metadata } from 'next';
import Link from 'next/link';
import { tools, getAllCategories } from '@/config/tools';
import { siteConfig } from '@/config/site';
import { Tool } from '@/lib/types';

export const metadata: Metadata = {
  title: `All Tools | ${siteConfig.name}`,
  description: 'Browse all unit conversion tools for length, weight, and temperature.',
  alternates: { canonical: `${siteConfig.url}/tools` },
};

export default function ToolsPage() {
  const categories = getAllCategories();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">All Conversion Tools</h1>
      <p className="text-gray-600 mb-10">
        Free online unit converters — fast, accurate, and easy to use.
      </p>

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
                  className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  {tool.icon && <span className="text-2xl mb-2 block">{tool.icon}</span>}
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{tool.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}