import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const session = await getServerSession()

  // If user is logged in, redirect to appropriate vault
  if (session) {
    const userRole = (session.user as any)?.role
    
    switch (userRole) {
      case 'Owner':
        redirect('/owner-vault')
      case 'Executor':
        redirect('/executor-vault')
      case 'Admin':
        redirect('/admin-vault')
      default:
        redirect('/auth/setup-mfa')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">MyDigitalLegacy</span>
              <span className="block text-primary-600">Vault</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              by Exgenesis - High-Security MVP Build
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
              Secure, RegTech-focused, non-custodial platform that registers digital asset instructions 
              and executes post-mortem release to your nominated Executor using advanced two-key security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/auth/signup" 
                className="btn-primary text-lg px-8 py-3 w-full sm:w-auto"
              >
                Get Started - Secure Your Legacy
              </Link>
              <Link 
                href="/auth/signin" 
                className="btn-secondary text-lg px-8 py-3 w-full sm:w-auto"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Enterprise-Grade Security
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Two-Key Security (K1/K2)</h3>
              <p className="text-gray-600">
                Advanced dual-key encryption ensures only authorized access upon death verification.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">RegTech Compliance</h3>
              <p className="text-gray-600">
                Built-in KYC verification and death certificate validation processes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Non-Custodial</h3>
              <p className="text-gray-600">
                You maintain complete control over your digital assets and access instructions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Register & Verify</h3>
              <p className="text-gray-600">
                Create your account with MFA and complete KYC verification.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Assets</h3>
              <p className="text-gray-600">
                Add your digital assets with encrypted access instructions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Nominate Executor</h3>
              <p className="text-gray-600">
                Choose a trusted person to receive access upon verification.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Release</h3>
              <p className="text-gray-600">
                Assets are released only after proper death verification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 MyDigitalLegacy Vault by Exgenesis. All rights reserved.</p>
          <p className="text-gray-400">
            Domains: mydigitallegacyvault.com • mydigitallegacyvault.com.au
          </p>
        </div>
      </footer>
    </div>
  )
}