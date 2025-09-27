import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}