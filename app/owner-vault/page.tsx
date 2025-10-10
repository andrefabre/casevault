'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { TwoKeyEncryption, KeyManager } from '@/lib/encryption'

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
  
  // State management
  const [assets, setAssets] = useState<DigitalAsset[]>([])
  const [executorNomination, setExecutorNomination] = useState<ExecutorNomination | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  // Form states
  const [showAddAsset, setShowAddAsset] = useState(false)
  const [showNominateExecutor, setShowNominateExecutor] = useState(false)
  const [newAssetName, setNewAssetName] = useState('')
  const [newAssetInstructions, setNewAssetInstructions] = useState('')
  const [executorEmail, setExecutorEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }

    const user = session.user as any
    
    // Check access conditions
    if (user.role !== 'Owner') {
      router.push('/')
      return
    }
    
    if (!user.is_paid || !user.is_kyc_verified) {
      router.push('/auth/pending-verification')
      return
    }
    
    loadData()
  }, [session, status, router])

  const loadData = async () => {
    try {
      setLoading(true)
      
      // Load digital assets
      const assetsResponse = await fetch('/api/owner/assets')
      const assetsData = await assetsResponse.json()
      
      if (assetsResponse.ok) {
        setAssets(assetsData.assets || [])
      }
      
      // Load executor nomination
      const nominationResponse = await fetch('/api/owner/executor-nomination')
      const nominationData = await nominationResponse.json()
      
      if (nominationResponse.ok && nominationData.nomination) {
        setExecutorNomination(nominationData.nomination)
      }
      
    } catch (error) {
      setError('Failed to load vault data')
    } finally {
      setLoading(false)
    }
  }

  const handleAddAsset = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      // Encrypt instructions using K1
      const { encryptedInstructions, simulatedK1 } = TwoKeyEncryption.simulateK1Encryption(newAssetInstructions)
      
      // Store K1 locally for this user (MVP simulation)
      const userId = (session?.user as any)?.id
      KeyManager.storeK1(userId, simulatedK1)
      
      const response = await fetch('/api/owner/assets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          asset_name: newAssetName,
          encrypted_instructions: encryptedInstructions,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Failed to add asset')
        setSubmitting(false)
        return
      }

      // Reset form and reload data
      setNewAssetName('')
      setNewAssetInstructions('')
      setShowAddAsset(false)
      loadData()

    } catch (error) {
      setError('Failed to add asset')
    } finally {
      setSubmitting(false)
    }
  }

  const handleNominateExecutor = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/owner/nominate-executor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          executor_email: executorEmail,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Failed to nominate executor')
        setSubmitting(false)
        return
      }

      // Reset form and reload data
      setExecutorEmail('')
      setShowNominateExecutor(false)
      loadData()

    } catch (error) {
      setError('Failed to nominate executor')
    } finally {
      setSubmitting(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your vault...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Owner Vault</h1>
        <p className="text-gray-600">
          Manage your digital assets and nominate your successor
        </p>
        
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
      </div>

      {/* Digital Assets Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Digital Assets</h2>
          <button
            onClick={() => setShowAddAsset(!showAddAsset)}
            className="btn-primary"
          >
            Add New Asset
          </button>
        </div>

        {/* Add Asset Form */}
        {showAddAsset && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <form onSubmit={handleAddAsset} className="space-y-4">
              <div>
                <label htmlFor="assetName" className="form-label">
                  Asset Name
                </label>
                <input
                  id="assetName"
                  type="text"
                  required
                  className="form-input w-full"
                  placeholder="e.g., Binance Account, Domain Portfolio"
                  value={newAssetName}
                  onChange={(e) => setNewAssetName(e.target.value)}
                  disabled={submitting}
                />
              </div>
              
              <div>
                <label htmlFor="assetInstructions" className="form-label">
                  Access Instructions (Will be encrypted)
                </label>
                <textarea
                  id="assetInstructions"
                  required
                  rows={4}
                  className="form-input w-full"
                  placeholder="Detailed instructions for accessing this digital asset..."
                  value={newAssetInstructions}
                  onChange={(e) => setNewAssetInstructions(e.target.value)}
                  disabled={submitting}
                />
                <p className="text-xs text-gray-500 mt-1">
                  These instructions will be encrypted using K1 and only accessible to your executor upon verification.
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddAsset(false)}
                  className="btn-secondary"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Adding...' : 'Add Asset'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Assets List */}
        <div className="space-y-4">
          {assets.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No digital assets added yet.</p>
              <p className="text-sm">Click "Add New Asset" to get started.</p>
            </div>
          ) : (
            assets.map((asset) => (
              <div key={asset.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{asset.asset_name}</h3>
                    <p className="text-sm text-gray-500">
                      Added on {new Date(asset.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      ✓ Encrypted with K1 security
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Secured
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Executor Nomination Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Executor Nomination</h2>
          {!executorNomination && (
            <button
              onClick={() => setShowNominateExecutor(!showNominateExecutor)}
              className="btn-primary"
            >
              Nominate Executor
            </button>
          )}
        </div>

        {/* Nominate Executor Form */}
        {showNominateExecutor && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <form onSubmit={handleNominateExecutor} className="space-y-4">
              <div>
                <label htmlFor="executorEmail" className="form-label">
                  Executor Email Address
                </label>
                <input
                  id="executorEmail"
                  type="email"
                  required
                  className="form-input w-full"
                  placeholder="executor@example.com"
                  value={executorEmail}
                  onChange={(e) => setExecutorEmail(e.target.value)}
                  disabled={submitting}
                />
                <p className="text-xs text-gray-500 mt-1">
                  This person will receive access to your digital assets upon death verification.
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNominateExecutor(false)}
                  className="btn-secondary"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Nominating...' : 'Nominate Executor'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Current Nomination */}
        {executorNomination ? (
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Current Executor</h3>
                <p className="text-gray-600">{executorNomination.executor_email}</p>
                <p className="text-sm text-gray-500">
                  Nominated on {new Date(executorNomination.created_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  executorNomination.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  executorNomination.status === 'Verified' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {executorNomination.status}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No executor nominated yet.</p>
            <p className="text-sm">Nominate a trusted person to inherit your digital assets.</p>
          </div>
        )}
      </div>
    </div>
  )
}