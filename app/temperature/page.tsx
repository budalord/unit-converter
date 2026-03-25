import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import ConverterWidget from '@/components/ConverterWidget'
import ToolJsonLd from '@/components/ToolJsonLd'

export const metadata: Metadata = {
  title: 'Temperature Converter — Celsius, Fahrenheit, Kelvin',
  description: 'Free online temperature converter. Convert between Celsius, Fahrenheit, and Kelvin instantly with accurate formulas.',
  alternates: { canonical: `${siteConfig.url}/temperature` },
  openGraph: {
    title: 'Temperature Converter',
    description: 'Convert temperature units instantly — Celsius, Fahrenheit, Kelvin.',
    url: `${siteConfig.url}/temperature`,
  },
}

const temperatureUnits = [
  { label: 'Celsius (°C)', value: 'c' },
  { label: 'Fahrenheit (°F)', value: 'f' },
  { label: 'Kelvin (K)', value: 'k' },
]

export default function TemperaturePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <ToolJsonLd
        name="Temperature Converter"
        description="Convert between Celsius, Fahrenheit, and Kelvin."
        slug="temperature"
        howToSteps={[
          'Enter the temperature value you want to convert.',
          'Select the source unit (e.g. Celsius).',
          'Select the target unit (e.g. Fahrenheit).',
          'The converted result appears instantly.',
        ]}
        faqs={[
          { q: 'How do I convert Celsius to Fahrenheit?', a: 'Use the formula: °F = (°C × 9/5) + 32. For example, 100°C = 212°F.' },
          { q: 'What is absolute zero in Celsius?', a: 'Absolute zero is −273.15°C, which equals 0 Kelvin.' },
          { q: 'What is normal human body temperature in Fahrenheit?', a: 'Normal body temperature is about 37°C, which equals 98.6°F.' },
        ]}
      />
      <h1 className="text-3xl font-bold mb-2">Temperature Converter</h1>
      <p className="text-gray-500 mb-8">Convert between Celsius, Fahrenheit, and Kelvin.</p>
      <ConverterWidget units={temperatureUnits} converterType="temperature" />      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How do I convert Celsius to Fahrenheit?</summary>
            <p className="mt-2 text-gray-600">Use the formula: °F = (°C × 9/5) + 32. For example, 0°C = 32°F and 100°C = 212°F.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What is absolute zero?</summary>
            <p className="mt-2 text-gray-600">Absolute zero is the lowest possible temperature: −273.15°C or −459.67°F, equivalent to 0 Kelvin. At this point, all molecular motion stops.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What is normal human body temperature in Fahrenheit?</summary>
            <p className="mt-2 text-gray-600">Normal human body temperature is approximately 37°C, which equals 98.6°F.</p>
          </details>
        </div>
      </section>
    </main>
  )
}