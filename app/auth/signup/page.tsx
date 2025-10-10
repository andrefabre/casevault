'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUpPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!fullName.trim()) {
      setError('Full name is required')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name: fullName,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Failed to create account')
        setLoading(false)
        return
      }

      // Redirect to sign in page with success message
      router.push('/auth/signin?message=Account created successfully. Please sign in.')
    } catch (error) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">DigitalLegacyVault</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-gray-900">Asset Registration</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Executor Portal</Link>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for a user" 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Your Legacy</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Secure Vault</Link>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">1</span>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-16 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign up</h1>
            <p className="text-gray-600">Join us securing your digital legacy today</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Smith"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="johnsmith@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Re-enter password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>

            <div className="text-center">
              <Link href="/auth/signin" className="text-blue-600 hover:text-blue-700">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-200 to-amber-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Scenic Background with Person */}
          <div className="w-full h-full relative overflow-hidden">
            {/* Mountains and Sky */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-amber-300 to-green-200"></div>
            
            {/* Mountains silhouette */}
            <div className="absolute bottom-1/3 left-0 right-0 h-2/3">
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-60">
                <polygon points="0,400 150,200 300,250 450,150 600,200 800,180 800,400" fill="#8B7355"/>
                <polygon points="0,400 200,250 350,280 500,180 650,220 800,200 800,400" fill="#A0916B"/>
              </svg>
            </div>
            
            {/* Futuristic city/tower */}
            <div className="absolute top-1/4 right-1/4 w-32 h-48 bg-gradient-to-t from-gray-400 to-blue-200 rounded-t-full opacity-70 transform rotate-12">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-blue-300 rounded-full"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-cyan-300 rounded-full"></div>
            </div>
            
            {/* Person silhouette */}
            <div className="absolute bottom-1/4 left-1/3 w-24 h-32">
              <div className="w-full h-full relative">
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-600 rounded-full"></div>
                {/* Body */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gray-700 rounded-t-lg"></div>
                {/* Arms */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-x-4 w-12 h-3 bg-gray-700 rounded-full"></div>
                {/* Legs */}
                <div className="absolute top-22 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-gray-700"></div>
              </div>
            </div>
            
            {/* Desk/workspace */}
            <div className="absolute bottom-1/6 left-1/4 right-1/4 h-16 bg-white/90 rounded-lg shadow-lg">
              <div className="absolute top-2 left-4 w-16 h-10 bg-gray-200 rounded border-2 border-gray-400"></div>
              <div className="absolute top-2 right-4 w-8 h-10 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-900">DigitalLegacyVault</span>
              <span className="text-sm text-gray-600">© 2024 DigitalLegacyVault, Inc</span>
            </div>
            
            <nav className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-700 hover:text-gray-900">Asset Registration</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Executor Portal</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Your Legacy</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Secure Vault</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}