'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ExecutorPortalPage() {
  const [showSignupForm, setShowSignupForm] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [uniqueId, setUniqueId] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleAcceptNomination = () => {
    setShowSignupForm(true)
  }

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call for executor verification
    setTimeout(() => {
      setLoading(false)
      // Redirect to executor access portal
      router.push('/executor-access')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">MyDigitalLegacy Vault</span>
              <span className="text-sm text-gray-500">by Exgenesis</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="#" className="text-blue-600 font-medium">Executor Portal</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/auth/signin" className="text-gray-700 hover:text-gray-900">Sign In</Link>
            </nav>
          </div>
        </div>
      </div>

      {!showSignupForm ? (
        <>
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">Executor Portal</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Secure access for nominated executors to manage digital legacy responsibilities
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Legacy Management</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  As a nominated executor, you have been entrusted with the responsibility of managing 
                  digital assets and accounts after proper verification. Our secure platform ensures 
                  that access is only granted through our two-key encryption system and death verification process.
                </p>
              </div>

              {/* Workflow Steps */}
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Executor Workflow Process</h3>
                
                <div className="grid md:grid-cols-4 gap-8">
                  {/* Step 1 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">1. Nomination</h4>
                    <p className="text-sm text-gray-600">Receive secure nomination from vault owner with unique verification ID</p>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">2. Verification</h4>
                    <p className="text-sm text-gray-600">Complete identity verification and death certificate validation</p>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">3. K2 Release</h4>
                    <p className="text-sm text-gray-600">Receive K2 decryption key after successful verification process</p>
                  </div>

                  {/* Step 4 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">4. Asset Access</h4>
                    <p className="text-sm text-gray-600">Access encrypted digital asset instructions and manage legacy</p>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Security & Compliance</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🔐 Two-Key Encryption</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Digital assets are protected by our K1+K2 system. K1 remains with the owner's device, 
                      K2 is only released after death verification.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">📋 Death Verification</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Access requires submission and validation of official death certificates 
                      through our RegTech compliance system.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🏛️ Legal Compliance</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      All processes follow estate law requirements and maintain detailed 
                      audit trails for legal proceedings.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🔍 Identity Verification</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Multi-factor authentication and KYC verification ensure only 
                      authorized executors gain access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Been Nominated as an Executor?</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    If you have received a nomination to serve as a digital legacy executor, 
                    click below to begin the secure verification process.
                  </p>
                  <button
                    onClick={handleAcceptNomination}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Accept Nomination
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Signup Form */
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Executor Registration</h2>
                <p className="text-gray-600">
                  Enter your details and the unique ID provided by the vault owner
                </p>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="uniqueId" className="block text-sm font-medium text-gray-700 mb-2">
                    Unique Nomination ID *
                  </label>
                  <input
                    id="uniqueId"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the ID provided by the vault owner"
                    value={uniqueId}
                    onChange={(e) => setUniqueId(e.target.value)}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    This unique ID was provided to you by the vault owner when you were nominated
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="text-sm text-yellow-800">
                        Your registration will be verified against the nomination record. 
                        Access will only be granted after proper death verification.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowSignupForm(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Verifying...' : 'Register as Executor'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Secure digital legacy management with enterprise-grade protection
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ensuring proper access to digital assets through verified legal processes
          </p>
        </div>
      </footer>
    </div>
  )
}