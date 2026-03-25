import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import ConverterWidget from '@/components/ConverterWidget'
import ToolJsonLd from '@/components/ToolJsonLd'

export const metadata: Metadata = {
  title: 'Length Converter — mm, cm, m, km, inch, ft, mile',
  description: 'Free online length converter. Convert between millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles instantly.',
  alternates: { canonical: `${siteConfig.url}/length` },
  openGraph: {
    title: 'Length Converter',
    description: 'Convert length units instantly — metric and imperial.',
    url: `${siteConfig.url}/length`,
  },
}

const lengthUnits = [
  { label: 'Millimeter (mm)', value: 'mm', factor: 0.001 },
  { label: 'Centimeter (cm)', value: 'cm', factor: 0.01 },
  { label: 'Meter (m)', value: 'm', factor: 1 },
  { label: 'Kilometer (km)', value: 'km', factor: 1000 },
  { label: 'Inch (in)', value: 'in', factor: 0.0254 },
  { label: 'Foot (ft)', value: 'ft', factor: 0.3048 },
  { label: 'Yard (yd)', value: 'yd', factor: 0.9144 },
  { label: 'Mile (mi)', value: 'mi', factor: 1609.344 },
]

export default function LengthPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <ToolJsonLd
        name="Length Converter"
        description="Convert between metric and imperial length units."
        slug="length"
        howToSteps={[
          'Enter the value you want to convert.',
          'Select the source unit (e.g. meters).',
          'Select the target unit (e.g. feet).',
          'The result appears instantly.',
        ]}
        faqs={[
          { q: 'How many centimeters are in an inch?', a: 'One inch equals 2.54 centimeters.' },
          { q: 'How do I convert kilometers to miles?', a: 'Multiply kilometers by 0.621371 to get miles.' },
          { q: 'What is the base unit for length in the metric system?', a: 'The meter (m) is the SI base unit for length.' },
        ]}
      />
      <h1 className="text-3xl font-bold mb-2">Length Converter</h1>
      <p className="text-gray-500 mb-8">Convert between metric and imperial length units.</p>
      <ConverterWidget units={lengthUnits} />      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How many centimeters are in an inch?</summary>
            <p className="mt-2 text-gray-600">One inch equals exactly 2.54 centimeters.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How do I convert kilometers to miles?</summary>
            <p className="mt-2 text-gray-600">Multiply the number of kilometers by 0.621371 to get the equivalent in miles. For example, 10 km = 6.21371 miles.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What is the difference between a yard and a meter?</summary>
            <p className="mt-2 text-gray-600">A meter is slightly longer than a yard. One meter equals approximately 1.09361 yards.</p>
          </details>
        </div>
      </section>
    </main>
  )
}