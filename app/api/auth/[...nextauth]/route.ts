import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

// const prisma = new PrismaClient()

// Mock user data for development
const mockUsers = [
  {
    id: '1',
    email: 'owner@test.com',
    password: '$2a$10$mockhashedpassword',
    name: 'Test Owner',
    role: 'owner',
    is_paid: true,
    is_kyc_verified: true,
    is_mfa_setup: true
  },
  {
    id: '2',
    email: 'executor@test.com',
    password: '$2a$10$mockhashedpassword',
    name: 'Test Executor',
    role: 'executor',
    is_paid: false,
    is_kyc_verified: false,
    is_mfa_setup: false
  },
  {
    id: '3',
    email: 'admin@test.com',
    password: '$2a$10$mockhashedpassword',
    name: 'Test Admin',
    role: 'admin',
    is_paid: true,
    is_kyc_verified: true,
    is_mfa_setup: true
  }
]

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // For development - check predefined mock users first
        const mockUser = mockUsers.find(u => u.email === credentials.email)
        
        if (mockUser) {
          // Return predefined mock user
          return {
            id: mockUser.id,
            email: mockUser.email,
            name: mockUser.name,
            role: mockUser.role,
            is_paid: mockUser.is_paid,
            is_kyc_verified: mockUser.is_kyc_verified,
            is_mfa_setup: mockUser.is_mfa_setup,
          }
        }

        // For development - accept any other email/password combination
        // and create a dynamic user with default 'owner' role
        return {
          id: Math.random().toString(36).substr(2, 9),
          email: credentials.email,
          name: credentials.email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          role: 'owner', // Default role for new signups
          is_paid: false,
          is_kyc_verified: false,
          is_mfa_setup: false,
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.is_paid = user.is_paid
        token.is_kyc_verified = user.is_kyc_verified
        token.is_mfa_setup = user.is_mfa_setup
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role
        session.user.is_paid = token.is_paid
        session.user.is_kyc_verified = token.is_kyc_verified
        session.user.is_mfa_setup = token.is_mfa_setup
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
})

export { handler as GET, handler as POST }