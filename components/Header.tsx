import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
          {siteConfig.name}
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/length" className="hover:text-blue-600 transition-colors">Length</Link>
          <Link href="/weight" className="hover:text-blue-600 transition-colors">Weight</Link>
          <Link href="/temperature" className="hover:text-blue-600 transition-colors">Temperature</Link>
        </nav>
      </div>
    </header>
  )
}