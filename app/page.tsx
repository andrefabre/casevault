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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-sm text-gray-600 mb-4">Be our Affiliate partner!</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Protect Your<br />
                Digital Legacy<br />
                <span className="text-blue-600">Now</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Secure your digital assets with Exgenesis - The Future
                of Digital Asset Protection.
              </p>
              <Link 
                href="/auth/signup" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-900 via-gray-800 to-black rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Secure Digital Vault</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-6">
            <h3 className="text-xl font-semibold mb-2">The #1 solution for safeguarding digital legacies</h3>
            <p className="text-blue-100">AI-Powered up losing everything your digital world</p>
          </div>
          <div className="flex justify-center items-center space-x-8 opacity-80">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover the MyDigitalLegacyVault
            </h2>
            <p className="text-gray-600">Secure legacy • Safeguard beyond • Secure unlock of love</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Legacy</h3>
              <p className="text-gray-600 text-sm mb-4">Safeguard digital assets to protect for the future.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Learn more</Link>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">RegTech Compliance</h3>
              <p className="text-gray-600 text-sm mb-4">Risk compliant with RegTech focused solutions.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Learn more</Link>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Mechanism</h3>
              <p className="text-gray-600 text-sm mb-4">Uses secure dual-access via K1+K2 keys.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Learn more</Link>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Asset Guard</h3>
              <p className="text-gray-600 text-sm mb-4">Protect your unique Digital Asset Guard.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Learn more</Link>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Releases</h3>
              <p className="text-gray-600 text-sm mb-4">Automated asset releases via Secure Releases.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Learn more</Link>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Two-Key Access</h3>
              <p className="text-gray-600 text-sm mb-4">Dual-Key Access enhances your peace of mind.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Learn more</Link>
            </div>

            {/* Feature Card 7 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Vault</h3>
              <p className="text-gray-600 text-sm mb-4">Securely store instructions in your Digital Vault.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Learn more</Link>
            </div>

            {/* Feature Card 8 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Release</h3>
              <p className="text-gray-600 text-sm mb-4">Ensures only designated Executors can access your legacy.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Learn more</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Client Voices */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Voices</h2>
            <p className="text-gray-600">Hear from satisfied clients around the world.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-8">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex-1 flex items-center gap-8">
                <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-700 mb-4">
                    "Navigating the complexities of digital asset management was daunting until I discovered MyDigitalLegacyVault. Knowing that My assets will be seamlessly managed and securely transferred gives me peace of mind. The clear compliance focus means I can rest assured that my executor will face no legal hurdles during this delicate process. Truly revolutionary!"
                  </blockquote>
                  <cite className="text-sm text-gray-600">
                    Alex Johnson, Legal Advisor at Exgenesis
                  </cite>
                </div>
              </div>
              
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blog Articles */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Latest blog articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Article 1 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Unlocking the Future: How MyDigitalLegacy Reinvents Digital Asset Management
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore the innovative solutions of MyDigitalLegacy as we delve into digital asset management. Discover how our platform offers effective alternatives to traditional methods, ensuring your legacy endures with ease.
                </p>
                <Link href="#" className="text-blue-600 text-sm font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </article>

            {/* Blog Article 2 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Securing Digital Assets with MyDigitalLegacy: A Game Changer for Trust and Compliance
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how MyDigitalLegacy is revolutionizing the security of digital assets. Our platform ensures trust and compliance with a robust two-key mechanism, protecting digital investments with seamless precision.
                </p>
                <Link href="#" className="text-blue-600 text-sm font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </article>

            {/* Blog Article 3 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Preserving Your Digital Legacy: RegTech Solutions for Future-Proofing Assets
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore how MyDigitalLegacy Vault harnesses RegTech to ensure your digital assets and legacy are preserved. Our tech solutions offer a transformed post-mortem, offering an efficient way to tackle estate planning challenges.
                </p>
                <Link href="#" className="text-blue-600 text-sm font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Secure Your Legacy
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Secure peace of mind by safeguarding your digital legacy built
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Exgenesis</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white">Product</Link>
                <Link href="#" className="block hover:text-white">Solutions</Link>
                <Link href="#" className="block hover:text-white">Customers</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white">About</Link>
                <Link href="#" className="block hover:text-white">Jobs</Link>
                <Link href="#" className="block hover:text-white">News</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white">Help</Link>
                <Link href="#" className="block hover:text-white">Contact Us</Link>
                <Link href="#" className="block hover:text-white">Status</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white">Terms</Link>
                <Link href="#" className="block hover:text-white">Privacy</Link>
                <Link href="#" className="block hover:text-white">Security</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>This page is styled by Google's app that are built for safe harbor rules</p>
          </div>
        </div>
      </footer>
    </div>
  )
}