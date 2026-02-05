import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us | J Supreme Marketing',
  description: 'Learn about J Supreme Marketing and our mission to build high-performance marketing systems.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </>
  );
}
