'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MyExecutorsPage() {
  const [fullName, setFullName] = useState('')
  const [secondaryData, setSecondaryData] = useState('')
  const [loading, setLoading] = useState(false)

  const handleMFASubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Handle MFA verification logic here
    setTimeout(() => {
      setLoading(false)
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
              <Link href="/owner-vault" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link href="/executor-portal" className="text-gray-700 hover:text-gray-900">Executor Portal</Link>
              <Link href="/my-executors" className="text-blue-600 font-medium">My Executors</Link>
              <Link href="/admin-panel" className="text-gray-700 hover:text-gray-900">Admin Panel</Link>
              <Link href="/executor-access" className="text-gray-700 hover:text-gray-900">Executor Access</Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900">About</Link>
              <button className="text-gray-700 hover:text-gray-900">Log Out</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Executor Portal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure access for nominated executors to manage digital legacy responsibilities
          </p>
        </div>

        {/* Setup Steps */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complete Your Executor Setup</h2>
            <p className="text-gray-600">Follow these steps to establish your secure executor account and verify your authorization</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1: Invitation */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Invitation</h3>
              <p className="text-gray-600 text-sm">
                Receive your secure invitation token via email from the Vault Owner
              </p>
            </div>

            {/* Step 2: Create Account */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Create Account</h3>
              <p className="text-gray-600 text-sm">
                Establish your secure executor account with verified credentials
              </p>
            </div>

            {/* Step 3: MFA Verification */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3: MFA Verification</h3>
              <p className="text-gray-600 text-sm">
                Complete multi-factor authentication to secure your access
              </p>
            </div>
          </div>
        </div>

        {/* MFA Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Factor Authorization</h3>
            <p className="text-gray-600 mb-6">
              Verify your identity using the secondary data point provided by the Vault Owner
            </p>

            <form onSubmit={handleMFASubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
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
                <label htmlFor="secondaryData" className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Verification Data
                </label>
                <textarea
                  id="secondaryData"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Enter the verification data provided by the Vault Owner"
                  value={secondaryData}
                  onChange={(e) => setSecondaryData(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify and Complete MFA'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Securely manage digital legacy responsibilities with DigitalLegacyVault
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All data protected with enterprise-grade encryption
          </p>
        </div>
      </footer>
    </div>
  )
}