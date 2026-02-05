import type { Metadata } from 'next';
import AuditHero from '@/components/audit/AuditHero';
import AuditForm from '@/components/audit/AuditForm';
import AuditBenefits from '@/components/audit/AuditBenefits';

export const metadata: Metadata = {
  title: 'Free Growth Audit | J Supreme Marketing',
  description: 'Get a comprehensive audit of your marketing system. Identify leaks, opportunities, and growth strategies — completely free.',
};

export default function FreeAuditPage() {
  return (
    <>
      <AuditHero />
      <AuditForm />
      <AuditBenefits />
    </>
  );
}
