import type { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Blog | J Supreme Marketing',
  description: 'Marketing insights, strategies, and case studies from the J Supreme Marketing team.',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}
