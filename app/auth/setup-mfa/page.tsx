'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import QRCode from 'qrcode'

export default function SetupMFAPage() {
  const { data: session, status } = useSession()
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [secret, setSecret] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1) // 1: Generate QR, 2: Verify
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }

    // Check if MFA is already setup
    if ((session.user as any)?.is_mfa_setup) {
      router.push('/auth/subscription')
      return
    }

    generateMFASecret()
  }, [session, status, router])

  const generateMFASecret = async () => {
    try {
      const response = await fetch('/api/auth/mfa/generate', {
        method: 'POST',
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        setError(data.message || 'Failed to generate MFA secret')
        return
      }
      
      setSecret(data.secret)
      
      // Generate QR code
      const qrCodeDataUrl = await QRCode.toDataURL(data.qrCodeUrl)
      setQrCodeUrl(qrCodeDataUrl)
      
    } catch (error) {
      setError('Failed to generate MFA setup')
    }
  }

  const verifyMFA = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/mfa/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: verificationCode,
          secret: secret,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Invalid verification code')
        setLoading(false)
        return
      }

      // MFA setup successful, redirect to subscription
      router.push('/auth/subscription')
    } catch (error) {
      setError('Verification failed. Please try again.')
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Set Up Multi-Factor Authentication
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Secure your account with an additional layer of protection
            </p>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Step 1: Scan QR Code
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Use an authenticator app like Google Authenticator, Authy, or Microsoft Authenticator to scan this QR code:
                </p>
                
                {qrCodeUrl && (
                  <div className="flex justify-center mb-4">
                    <img src={qrCodeUrl} alt="MFA QR Code" className="border rounded" />
                  </div>
                )}
                
                <div className="bg-gray-50 p-3 rounded text-xs font-mono break-all">
                  <p className="text-gray-600 mb-1">Manual entry key:</p>
                  <p className="text-gray-900">{secret}</p>
                </div>
              </div>
              
              <button
                onClick={() => setStep(2)}
                className="btn-primary w-full"
                disabled={!secret}
              >
                I've Added the Account
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Step 2: Verify Setup
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Enter the 6-digit code from your authenticator app:
                </p>
              </div>
              
              <form onSubmit={verifyMFA} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="verificationCode" className="form-label">
                    Verification Code
                  </label>
                  <input
                    id="verificationCode"
                    name="verificationCode"
                    type="text"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    required
                    className="form-input w-full text-center text-2xl tracking-widest"
                    placeholder="000000"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                    disabled={loading}
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary flex-1"
                    disabled={loading}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                    disabled={loading || verificationCode.length !== 6}
                  >
                    {loading ? 'Verifying...' : 'Verify & Continue'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            This is a mandatory security requirement for all MyDigitalLegacy Vault users
          </p>
        </div>
      </div>
    </div>
  )
}