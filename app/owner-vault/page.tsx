'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'

interface DigitalAsset {
  id: string
  asset_name: string
  encrypted_instructions: string
  created_at: string
}

interface ExecutorNomination {
  id: string
  executor_email: string
  status: string
  created_at: string
}

export default function OwnerVaultPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isWelcome = searchParams?.get('welcome') === 'true'
  const lockedFeature = searchParams?.get('locked')
  
  // State management
  const [assets, setAssets] = useState<DigitalAsset[]>([])
  const [executors, setExecutors] = useState<ExecutorNomination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showWelcome, setShowWelcome] = useState(isWelcome)
  const [showLockedAlert, setShowLockedAlert] = useState(!!lockedFeature)
  const [showOnboardingModal, setShowOnboardingModal] = useState(isWelcome || !!lockedFeature)
  // If first time (isWelcome), force payment task active
  const [activeTask, setActiveTask] = useState<string | null>(isWelcome ? 'payment' : null)
  
  // Onboarding completion state (now from session)
  const [completedTasks, setCompletedTasks] = useState({
    payment: false,
    registration: false,
    terms: false,
    mfa: false,
    kyc: false
  })

  // Update completedTasks from session when available
  useEffect(() => {
    if (session) {
      setCompletedTasks({
        payment: !!session.user.is_paid,
        registration: true, // Assume registration is always complete for mock users
        terms: true,        // Assume terms are always accepted for mock users
        mfa: !!session.user.is_mfa_setup,
        kyc: !!session.user.is_kyc_verified
      })
    }
  }, [session])
  
  // Form states
  const [showAddAsset, setShowAddAsset] = useState(false)
  const [showNominateExecutor, setShowNominateExecutor] = useState(false)
  
  // Registration form state
  const [registrationForm, setRegistrationForm] = useState({
    phone: '',
    address: '',
    city: '',
    country: '',
    emergencyContact: '',
    emergencyPhone: ''
  })

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }

    // Load dashboard data
    loadDashboardData()

    // Auto-open onboarding modal for new users or if redirected from locked features
    if (isWelcome || lockedFeature) {
      setShowOnboardingModal(true)
    }
  }, [session, status, isWelcome, lockedFeature])

  const loadDashboardData = async () => {
    try {
      // Load assets and executors
      setLoading(false)
    } catch (error) {
      setError('Failed to load dashboard data')
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your vault...</p>
        </div>
      </div>
    )
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
              <Link href="/owner-vault" className="text-blue-600 font-medium">Dashboard</Link>
              <Link href="/executor-portal" className="text-gray-700 hover:text-gray-900">Executor Portal</Link>
              <span className="text-gray-400 cursor-not-allowed flex items-center">
                My Assets
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              <Link href="/admin-panel" className="text-gray-700 hover:text-gray-900">Admin Panel</Link>
              <Link href="/executor-access" className="text-gray-700 hover:text-gray-900">Executor Access</Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900">About</Link>
              <button className="text-gray-700 hover:text-gray-900">Log Out</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Welcome Banner for New Users */}
      {showWelcome && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Welcome to Your Digital Legacy Vault!
                  </h3>
                  <div className="mt-1 text-sm text-green-700">
                    <p>Your account has been created successfully. Let's get you started with securing your digital legacy.</p>
                  </div>
                </div>
              </div>
              <div className="ml-auto pl-3">
                <button
                  type="button"
                  className="bg-green-50 rounded-md text-green-400 hover:text-green-500 focus:outline-none"
                  onClick={() => setShowWelcome(false)}
                >
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Locked Feature Alert */}
      {showLockedAlert && lockedFeature && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    {lockedFeature === 'assets' ? 'Asset Management Locked' : 'Executor Nomination Locked'}
                  </h3>
                  <div className="mt-1 text-sm text-red-700">
                    <p>Complete your account setup below to unlock {lockedFeature === 'assets' ? 'asset management' : 'executor nomination'} features.</p>
                  </div>
                </div>
              </div>
              <div className="ml-auto pl-3">
                <button
                  type="button"
                  className="bg-red-50 rounded-md text-red-400 hover:text-red-500 focus:outline-none"
                  onClick={() => setShowLockedAlert(false)}
                >
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

  {/* Onboarding Modal Overlay */}
  {showOnboardingModal && Object.values(completedTasks).filter(Boolean).length < 5 && (
        <div className="fixed left-0 right-0 top-24 bottom-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[80vh] overflow-hidden mt-0">
            {/* Modal Header */}
            <div className="bg-blue-600 text-white p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Complete Your Account Setup
                </h2>
                <p className="text-blue-100 mt-1">Complete these steps to unlock asset management and executor nomination features.</p>
              </div>
              <button
                onClick={() => setShowOnboardingModal(false)}
                className="text-blue-100 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex h-[600px]">
              {/* Left Column - Task List */}
              <div className="w-1/2 bg-gray-50 p-6 border-r border-gray-200 overflow-y-auto">
                <div className="space-y-4">
                  {/* Task 1: Payment Details */}
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      activeTask === 'payment' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                    onClick={() => setActiveTask('payment')}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {completedTasks.payment ? (
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xs text-gray-500">1</span>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Add Payment Details</h3>
                        <p className="text-sm text-gray-500">Set up your subscription and billing information</p>
                      </div>
                    </div>
                  </div>

                  {/* Task 2: Registration Details */}
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      activeTask === 'registration' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                    onClick={() => setActiveTask('registration')}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {completedTasks.registration ? (
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xs text-gray-500">2</span>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Complete Registration</h3>
                        <p className="text-sm text-gray-500">Add contact details, phone number, and address</p>
                      </div>
                    </div>
                  </div>

                  {/* Task 3: Terms of Service */}
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      activeTask === 'terms' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                    onClick={() => setActiveTask('terms')}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {completedTasks.terms ? (
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xs text-gray-500">3</span>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Accept Terms of Service</h3>
                        <p className="text-sm text-gray-500">Review and accept our terms and privacy policy</p>
                      </div>
                    </div>
                  </div>

                  {/* Task 4: MFA Setup */}
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      activeTask === 'mfa' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                    onClick={() => setActiveTask('mfa')}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {completedTasks.mfa ? (
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xs text-gray-500">4</span>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Setup Multi-Factor Authentication</h3>
                        <p className="text-sm text-gray-500">Secure your account with MFA using authenticator app or SMS</p>
                      </div>
                    </div>
                  </div>

                  {/* Task 5: KYC Verification */}
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      activeTask === 'kyc' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                    onClick={() => setActiveTask('kyc')}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {completedTasks.kyc ? (
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xs text-gray-500">5</span>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">KYC Identity Verification</h3>
                        <p className="text-sm text-gray-500">Upload government-issued ID for identity verification</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Account Setup Progress</span>
                    <span>{Object.values(completedTasks).filter(Boolean).length} of 5 completed</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${(Object.values(completedTasks).filter(Boolean).length / 5) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Right Column - Forms */}
              <div className="w-1/2 p-6 overflow-y-auto">
                {activeTask === null && (
                  <div className="flex items-center justify-center h-full text-center">
                    <div>
                      <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Select a task to get started</h3>
                      <p className="text-gray-500">Click on any task in the left panel to view and complete the form.</p>
                    </div>
                  </div>
                )}

                {activeTask === 'payment' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Payment Details</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          placeholder="John Smith"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setCompletedTasks(prev => ({...prev, payment: true}))
                          setActiveTask(null)
                        }}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Save Payment Details
                      </button>
                    </form>
                  </div>
                )}

                {activeTask === 'registration' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete Registration</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={registrationForm.phone}
                          onChange={(e) => setRegistrationForm(prev => ({...prev, phone: e.target.value}))}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          value={registrationForm.address}
                          onChange={(e) => setRegistrationForm(prev => ({...prev, address: e.target.value}))}
                          placeholder="123 Main Street"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                          <input
                            type="text"
                            value={registrationForm.city}
                            onChange={(e) => setRegistrationForm(prev => ({...prev, city: e.target.value}))}
                            placeholder="New York"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                          <select
                            value={registrationForm.country}
                            onChange={(e) => setRegistrationForm(prev => ({...prev, country: e.target.value}))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name</label>
                        <input
                          type="text"
                          value={registrationForm.emergencyContact}
                          onChange={(e) => setRegistrationForm(prev => ({...prev, emergencyContact: e.target.value}))}
                          placeholder="Jane Smith"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone</label>
                        <input
                          type="tel"
                          value={registrationForm.emergencyPhone}
                          onChange={(e) => setRegistrationForm(prev => ({...prev, emergencyPhone: e.target.value}))}
                          placeholder="+1 (555) 987-6543"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setCompletedTasks(prev => ({...prev, registration: true}))
                          setActiveTask(null)
                        }}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Save Registration Details
                      </button>
                    </form>
                  </div>
                )}

                {activeTask === 'terms' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Terms of Service</h3>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4 max-h-60 overflow-y-auto">
                      <h4 className="font-medium mb-2">MyDigitalLegacy Vault Terms of Service</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        By using this service, you agree to the following terms and conditions...
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        1. You are responsible for maintaining the security of your account and password.
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        2. You agree to provide accurate, current, and complete information.
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        3. We reserve the right to modify these terms at any time.
                      </p>
                      <p className="text-sm text-gray-600">
                        [This is a simplified example - full terms would be much longer]
                      </p>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-700">I agree to the Terms of Service</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-700">I agree to the Privacy Policy</span>
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCompletedTasks(prev => ({...prev, terms: true}))
                        setActiveTask(null)
                      }}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4"
                    >
                      Accept Terms
                    </button>
                  </div>
                )}

                {activeTask === 'mfa' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Setup Multi-Factor Authentication</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Authenticator App</h4>
                        <p className="text-sm text-gray-600 mb-3">Use an authenticator app like Google Authenticator or Authy</p>
                        <div className="bg-gray-100 p-4 rounded text-center mb-3">
                          <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded mx-auto flex items-center justify-center">
                            <span className="text-xs text-gray-500">QR Code</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Enter verification code"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="text-center text-gray-500">or</div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium mb-2">SMS Verification</h4>
                        <p className="text-sm text-gray-600 mb-3">Receive verification codes via SMS</p>
                        <div className="flex gap-2">
                          <input
                            type="tel"
                            placeholder="Phone number"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                          >
                            Send Code
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCompletedTasks(prev => ({...prev, mfa: true}))
                        setActiveTask(null)
                      }}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4"
                    >
                      Enable MFA
                    </button>
                  </div>
                )}

                {activeTask === 'kyc' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">KYC Identity Verification</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select Document Type</option>
                          <option value="passport">Passport</option>
                          <option value="drivers_license">Driver's License</option>
                          <option value="national_id">National ID Card</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Front Side</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                          <input type="file" className="hidden" accept="image/*" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Back Side</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                          <input type="file" className="hidden" accept="image/*" />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setCompletedTasks(prev => ({...prev, kyc: true}))
                          setActiveTask(null)
                        }}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Submit for Verification
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Digital Legacy, Secured</h1>
          <p className="text-xl text-blue-100 mb-2">
            Manage your assets, with confidence, online legacy and identity
          </p>
          <p className="text-blue-100 mb-6">comprehensive</p>
          
          {/* Show complete setup button if onboarding not complete */}
          {Object.values(completedTasks).filter(Boolean).length < 5 && (
            <button
              onClick={() => setShowOnboardingModal(true)}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Complete Account Setup ({Object.values(completedTasks).filter(Boolean).length}/5)
            </button>
          )}
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
            
            {/* Account Dashboard */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Dashboard</h2>
              <p className="text-gray-600 mb-6">Monitor your security status and manage your digital legacy</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Security Status</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Complete
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700">Email Confirmation</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    ✓ Active
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700">Multi-Factor Auth</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    ✓ Active
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700">KYC Verification</span>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Pending
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700">Payment Verification</span>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Pending
                  </span>
                </div>
              </div>
            </div>

            {/* Pending Tasks */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Tasks</h2>
              <p className="text-gray-600 mb-6">Complete these steps to fully secure your vault</p>
              
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">Complete KYC verification</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Start →
                    </button>
                  </div>
                </div>
                
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">Set up payment method</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Start →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Registered Assets */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Registered Assets</h2>
                  <p className="text-gray-600">Manage your digital legacy instructions and documents</p>
                </div>
                  <Link 
                    href="/add-asset"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Add Asset
                  </Link>
              </div>
              
              <div className="text-center py-8 text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p>No assets registered yet</p>
                <p className="text-sm">Click "Add Asset" to secure your first digital asset</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Two-Key Encryption */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Two-Key Encryption</h2>
              <p className="text-gray-600 mb-6">
                Your instructions are encrypted with a two-key system. Executors 
                need data on your device, using K1+1 and security and released only 
                after verified conditions are met.
              </p>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">2 Assets Encrypted</span>
              </div>
            </div>

            {/* Nominated Executors */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Nominated Executors</h2>
                <Link 
                  href="/my-executors"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Nominate Executor
                </Link>
              </div>
              
              <div className="space-y-4">
                {/* Executor 2 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">Sam Gouge</h3>
                      <p className="text-sm text-gray-600">sam.gouge@example.com</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      ✓ Active
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    Nominated: Oct 14, 2025 10:08 pm
                  </div>
                </div>

                {/* Executor 3 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">Maya Tech</h3>
                      <p className="text-sm text-gray-600">maya.tech@example.com</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      ✓ KYC Verified
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    Verified: Oct 14, 2025 10:08 pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Securely protect your digital assets with DigitalLegacyVault - Making your digital legacy secure and secure.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All data kept in secure servers 256-bit encryption
          </p>
        </div>
      </footer>
    </div>
  )
}