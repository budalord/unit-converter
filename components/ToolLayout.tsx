import { Tool } from '@/lib/types';

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
}

export default function ToolLayout({ tool, children }: ToolLayoutProps) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        {tool.icon && <span className="text-4xl mb-3 block">{tool.icon}</span>}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{tool.name}</h1>
        <p className="text-gray-600 text-lg">{tool.tagline}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        {children}
      </div>

      {tool.howToSteps.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">How to Use</h2>
          <ol className="space-y-2 list-decimal list-inside text-gray-700">
            {tool.howToSteps.map((step: string, i: number) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      {tool.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {tool.faqs.map((faq, i) => (
              <details key={i} className="border rounded-lg p-4">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}