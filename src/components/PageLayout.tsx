'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-28 relative overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          {!imageError ? (
            <Image
              src="/images/hero-bg.jpeg"
              alt="ページ背景"
              fill
              className="object-cover opacity-20"
              priority
              quality={90}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-dark-bg via-dark-bg-2 to-dark-bg-2"></div>
          )}
          <div className="absolute inset-0 bg-dark-bg/50"></div>
        </div>

        {/* 背景テクスチャ */}
        <div className="absolute inset-0 noise-bg opacity-20"></div>
        <div className="absolute inset-0 bg-stars-animation opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {title && (
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wider">
                {title}
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
              {description && (
                <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}
          
          {children}
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 