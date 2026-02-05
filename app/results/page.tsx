import type { Metadata } from 'next';
import ResultsHero from '@/components/results/ResultsHero';
import ResultsGrid from '@/components/results/ResultsGrid';
import ResultsCTA from '@/components/results/ResultsCTA';

export const metadata: Metadata = {
  title: 'Results & Case Studies | J Supreme Marketing',
  description: 'Real campaigns. Real numbers. See how we help brands scale with data-driven marketing systems.',
};

export default function ResultsPage() {
  return (
    <>
      <ResultsHero />
      <ResultsGrid />
      <ResultsCTA />
    </>
  );
}
