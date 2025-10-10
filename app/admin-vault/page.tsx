'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  role: string
  is_paid: boolean
  is_kyc_verified: boolean
  is_mfa_setup: boolean
  created_at: string
}

interface VerificationDoc {
  id: string
  type: string
  file_attachment: string
  status: string
  created_at: string
  uploaded_by: {
    id: string
    email: string
  }
}

export default function AdminVaultPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const [users, setUsers] = useState<User[]>([])
  const [verificationDocs, setVerificationDocs] = useState<VerificationDoc[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }

    const user = session.user as any
    
    if (user.role !== 'Admin') {
      router.push('/')
      return
    }
    
    loadData()
  }, [session, status, router])

  const loadData = async () => {
    try {
      setLoading(true)
      
      // Load all users
      const usersResponse = await fetch('/api/admin/users')
      const usersData = await usersResponse.json()
      
      if (usersResponse.ok) {
        setUsers(usersData.users || [])
      }
      
      // Load pending verification documents
      const docsResponse = await fetch('/api/admin/verification-docs')
      const docsData = await docsResponse.json()
      
      if (docsResponse.ok) {
        setVerificationDocs(docsData.documents || [])
      }
      
    } catch (error) {
      setError('Failed to load admin data')
    } finally {
      setLoading(false)
    }
  }

  const updateUserStatus = async (userId: string, field: string, value: boolean) => {
    setProcessing(userId)
    setError('')

    try {
      const response = await fetch('/api/admin/update-user-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          field,
          value,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Failed to update user status')
        setProcessing(null)
        return
      }

      // Reload data
      loadData()

    } catch (error) {
      setError('Failed to update user status')
    } finally {
      setProcessing(null)
    }
  }

  const approveVerificationAndReleaseK2 = async (docId: string, executorId: string) => {
    setProcessing(docId)
    setError('')

    try {
      const response = await fetch('/api/admin/approve-verification-release-k2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          docId,
          executorId,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Failed to approve verification and release K2')
        setProcessing(null)
        return
      }

      // Reload data
      loadData()

    } catch (error) {
      setError('Failed to approve verification and release K2')
    } finally {
      setProcessing(null)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Vault</h1>
        <p className="text-gray-600">
          Manage user accounts, KYC verification, and document approvals
        </p>
        
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
      </div>

      {/* Verification Documents Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Pending Verification Documents
        </h2>
        
        <div className="space-y-4">
          {verificationDocs.filter(doc => doc.status === 'Pending').length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No pending verification documents.</p>
            </div>
          ) : (
            verificationDocs
              .filter(doc => doc.status === 'Pending')
              .map((doc) => (
                <div key={doc.id} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {doc.type.replace('_', ' ')}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Uploaded by: {doc.uploaded_by.email}
                      </p>
                      <p className="text-sm text-gray-500">
                        Uploaded on {new Date(doc.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {doc.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">File:</p>
                    <a
                      href={`/api/files/${doc.file_attachment}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 text-sm"
                    >
                      View Document →
                    </a>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-4">
                    <h4 className="text-sm font-medium text-yellow-800 mb-2">
                      CRITICAL: Approve Verification & Release K2
                    </h4>
                    <p className="text-yellow-700 text-sm">
                      This action will:
                      <br />• Set VerificationDoc Status to 'Approved'
                      <br />• Set Executor's release_key_K2_available = true
                      <br />• Generate and assign KeyComponentK2 to the Executor
                    </p>
                  </div>
                  
                  <button
                    onClick={() => approveVerificationAndReleaseK2(doc.id, doc.uploaded_by.id)}
                    disabled={processing === doc.id}
                    className="btn-success"
                  >
                    {processing === doc.id ? 'Processing...' : 'Approve Verification & Release K2'}
                  </button>
                </div>
              ))
          )}
        </div>
      </div>

      {/* User Management Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          User Management (MVP Simulation)
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  KYC Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MFA Setup
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user.email}</div>
                      <div className="text-sm text-gray-500">ID: {user.id.substring(0, 8)}...</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                      user.role === 'Executor' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.is_paid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.is_paid ? 'Paid' : 'Unpaid'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.is_kyc_verified ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.is_kyc_verified ? 'Verified' : 'Unverified'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.is_mfa_setup ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.is_mfa_setup ? 'Setup' : 'Not Setup'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    {user.role === 'Owner' && (
                      <>
                        <button
                          onClick={() => updateUserStatus(user.id, 'is_paid', !user.is_paid)}
                          disabled={processing === user.id}
                          className={`text-xs px-2 py-1 rounded ${
                            user.is_paid ? 'bg-red-100 text-red-800 hover:bg-red-200' : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}
                        >
                          {user.is_paid ? 'Unpay' : 'Pay'}
                        </button>
                        <button
                          onClick={() => updateUserStatus(user.id, 'is_kyc_verified', !user.is_kyc_verified)}
                          disabled={processing === user.id}
                          className={`text-xs px-2 py-1 rounded ${
                            user.is_kyc_verified ? 'bg-red-100 text-red-800 hover:bg-red-200' : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}
                        >
                          {user.is_kyc_verified ? 'Unverify' : 'Verify'}
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-primary-600">{users.length}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Owners</h3>
          <p className="text-3xl font-bold text-green-600">
            {users.filter(u => u.role === 'Owner').length}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Executors</h3>
          <p className="text-3xl font-bold text-blue-600">
            {users.filter(u => u.role === 'Executor').length}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Pending Docs</h3>
          <p className="text-3xl font-bold text-yellow-600">
            {verificationDocs.filter(d => d.status === 'Pending').length}
          </p>
        </div>
      </div>
    </div>
  )
}