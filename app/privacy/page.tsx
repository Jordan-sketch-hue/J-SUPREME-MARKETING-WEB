import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | J Supreme Marketing',
  description: 'Privacy policy for J Supreme Marketing - how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-supreme-black min-h-screen py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-platinum-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-steel-gray">
          <p className="text-sm text-steel-gray">
            Last Updated: February 15, 2026
          </p>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              At J Supreme Marketing, we collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Business information and marketing needs</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist in our operations (under confidentiality agreements)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing 
              activity. This helps us improve our website performance and user experience. You can control 
              cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              5. Google AdSense
            </h2>
            <p className="mb-4">
              We use Google AdSense to display advertisements on our website. Google uses cookies to serve 
              ads based on your prior visits to our website or other websites. You can opt out of personalized 
              advertising by visiting{' '}
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-supreme-gold hover:underline"
              >
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              7. Your Rights
            </h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              8. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect 
              personal information from children.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-semibold text-platinum-white mb-4">
              10. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
