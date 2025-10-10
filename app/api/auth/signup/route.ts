import { NextRequest, NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

// const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if user already exists (mock implementation)
    // const existingUser = await prisma.user.findUnique({
    //   where: { email }
    // })

    // For development - always allow signup
    // if (existingUser) {
    //   return NextResponse.json(
    //     { message: 'User already exists with this email' },
    //     { status: 400 }
    //   )
    // }

    // Hash password (mock implementation)
    const hashedPassword = await bcrypt.hash(password, 12)

    // Mock user creation
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      password: hashedPassword,
      role: 'owner',
      is_paid: false,
      is_kyc_verified: false,
      is_mfa_setup: false,
      created_at: new Date(),
      updated_at: new Date()
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      message: 'User created successfully',
      user: userWithoutPassword
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}