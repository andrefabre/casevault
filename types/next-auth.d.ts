import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    role: string
    is_paid: boolean
    is_kyc_verified: boolean
    is_mfa_setup: boolean
  }

  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: string
      is_paid: boolean
      is_kyc_verified: boolean
      is_mfa_setup: boolean
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string
    is_paid: boolean
    is_kyc_verified: boolean
    is_mfa_setup: boolean
  }
}