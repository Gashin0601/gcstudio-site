'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'プロフィール', href: '/profile' },
  { name: 'サービス', href: '/services' },
  { name: 'ニュース', href: '/news' },
  { name: 'ビジョン', href: '/future-vision' },
  { name: 'お問い合わせ', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {isHome ? (
          <div className="text-xl md:text-2xl font-serif font-bold tracking-wider flex items-center gap-3">
            <Image 
              src="/images/gcstudio-icon.jpeg"
              alt="GC Studio アイコン"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-text-primary">GC Studio</span>
          </div>
        ) : (
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-wider flex items-center gap-3">
            <Image 
              src="/images/gcstudio-icon.jpeg"
              alt="GC Studio アイコン"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-text-primary hover:text-accent transition-colors duration-300">GC Studio</span>
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="text-text-primary relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              className="md:hidden bg-dark-bg/80 backdrop-blur-md absolute w-full py-6 border-t border-neon-blue/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul 
                className="flex flex-col space-y-4 px-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-xl text-text-primary relative group block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 