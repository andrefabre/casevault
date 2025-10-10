'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { TwoKeyEncryption, KeyManager } from '@/lib/encryption'

interface DigitalAsset {
  id: string
  asset_name: string
  encrypted_instructions: string
  owner: {
    email: string
  }
}

interface VerificationDoc {
  id: string
  type: string
  file_attachment: string
  status: string
  created_at: string
}

export default function ExecutorVaultPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const [assets, setAssets] = useState<DigitalAsset[]>([])
  const [verificationDocs, setVerificationDocs] = useState<VerificationDoc[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)
  
  // Document upload states
  const [showUpload, setShowUpload] = useState(false)
  const [docType, setDocType] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }

    const user = session.user as any
    
    if (user.role !== 'Executor') {
      router.push('/')
      return
    }
    
    loadData()
  }, [session, status, router])

  const loadData = async () => {
    try {
      setLoading(true)
      
      // Load verification documents
      const docsResponse = await fetch('/api/executor/verification-docs')
      const docsData = await docsResponse.json()
      
      if (docsResponse.ok) {
        setVerificationDocs(docsData.documents || [])
      }
      
      // Load assets if K2 is available
      const assetsResponse = await fetch('/api/executor/assets')
      const assetsData = await assetsResponse.json()
      
      if (assetsResponse.ok) {
        setAssets(assetsData.assets || [])
      }
      
    } catch (error) {
      setError('Failed to load vault data')
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile || !docType) return

    setUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)
      formData.append('type', docType)

      const response = await fetch('/api/executor/upload-document', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Failed to upload document')
        setUploading(false)
        return
      }

      // Reset form and reload data
      setSelectedFile(null)
      setDocType('')
      setShowUpload(false)
      loadData()

    } catch (error) {
      setError('Failed to upload document')
    } finally {
      setUploading(false)
    }
  }

  const decryptAssetInstructions = (asset: DigitalAsset): string | null => {
    try {
      const user = session?.user as any
      const k2 = user.keyComponentK2
      
      if (!k2) {
        return null
      }

      // In a real implementation, K1 would come from the owner
      // For MVP, we'll simulate this
      const k1 = KeyManager.retrieveK1('simulated-owner-id')
      
      if (!k1) {
        return 'K1 key not available'
      }

      return TwoKeyEncryption.decryptWithK1AndK2(
        asset.encrypted_instructions,
        k1,
        k2
      )
    } catch (error) {
      return 'Decryption failed'
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading executor vault...</p>
        </div>
      </div>
    )
  }

  const user = session?.user as any
  const isK2Available = user?.release_key_K2_available

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Executor Vault</h1>
        <p className="text-gray-600">
          Upload verification documents and access digital assets
        </p>
        
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
      </div>

      {/* Status Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Verification Status</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Document Upload:</span>
            <span className={`px-2 py-1 rounded text-sm ${
              verificationDocs.length > 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {verificationDocs.length > 0 ? 'Completed' : 'Required'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Admin Review:</span>
            <span className={`px-2 py-1 rounded text-sm ${
              verificationDocs.some(doc => doc.status === 'Approved') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {verificationDocs.some(doc => doc.status === 'Approved') ? 'Approved' : 'Pending'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700">K2 Release:</span>
            <span className={`px-2 py-1 rounded text-sm ${
              isK2Available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {isK2Available ? 'Available' : 'Not Released'}
            </span>
          </div>
        </div>
      </div>

      {/* Document Upload Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Verification Documents</h2>
          <button
            onClick={() => setShowUpload(!showUpload)}
            className="btn-primary"
            disabled={uploading}
          >
            Upload Document
          </button>
        </div>

        {/* Upload Form */}
        {showUpload && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <form onSubmit={handleFileUpload} className="space-y-4">
              <div>
                <label htmlFor="docType" className="form-label">
                  Document Type
                </label>
                <select
                  id="docType"
                  required
                  className="form-input w-full"
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                  disabled={uploading}
                >
                  <option value="">Select document type</option>
                  <option value="Executor_ID">Executor ID/Passport</option>
                  <option value="Death_Cert">Death Certificate</option>
                  <option value="Probate">Probate Document</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="file" className="form-label">
                  Upload File
                </label>
                <input
                  id="file"
                  type="file"
                  required
                  className="form-input w-full"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  disabled={uploading}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: PDF, JPG, PNG (max 5MB)
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowUpload(false)}
                  className="btn-secondary"
                  disabled={uploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={uploading || !selectedFile || !docType}
                >
                  {uploading ? 'Uploading...' : 'Upload Document'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Documents List */}
        <div className="space-y-4">
          {verificationDocs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No documents uploaded yet.</p>
              <p className="text-sm">Upload your ID and death certificate to begin verification.</p>
            </div>
          ) : (
            verificationDocs.map((doc) => (
              <div key={doc.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {doc.type.replace('_', ' ')}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Uploaded on {new Date(doc.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    doc.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    doc.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {doc.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Digital Assets Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Digital Assets</h2>
        
        {!isK2Available ? (
          <div className="text-center py-8 text-gray-500">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-yellow-800 mb-2">Pending Review</h3>
              <p className="text-yellow-700">
                Digital assets will be accessible once your verification documents are approved and K2 is released by admin.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {assets.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No digital assets found for your nominated account.</p>
              </div>
            ) : (
              assets.map((asset) => {
                const decryptedInstructions = decryptAssetInstructions(asset)
                
                return (
                  <div key={asset.id} className="border rounded-lg p-4">
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-900">{asset.asset_name}</h3>
                      <p className="text-sm text-gray-500">From: {asset.owner.email}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded p-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Access Instructions:</h4>
                      {decryptedInstructions ? (
                        <div className="bg-green-50 border border-green-200 rounded p-3">
                          <p className="text-green-800 whitespace-pre-wrap">{decryptedInstructions}</p>
                        </div>
                      ) : (
                        <div className="bg-red-50 border border-red-200 rounded p-3">
                          <p className="text-red-800">Unable to decrypt instructions. Missing encryption keys.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        )}
      </div>
    </div>
  )
}