import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Daydreamers Dog Training. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-sm text-gray-600 hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-600 hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 