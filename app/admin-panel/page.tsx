'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminPanelPage() {
  const [selectedTab, setSelectedTab] = useState('overview')

  // Mock data for the admin panel
  const systemStats = {
    pendingClaims: 0,
    totalUsers: 0,
    approvedClaims: 0,
    assetsSecured: 0
  }

  const executorClaims = [
    {
      id: 1,
      executor: "Sam Gouge",
      owner: "Ronald Grimley", 
      claimType: "Death Claim",
      legalAuthority: "Pending",
      identityMatch: "Approved",
      k2KeyReleased: "YES",
      status: "pending"
    },
    {
      id: 2,
      executor: "Ava Johnson",
      owner: "Ella Roth",
      claimType: "Death Claim", 
      legalAuthority: "Pending",
      identityMatch: "Approved",
      k2KeyReleased: "NO",
      status: "pending"
    }
  ]

  const userManagement = {
    allDemographics: [],
    emailConfirm: [],
    kycVerified: [],
    paymentVerified: []
  }

  const handleReviewClaim = (claimId: number) => {
    console.log(`Reviewing claim ${claimId}`)
  }

  const handleSimulatePayment = () => {
    console.log('Simulating payment process')
  }

  const handleSimulateKYC = () => {
    console.log('Simulating KYC verification')
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
              <Link href="/auth/signup" className="text-gray-700 hover:text-gray-900">Owner Onboarding</Link>
              <Link href="/admin-panel" className="text-blue-600 font-medium">Admin Panel</Link>
              <Link href="/executor-access" className="text-gray-700 hover:text-gray-900">Executor Access</Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900">About</Link>
              <button className="text-gray-700 hover:text-gray-900">Log Out</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Control Panel</h1>
          <p className="text-gray-600">Centralized compliance management and security oversight</p>
        </div>

        {/* System Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">System Overview</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Pending Claims */}
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{systemStats.pendingClaims}</div>
              <p className="text-sm text-gray-600">Pending Claims</p>
            </div>

            {/* Total Users */}
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{systemStats.totalUsers}</div>
              <p className="text-sm text-gray-600">Total Users</p>
            </div>

            {/* Approved Claims */}
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{systemStats.approvedClaims}</div>
              <p className="text-sm text-gray-600">Approved Claims</p>
            </div>

            {/* Assets Secured */}
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{systemStats.assetsSecured}</div>
              <p className="text-sm text-gray-600">Assets Secured</p>
            </div>
          </div>
        </div>

        {/* Executor Claims Management */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Executor Claims Management</h2>
          
          <div className="space-y-6">
            {executorClaims.map((claim) => (
              <div key={claim.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Executor: </span>
                      <span className="text-gray-900">{claim.executor}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Owner: </span>
                      <span className="text-gray-900">{claim.owner}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Claim Type: </span>
                      <span className="text-gray-900">{claim.claimType}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleReviewClaim(claim.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Review Claim
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Legal Authority:</span>
                    <div className="mt-1">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        {claim.legalAuthority}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Identity Match:</span>
                    <div className="mt-1">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {claim.identityMatch}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">K2 Key Released:</span>
                    <div className="mt-1">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        claim.k2KeyReleased === 'YES' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {claim.k2KeyReleased}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">User Management</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Demographics Section */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">All Demographics</h3>
              
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Email Confirmed</span>
                    <span className="text-gray-600">{userManagement.emailConfirm.length}</span>
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">KYC Verified</span>
                    <span className="text-gray-600">{userManagement.kycVerified.length}</span>
                  </div>
                </div>
                
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Payment Verified</span>
                    <span className="text-gray-600">{userManagement.paymentVerified.length}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Actions */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Admin Actions</h3>
              
              <div className="space-y-3">
                <button
                  onClick={handleSimulatePayment}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 text-left"
                >
                  <span className="font-medium text-gray-900">Simulate Payment</span>
                </button>
                
                <button
                  onClick={handleSimulateKYC}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 text-left"
                >
                  <span className="font-medium text-gray-900">Simulate KYC</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                Manage
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                View
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Step-by-step
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>admin_portal</option>
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                Inspect
              </button>
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with spacing for bottom nav */}
      <div className="pb-20">
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              This page is where they can find steps in the debugging in which end death in white docs
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Can will have to review about the information in CA
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}