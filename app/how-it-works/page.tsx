import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Digital Legacy with Confidence</h1>
          <p className="text-lg mb-6">A trusted vault designed to protect and transition your most important digital assets with military-grade encryption and multi-party verification.</p>
          <div className="flex justify-center gap-4">
            <Link href="/owner-vault" className="bg-white text-blue-700 px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors">Get Started Today</Link>
            <Link href="/about" className="bg-white text-blue-700 px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors">Learn More</Link>
          </div>
        </div>
      </div>

      {/* What is MyDigitalLegacy Vault */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">What is MyDigitalLegacy Vault?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          MyDigitalLegacy Vault by Exgenesis is a secure digital legacy platform that enables you to protect and transition your most sensitive digital assets as designated executors upon specified life events. Our two-key encryption system ensures your instructions remain private until all legal and security conditions are met.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Two-Key Security</h3>
            <p className="text-gray-600">Your digital assets are encrypted with a two-key system, ensuring instructions can only be accessed when both legal authority and identity verification are complete.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Legal Compliance</h3>
            <p className="text-gray-600">Admin verification ensures all documentation, including death certificates and probate letters, meets legal requirements before asset release.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Executor Management</h3>
            <p className="text-gray-600">Nominate trusted executors who will be guided through a secure, step-by-step process to access and manage your digital legacy when needed.</p>
          </div>
        </div>
      </section>

      {/* User Roles and Experiences */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">User Roles and Experiences</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Our platform serves three distinct user types, each with tailored workflows and responsibilities.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">Vault Owner</h3>
              <ul className="text-gray-600 text-left list-disc list-inside">
                <li>Set up your secure account with multi-factor authentication</li>
                <li>Register digital assets and encrypted instructions</li>
                <li>Nominate trusted executors to manage assets posthumously</li>
                <li>Manage security and compliance verification steps</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">Executor</h3>
              <ul className="text-gray-600 text-left list-disc list-inside">
                <li>Receive nomination invitations and complete multi-factor authentication</li>
                <li>Submit required legal documentation when trigger events occur</li>
                <li>Access digital asset instructions once all conditions are fulfilled</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">Administrator</h3>
              <ul className="text-gray-600 text-left list-disc list-inside">
                <li>Simulate compliance steps for system and KYC verification</li>
                <li>Approve documentation and identity verification</li>
                <li>Manage encryption keys and centralized control panel for oversight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Security System Works */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">How Our Security System Works</h2>
        <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          MyDigitalLegacy Vault employs a sophisticated two-key encryption system that ensures your digital assets remain secure and private until all conditions are met:
        </p>
        <ol className="space-y-6 max-w-2xl mx-auto">
          <li>
            <span className="font-bold">1. Asset Registration and K1 Encryption:</span>
            <span className="text-gray-600"> When you register a digital asset, your instructions are encrypted client-side using K1 (the first encryption key). This ensures your data is protected before it ever leaves your device.</span>
          </li>
          <li>
            <span className="font-bold">2. Executor Nomination and MFA:</span>
            <span className="text-gray-600"> You nominate trusted executors who receive secure invitations. They complete multi-factor authentication using secondary data points, establishing their identity and readiness.</span>
          </li>
          <li>
            <span className="font-bold">3. Trigger Event and Documentation Submission:</span>
            <span className="text-gray-600"> When a trigger event occurs, executors submit required legal documentation such as death certificates and letters testamentary through the secure portal.</span>
          </li>
          <li>
            <span className="font-bold">4. Admin Verification and Validation:</span>
            <span className="text-gray-600"> Administrators perform critical checks: Legal Authority validation of submitted documentation and Identity Match verification using DVS and liveness detection to confirm the executor's identity.</span>
          </li>
          <li>
            <span className="font-bold">5. K2 Release and Decryption Access:</span>
            <span className="text-gray-600"> Once all conditions are satisfied, administrators release K2 (the second decryption key). Executors can now decrypt and access your instructions, completing the secure transition of your digital legacy.</span>
          </li>
        </ol>
      </section>

      {/* Privacy Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Privacy is Our Priority</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">We implement industry-leading security measures to ensure your sensitive information remains confidential and protected at all times.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">Client-Side Encryption</h3>
              <p className="text-gray-600">All sensitive data is encrypted on your device before transmission, ensuring maximum privacy.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">Multi-Party Verification</h3>
              <p className="text-gray-600">Multiple verification steps prevent unauthorized access and ensure legal compliance.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">Two-Key Security Protocol</h3>
              <p className="text-gray-600">Decryption requires two encryption keys, released only when all conditions are met.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">Secure Document Handling</h3>
              <p className="text-gray-600">Legal documents are secured with enterprise-grade security and access controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Secure Your Digital Legacy?</h2>
          <p className="mb-6">Join MyDigitalLegacy Vault today and ensure your most important digital assets are protected and transferred according to your wishes.</p>
          <div className="flex justify-center gap-4">
            <Link href="/owner-vault" className="bg-white text-blue-700 px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors">Start Your Vault</Link>
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Securely protect your digital assets with DigitalLegacyVault - Making your digital legacy secure and secure.</p>
          <p className="text-gray-500 text-sm mt-2">All data kept in secure servers 256-bit encryption</p>
        </div>
      </footer>
    </div>
  );
}
