'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const { data: session, status } = useSession()
  const pathname = usePathname()

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  if (status === 'loading') {
    return (
      <nav className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-primary-600">
              MyDigitalLegacy Vault
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary-600">
            MyDigitalLegacy Vault
          </Link>

          <div className="flex items-center space-x-4">
              <Link 
                href="/how-it-works" 
                className={`text-sm hover:text-primary-600 ${pathname === '/how-it-works' ? 'text-primary-600 font-medium' : ''}`}
              >
                How it works
              </Link>
            {session ? (
              <>
                <span className="text-sm text-gray-600">
                  Welcome, {session.user?.email}
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {(session.user as any)?.role || 'Owner'}
                </span>
                
                {/* Role-based navigation */}
                {(session.user as any)?.role === 'Owner' && (
                  <Link 
                    href="/owner-vault" 
                    className={`text-sm hover:text-primary-600 ${
                      pathname === '/owner-vault' ? 'text-primary-600 font-medium' : ''
                    }`}
                  >
                    Owner Vault
                  </Link>
                )}
                
                {(session.user as any)?.role === 'Executor' && (
                  <Link 
                    href="/executor-vault" 
                    className={`text-sm hover:text-primary-600 ${
                      pathname === '/executor-vault' ? 'text-primary-600 font-medium' : ''
                    }`}
                  >
                    Executor Vault
                  </Link>
                )}
                
                {(session.user as any)?.role === 'Admin' && (
                  <Link 
                    href="/admin-vault" 
                    className={`text-sm hover:text-primary-600 ${
                      pathname === '/admin-vault' ? 'text-primary-600 font-medium' : ''
                    }`}
                  >
                    Admin Vault
                  </Link>
                )}
                
                <button
                  onClick={handleSignOut}
                  className="text-sm text-gray-600 hover:text-red-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="space-x-2">
                <Link href="/auth/signin" className="btn-primary text-sm">
                  Sign In
                </Link>
                <Link href="/auth/signup" className="btn-secondary text-sm">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}