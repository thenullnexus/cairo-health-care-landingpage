import { FileText, AlertTriangle, Mail, MapPin } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-amber max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        
        <div className="text-gray-600 mb-8">
          <p><strong>Last Updated:</strong> December 2025</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the <strong>Cairo Healthcare</strong> website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Medical Disclaimer (Important)</h2>
                <p className="text-gray-700 leading-relaxed font-medium">
                  <strong>This website does not provide medical advice.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The content provided on this website, including text, graphics, images, and other material, is for <strong>informational purposes only</strong>. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</li>
                  <li>Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</li>
                  <li>In case of a medical emergency, please call your local emergency services immediately.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including but not limited to text, logos, images, and software, is the property of <strong>Cairo Healthcare</strong> and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Use of Website</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use this website only for lawful purposes. You must not use this site to transmit any malicious code, viruses, or harmful data, or to harass or attempt to access unauthorized areas of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, <strong>Cairo Healthcare</strong> shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of, or inability to use, this website. We make no warranties regarding the accuracy or completeness of the content provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in <strong>Chennai, India</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site constitutes your acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For any legal inquiries, please contact us at:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                <a href="mailto:cairohealthcare92@gmail.com" className="text-amber-700 hover:text-amber-800 hover:underline">
                  cairohealthcare92@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Chennai, India</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
