'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function Header() {
  const pathname = usePathname()
  return (
    <header aria-label='Header' className="mb-7 flex items-center justify-between">
      <div>
        <Link title='Home' href="/" className={`font-extrabold text-black dark:text-white ${pathname === '/' ? 'underline' : ''}`}>
          <Image 
            width={50} 
            height={50} 
            title='Profile'
            aria-atomic
            src="/profile.jpg" 
            priority
            rel='prefetch'
            alt="Profile Picture" 
            className="rounded-full mr-2 inline-block" 
            /> 
            Joe Boadi
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Frontend Engineer
        </TextEffect>
        <div className="mt-2 flex items-center gap-4">
          <Link title='Blog' href='/blog' className={`font-medium text-black dark:text-white ${pathname === '/blog' ? 'underline' : ''}`}>My Blogs</Link>
          <Link title='Gallery' href="/gallery" className={`font-medium text-black dark:text-white ${pathname === '/gallery' ? 'underline' : ''}`}>
            Gallery
          </Link>
        </div>
      </div>
    </header>
  )
}
