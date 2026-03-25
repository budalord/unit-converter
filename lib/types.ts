export interface FAQ {
  q: string;
  a: string;
}

export interface ToolParam {
  name: string;
  label: string;
  unit?: string;
  type: 'number' | 'select';
  options?: { value: string; label: string }[];
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  keywords: string[];
  icon?: string;
  params: ToolParam[];
  howToSteps: string[];
  faqs: FAQ[];
}