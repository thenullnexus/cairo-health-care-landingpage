import { Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Main Content */}
      <div className="prose prose-amber max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        
        <div className="text-gray-600 mb-8">
          <p><strong>Last Updated:</strong> December 2025</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to <strong>Cairo Healthcare</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect the information you provide to us when visiting our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Since our website does not require user accounts or login credentials, we collect minimal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Information You Voluntarily Provide:</strong> If you contact us via our contact form or email, we may collect your name, email address, phone number, and the content of your message.
              </li>
              <li>
                <strong>Automated Information:</strong> Like most websites, we may use cookies or similar technologies to collect basic usage data (such as your browser type, device type, and pages visited) to help us improve our website's performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>To respond to your inquiries, questions, or feedback.</li>
              <li>To improve the content and functionality of our website.</li>
              <li>To ensure the security of our site.</li>
            </ul>
            <p className="text-gray-700 font-medium italic">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement reasonable security measures to protect the information you submit to us. However, please note that no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to external websites (e.g., partners, medical resources). We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review their privacy policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions regarding this Privacy Policy, please contact us at:
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
