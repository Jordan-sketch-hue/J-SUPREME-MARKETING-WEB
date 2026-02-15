import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | J Supreme Marketing',
  description: 'Terms of service for J Supreme Marketing - guidelines for using our services.',
};

export default function TermsPage() {
  return (
    <div className="bg-supreme-black min-h-screen py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-platinum-white mb-8">
          Terms of Service
        </h1>
        
        <div className="space-y-8 text-steel-gray">
          <p className="text-sm text-steel-gray">
            Last Updated: February 15, 2026
          </p>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using J Supreme Marketing's website and services, you agree to be bound by 
              these Terms of Service and all applicable laws and regulations. If you do not agree with any 
              of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              2. Services Description
            </h2>
            <p className="mb-4">
              J Supreme Marketing provides digital marketing services including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Paid advertising campaign management</li>
              <li>Marketing funnel development and optimization</li>
              <li>Brand strategy and creative services</li>
              <li>SEO and organic growth strategies</li>
              <li>Marketing consultation and audits</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              3. Use License
            </h2>
            <p className="mb-4">
              Permission is granted to temporarily access the materials on J Supreme Marketing's website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software on our website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              4. Client Responsibilities
            </h2>
            <p className="mb-4">
              When engaging our services, clients agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain access credentials and account security</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Make timely payments as per agreed terms</li>
              <li>Provide necessary materials and approvals in a timely manner</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              5. Payment Terms
            </h2>
            <p>
              Payment terms will be specified in individual service agreements. Unless otherwise stated, 
              payments are due upon receipt of invoice. Late payments may result in suspension of services 
              and/or late fees. All fees are non-refundable unless explicitly stated in the service agreement.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              6. Intellectual Property
            </h2>
            <p>
              All content, designs, strategies, and materials created by J Supreme Marketing remain our 
              intellectual property until full payment is received. Upon full payment, clients receive 
              specified usage rights as outlined in the service agreement. Our processes, methodologies, 
              and proprietary systems remain the exclusive property of J Supreme Marketing.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              7. Results and Performance
            </h2>
            <p>
              While we strive for excellence and employ proven strategies, we cannot guarantee specific 
              results or performance metrics. Marketing outcomes depend on various factors including market 
              conditions, competition, budget, and client cooperation. Past results do not guarantee future 
              performance.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              8. Termination
            </h2>
            <p>
              Either party may terminate services with written notice as specified in the service agreement. 
              Upon termination, client is responsible for payment of all services rendered up to the 
              termination date. We reserve the right to terminate services immediately for non-payment or 
              breach of terms.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              J Supreme Marketing shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages arising from the use of our services or website. Our total liability shall 
              not exceed the amount paid by the client for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              10. Confidentiality
            </h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during the 
              course of business. This obligation survives the termination of any service agreement.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              11. Third-Party Services
            </h2>
            <p>
              Our services may integrate with third-party platforms and tools. We are not responsible for 
              the availability, reliability, or performance of these third-party services. Clients must 
              comply with third-party terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              12. Modifications to Terms
            </h2>
            <p>
              We reserve the right to revise these terms at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of our services constitutes acceptance of any 
              modifications.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              13. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of Jamaica. Any 
              disputes arising under these terms shall be subject to the exclusive jurisdiction of the 
              courts of Jamaica.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              14. Contact Information
            </h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-steel-gray border-opacity-20">
              <p className="mb-2">
                <span className="text-platinum-white font-semibold">Email:</span>{' '}
                <a href="mailto:global.jsuprememarketing@gmail.com" className="text-supreme-gold hover:underline">
                  global.jsuprememarketing@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <span className="text-platinum-white font-semibold">Phone:</span>{' '}
                <a href="tel:6582182282" className="text-supreme-gold hover:underline">
                  658-218-2282
                </a>
              </p>
              <p>
                <span className="text-platinum-white font-semibold">Address:</span> Kingston, Jamaica
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
