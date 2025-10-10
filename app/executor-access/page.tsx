'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ExecutorAccessPage() {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null)

  const claimsData = {
    submitted: 2,
    approved: 1,
    accessible: 8
  }

  const securityWorkflow = [
    {
      id: 1,
      title: "Admin Verification",
      description: "Legal authority and identity match checks are performed",
      status: "completed",
      icon: "👤"
    },
    {
      id: 2,
      title: "K2 Key Release",
      description: "Admin releases K2 decryption key after approval",
      status: "completed",
      icon: "🔑"
    },
    {
      id: 3,
      title: "Access Decrypted Instructions",
      description: "Use K1 and K2 keys to decrypt and view asset instructions",
      status: "current",
      icon: "📋"
    }
  ]

  const availableAssets = [
    {
      id: "1",
      name: "Primary Email Account",
      type: "email",
      status: "encrypted",
      description: "Complete asset instructions and documentation for legacy management"
    }
  ]

  const handleDecryptInstructions = (assetId: string) => {
    setSelectedAsset(assetId)
    // In a real app, this would trigger the decryption process
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
              <Link href="#" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Executor Portal</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Owner Onboarding</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Admin Panel</Link>
              <Link href="#" className="text-blue-600 font-medium">Executor Access</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">About</Link>
              <button className="text-gray-700 hover:text-gray-900">Log Out</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Executor Access Portal</h1>
          <p className="text-gray-600">Manage approved claims and access encrypted legacy instructions</p>
        </div>

        {/* Security & Access Status */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Security & Access Status</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              ✓ VERIFIED ACCESS
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Submitted Claims */}
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm text-gray-600">Submitted Claims</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{claimsData.submitted}</div>
              <p className="text-xs text-gray-500">Total claims submitted for review</p>
            </div>

            {/* Approved Claims */}
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600">Approved Claims</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{claimsData.approved}</div>
              <p className="text-xs text-gray-500">Claims with full access granted</p>
            </div>

            {/* Accessible Assets */}
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm text-gray-600">Accessible Assets</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{claimsData.accessible}</div>
              <p className="text-xs text-gray-500">Decryptable legacy items</p>
            </div>
          </div>

          {/* My Claims Status */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-4">My Claims Status</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Submitted on</span>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                    Approved
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                    Approved
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm text-gray-600">✓ Decryption Key</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600 ml-6">Submitted</span>
                <span className="text-sm text-gray-600 ml-auto">Approved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Available Assets for Decryption */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Available Assets for Decryption</h2>
              <span className="text-sm text-gray-500">Assets you can now access</span>
            </div>

            <div className="space-y-4">
              {availableAssets.map((asset) => (
                <div key={asset.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{asset.name}</h3>
                      <p className="text-sm text-gray-600">{asset.description}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {asset.status}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleDecryptInstructions(asset.id)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    🔓 Decrypt Instructions
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Security Workflow */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Workflow</h2>
            <p className="text-gray-600 text-sm mb-6">Two-key decryption process for secure access</p>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Provide death certificate and police testimony for validation</strong>
                </p>
              </div>

              {securityWorkflow.map((step, index) => (
                <div key={step.id} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : step.status === 'current'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {step.status === 'completed' ? '✓' : index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>

                  {step.status === 'completed' && (
                    <div className="text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-8 text-center text-sm text-gray-500">
          This page is where you can find steps in the industry to safely handle digital estate
          and will have to review about life insurance in CA
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Secure digital legacy access with verified executor permissions
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All access activities are logged for legal compliance and audit purposes
          </p>
        </div>
      </footer>
    </div>
  )
}