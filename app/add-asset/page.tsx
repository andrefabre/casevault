'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AddAssetPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [assetName, setAssetName] = useState('')
  const [assetType, setAssetType] = useState('')
  const [accessInstructions, setAccessInstructions] = useState('')
  const [accountDetails, setAccountDetails] = useState('')
  const [documentFile, setDocumentFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
      return
    }
    // Onboarding gating can be added here if needed
  }, [session, status, router])

  const assetTypes = [
    { value: 'cryptocurrency', label: 'Cryptocurrency Wallet' },
    { value: 'social_media', label: 'Social Media Account' },
    { value: 'email', label: 'Email Account' },
    { value: 'cloud_storage', label: 'Cloud Storage' },
    { value: 'financial', label: 'Financial Account' },
    { value: 'digital_media', label: 'Digital Media' },
    { value: 'domain', label: 'Domain & Hosting' },
    { value: 'subscription', label: 'Subscription Service' },
    { value: 'other', label: 'Other Digital Asset' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowSuccess(true)
      setAssetName('')
      setAssetType('')
      setAccessInstructions('')
      setAccountDetails('')
      setDocumentFile(null)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 2000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocumentFile(e.target.files[0])
    }
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
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/owner-vault" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link href="/my-executors" className="text-gray-700 hover:text-gray-900">My Executors</Link>
              <Link href="/my-assets" className="text-blue-600 font-medium">My Assets</Link>
              <Link href="/admin-panel" className="text-gray-700 hover:text-gray-900">Admin Panel</Link>
              <Link href="/executor-access" className="text-gray-700 hover:text-gray-900">Executor Access</Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900">About</Link>
              <button className="text-gray-700 hover:text-gray-900">Log Out</button>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/owner-vault" className="text-gray-500 hover:text-gray-700">Dashboard</Link>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
            <Link href="/my-assets" className="text-gray-500 hover:text-gray-700">My Assets</Link>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-900 font-medium">Add Asset</span>
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Instructions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Adding Digital Assets</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">📝 What to Include</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Account usernames/emails</li>
                    <li>• Access instructions (not passwords)</li>
                    <li>• Recovery information</li>
                    <li>• Important account details</li>
                    <li>• Special instructions for executors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">🔒 Security Best Practices</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Never include actual passwords</li>
                    <li>• Use our two-key encryption system</li>
                    <li>• Provide clear, step-by-step instructions</li>
                    <li>• Include backup access methods</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">💡 Examples</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="p-3 bg-gray-50 rounded">
                      <strong>Crypto Wallet:</strong> "Wallet address: 1A1zP1... Recovery phrase stored in safe deposit box #123 at ABC Bank"
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <strong>Email:</strong> "Primary email: john@email.com. Recovery email: backup@email.com. 2FA app on phone"
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">Two-Key Security</h4>
                      <p className="text-sm text-blue-800">Your instructions are encrypted with our K1+K2 system. Only authorized executors can access them after proper verification.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Add New Digital Asset</h1>
                <Link 
                  href="/my-assets"
                  className="text-gray-500 hover:text-gray-700"
                >
                  ← Back to My Assets
                </Link>
              </div>
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-green-800 font-medium">Asset added successfully and encrypted!</span>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="assetName" className="block text-sm font-medium text-gray-700 mb-2">
                      Asset Name *
                    </label>
                    <input
                      id="assetName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., My Bitcoin Wallet, Gmail Account"
                      value={assetName}
                      onChange={(e) => setAssetName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="assetType" className="block text-sm font-medium text-gray-700 mb-2">
                      Asset Type *
                    </label>
                    <select
                      id="assetType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={assetType}
                      onChange={(e) => setAssetType(e.target.value)}
                    >
                      <option value="">Select asset type...</option>
                      {assetTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="accountDetails" className="block text-sm font-medium text-gray-700 mb-2">
                    Account Details
                  </label>
                  <textarea
                    id="accountDetails"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Account username, email, wallet address, or other identifying information"
                    value={accountDetails}
                    onChange={(e) => setAccountDetails(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="accessInstructions" className="block text-sm font-medium text-gray-700 mb-2">
                    Access Instructions *
                  </label>
                  <textarea
                    id="accessInstructions"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Detailed instructions for your executor on how to access this asset. Include recovery methods, 2FA information, and any special procedures. Do NOT include actual passwords."
                    value={accessInstructions}
                    onChange={(e) => setAccessInstructions(e.target.value)}
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Provide clear, step-by-step instructions. Remember: never include actual passwords.
                  </p>
                </div>
                <div>
                  <label htmlFor="documentFile" className="block text-sm font-medium text-gray-700 mb-2">
                    Supporting Documents (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <input
                      id="documentFile"
                      type="file"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="documentFile" className="cursor-pointer">
                      <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600">
                        {documentFile ? documentFile.name : 'Click to upload supporting documents'}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        PDF, DOC, TXT, or images up to 10MB
                      </p>
                    </label>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-medium text-yellow-900 mb-1">Security Reminder</h4>
                      <p className="text-sm text-yellow-800">
                        This information will be encrypted using our two-key system. Your executor will only be able to access it after proper death verification and K2 release.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <Link 
                    href="/my-assets"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Encrypting & Saving...' : 'Add Asset'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Secure your digital legacy with enterprise-grade encryption
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All asset instructions are protected by our K1+K2 two-key system
          </p>
        </div>
      </footer>
    </div>
  )
}
