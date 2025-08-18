import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui/layout'

export default function Header() {
  return (
    <header className="w-full bg-white">
      <Section className="py-4 md:py-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex-1 md:flex-none">
            <Image
              src="/images/daydreamers-dog-training-logo.webp"
              alt="Daydreamers Dog Training"
              width={500}
              height={167}
              sizes="(min-width: 1024px) 500px, (min-width: 768px) 420px, 100vw"
              className="h-auto w-full md:w-auto md:max-w-[420px] lg:max-w-[500px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
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
      </Section>
    </header>
  )
} 