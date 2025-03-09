'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'ホーム', href: '/' },
  { name: '鈴木我信について', href: '/about' },
  { name: '事業内容', href: '/services' },
  { name: 'ニュース', href: '/news' },
  { name: 'ビジョン', href: '/#vision' },
  { name: '未来ビジョン', href: '/#future-vision' },
  { name: 'お問い合わせ', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-deep-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-wider flex items-center gap-3">
          <Image 
            src="/images/gcstudio-icon.jpeg"
            alt="GC Studio アイコン"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white hover:text-accent transition-colors duration-300">GC Studio<span className="hidden sm:inline"></span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="text-white hover:text-accent relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          <div className="w-6 flex flex-col items-end justify-center gap-1.5 relative">
            <motion.span 
              className="block h-0.5 bg-accent rounded-full"
              initial={{ width: '100%' }}
              animate={{ width: isOpen ? '100%' : '100%', rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="block h-0.5 bg-accent rounded-full"
              initial={{ width: '70%' }}
              animate={{ 
                width: isOpen ? '100%' : '70%', 
                opacity: isOpen ? 0 : 1,
                x: isOpen ? 20 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="block h-0.5 bg-accent rounded-full"
              initial={{ width: '50%' }}
              animate={{ width: isOpen ? '100%' : '50%', rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="md:hidden bg-dark-bg/80 backdrop-blur-md absolute w-full py-6 border-t border-accent/20"
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
                    className="text-xl text-white hover:text-accent block py-2 border-b border-accent/10 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
} 