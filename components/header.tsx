import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/daydreamers-dog-training-logo.webp"
            alt="Daydreamers Dog Training"
            width={500}
            height={167}
            priority
          />
        </Link>
        
        <nav className="flex gap-8 items-center">
          <Link 
            href="#philosophy" 
            className="text-lg font-fredoka text-secondary hover:text-accent-orange transition-colors"
          >
            Madeline&apos;s Training Philosophy
          </Link>
          <Link 
            href="#contact" 
            className="text-lg font-fredoka text-secondary hover:text-accent-orange transition-colors"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  )
} 