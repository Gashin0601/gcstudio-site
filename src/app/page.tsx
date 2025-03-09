// これによりこのページは常にサーバーサイドでレンダリングされ、環境変数が実行時に評価されます
export const dynamic = 'force-dynamic';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProfileSection2 from '@/components/ProfileSection2';
import VisionSection from '@/components/VisionSection';
import FutureVisionSection from '@/components/FutureVisionSection';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProfileSection2 />
      <ServicesSection />
      <NewsSection />
      <VisionSection />
      <FutureVisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 