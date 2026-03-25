import { Tool } from '@/lib/types';

export const tools: Tool[] = [
  {
    slug: 'length-converter',
    name: 'Length Converter',
    tagline: 'Convert between meters, feet, inches, kilometers, miles and more',
    category: 'measurement',
    keywords: ['length converter', 'meter to feet', 'km to miles', 'inch to cm'],
    icon: '📏',
    params: [
      {
        name: 'value',
        label: 'Value',
        type: 'number',
      },
      {
        name: 'from',
        label: 'From',
        type: 'select',
        options: [
          { value: 'meter', label: 'Meter (m)' },
          { value: 'kilometer', label: 'Kilometer (km)' },
          { value: 'centimeter', label: 'Centimeter (cm)' },
          { value: 'millimeter', label: 'Millimeter (mm)' },
          { value: 'mile', label: 'Mile (mi)' },
          { value: 'yard', label: 'Yard (yd)' },
          { value: 'foot', label: 'Foot (ft)' },
          { value: 'inch', label: 'Inch (in)' },
        ],
      },
      {
        name: 'to',
        label: 'To',
        type: 'select',
        options: [
          { value: 'meter', label: 'Meter (m)' },
          { value: 'kilometer', label: 'Kilometer (km)' },
          { value: 'centimeter', label: 'Centimeter (cm)' },
          { value: 'millimeter', label: 'Millimeter (mm)' },
          { value: 'mile', label: 'Mile (mi)' },
          { value: 'yard', label: 'Yard (yd)' },
          { value: 'foot', label: 'Foot (ft)' },
          { value: 'inch', label: 'Inch (in)' },
        ],
      },
    ],
    howToSteps: [
      'Enter the value you want to convert',
      'Select the unit you are converting from',
      'Select the unit you want to convert to',
      'The result is displayed instantly',
    ],
    faqs: [
      { q: 'How many feet are in a meter?', a: 'One meter equals approximately 3.28084 feet.' },
      { q: 'How do I convert kilometers to miles?', a: 'Multiply kilometers by 0.621371 to get miles.' },
      { q: 'What is the difference between imperial and metric length units?', a: 'Metric units (meter, km, cm) are based on powers of 10. Imperial units (foot, inch, mile) use historical ratios.' },
    ],
  },
  {
    slug: 'weight-converter',
    name: 'Weight Converter',
    tagline: 'Convert between kilograms, pounds, ounces, grams and more',
    category: 'measurement',
    keywords: ['weight converter', 'kg to lbs', 'pounds to kg', 'ounce to gram'],
    icon: '⚖️',
    params: [
      { name: 'value', label: 'Value', type: 'number' },
      {
        name: 'from',
        label: 'From',
        type: 'select',
        options: [
          { value: 'kilogram', label: 'Kilogram (kg)' },
          { value: 'gram', label: 'Gram (g)' },
          { value: 'milligram', label: 'Milligram (mg)' },
          { value: 'pound', label: 'Pound (lb)' },
          { value: 'ounce', label: 'Ounce (oz)' },
          { value: 'ton', label: 'Metric Ton (t)' },
        ],
      },
      {
        name: 'to',
        label: 'To',
        type: 'select',
        options: [
          { value: 'kilogram', label: 'Kilogram (kg)' },
          { value: 'gram', label: 'Gram (g)' },
          { value: 'milligram', label: 'Milligram (mg)' },
          { value: 'pound', label: 'Pound (lb)' },
          { value: 'ounce', label: 'Ounce (oz)' },
          { value: 'ton', label: 'Metric Ton (t)' },
        ],
      },
    ],
    howToSteps: [
      'Enter the weight value you want to convert',
      'Select the unit you are converting from',
      'Select the target unit',
      'Read the converted result instantly',
    ],
    faqs: [
      { q: 'How many pounds are in a kilogram?', a: 'One kilogram equals approximately 2.20462 pounds.' },
      { q: 'How do I convert ounces to grams?', a: 'Multiply ounces by 28.3495 to get grams.' },
      { q: 'What is a metric ton?', a: 'A metric ton (tonne) equals 1,000 kilograms or approximately 2,204.62 pounds.' },
    ],
  },
  {
    slug: 'temperature-converter',
    name: 'Temperature Converter',
    tagline: 'Convert between Celsius, Fahrenheit, and Kelvin instantly',
    category: 'measurement',
    keywords: ['temperature converter', 'celsius to fahrenheit', 'fahrenheit to celsius', 'kelvin converter'],
    icon: '🌡️',
    params: [
      { name: 'value', label: 'Value', type: 'number' },
      {
        name: 'from',
        label: 'From',
        type: 'select',
        options: [
          { value: 'celsius', label: 'Celsius (°C)' },
          { value: 'fahrenheit', label: 'Fahrenheit (°F)' },
          { value: 'kelvin', label: 'Kelvin (K)' },
        ],
      },
      {
        name: 'to',
        label: 'To',
        type: 'select',
        options: [
          { value: 'celsius', label: 'Celsius (°C)' },
          { value: 'fahrenheit', label: 'Fahrenheit (°F)' },
          { value: 'kelvin', label: 'Kelvin (K)' },
        ],
      },
    ],
    howToSteps: [
      'Enter the temperature value',
      'Select the scale you are converting from',
      'Select the target temperature scale',
      'The converted temperature appears immediately',
    ],
    faqs: [
      { q: 'How do I convert Celsius to Fahrenheit?', a: 'Multiply by 9/5 then add 32. For example, 100°C = 212°F.' },
      { q: 'What is absolute zero in Celsius?', a: 'Absolute zero is -273.15°C, which equals 0 Kelvin.' },
      { q: 'What is normal body temperature in Fahrenheit?', a: 'Normal body temperature is 98.6°F, which equals 37°C.' },
    ],
  },
];

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((tool) => tool.category === category);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(tools.map((tool) => tool.category)));
}