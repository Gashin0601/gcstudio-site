import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import VisionSection from '@/components/VisionSection';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProfileSection />
      <VisionSection />
      <ServicesSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 