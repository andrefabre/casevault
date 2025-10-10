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

        // For development - use mock users
        const user = mockUsers.find(u => u.email === credentials.email)

        if (!user) {
          return null
        }

        // For development - accept any password, in production this would use bcrypt
        // const isPasswordValid = await bcrypt.compare(
        //   credentials.password,
        //   user.password
        // )

        // if (!isPasswordValid) {
        //   return null
        // }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          is_paid: user.is_paid,
          is_kyc_verified: user.is_kyc_verified,
          is_mfa_setup: user.is_mfa_setup,
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