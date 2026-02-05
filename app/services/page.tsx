import type { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Our Services | J Supreme Marketing',
  description: 'Paid advertising, funnels, branding, and SEO services designed for high-performance growth.',
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceCTA />
    </>
  );
}
