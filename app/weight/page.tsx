import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import ConverterWidget from '@/components/ConverterWidget'
import ToolJsonLd from '@/components/ToolJsonLd'

export const metadata: Metadata = {
  title: 'Weight Converter — kg, g, lb, oz, ton, stone',
  description: 'Free online weight converter. Convert between kilograms, grams, milligrams, pounds, ounces, tons, and stones instantly.',
  alternates: { canonical: `${siteConfig.url}/weight` },
  openGraph: {
    title: 'Weight Converter',
    description: 'Convert weight units instantly — metric and imperial.',
    url: `${siteConfig.url}/weight`,
  },
}

const weightUnits = [
  { label: 'Kilogram (kg)', value: 'kg', factor: 1 },
  { label: 'Gram (g)', value: 'g', factor: 0.001 },
  { label: 'Milligram (mg)', value: 'mg', factor: 0.000001 },
  { label: 'Pound (lb)', value: 'lb', factor: 0.453592 },
  { label: 'Ounce (oz)', value: 'oz', factor: 0.0283495 },
  { label: 'Metric Ton (t)', value: 't', factor: 1000 },
  { label: 'Stone (st)', value: 'st', factor: 6.35029 },
]

export default function WeightPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <ToolJsonLd
        name="Weight Converter"
        description="Convert between metric and imperial weight units."
        slug="weight"
        howToSteps={[
          'Enter the weight value you want to convert.',
          'Select the source unit (e.g. kilograms).',
          'Select the target unit (e.g. pounds).',
          'The converted result appears instantly.',
        ]}
        faqs={[
          { q: 'How many pounds are in a kilogram?', a: 'One kilogram equals approximately 2.20462 pounds.' },
          { q: 'How many ounces are in a pound?', a: 'There are exactly 16 ounces in one pound.' },
          { q: 'What is a stone in pounds?', a: 'One stone equals 14 pounds, commonly used in the UK for body weight.' },
        ]}
      />
      <h1 className="text-3xl font-bold mb-2">Weight Converter</h1>
      <p className="text-gray-500 mb-8">Convert between metric and imperial weight units.</p>
      <ConverterWidget units={weightUnits} />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How many pounds are in a kilogram?</summary>
            <p className="mt-2 text-gray-600">One kilogram equals approximately 2.20462 pounds.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How many ounces are in a pound?</summary>
            <p className="mt-2 text-gray-600">There are exactly 16 ounces in one pound.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What is a stone in pounds?</summary>
            <p className="mt-2 text-gray-600">One stone equals 14 pounds. This unit is commonly used in the UK and Ireland for measuring body weight.</p>
          </details>
        </div>
      </section>
    </main>
  )
}