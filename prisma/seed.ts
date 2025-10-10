import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding development database...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@mydigitallegacyvault.com' },
    update: {},
    create: {
      email: 'admin@mydigitallegacyvault.com',
      password: adminPassword,
      role: 'Admin',
      is_paid: true,
      is_kyc_verified: true,
      is_mfa_setup: true,
    },
  })

  // Create test owner
  const ownerPassword = await bcrypt.hash('owner123', 12)
  const owner = await prisma.user.upsert({
    where: { email: 'owner@test.com' },
    update: {},
    create: {
      email: 'owner@test.com',
      password: ownerPassword,
      role: 'Owner',
      is_paid: true,
      is_kyc_verified: true,
      is_mfa_setup: true,
    },
  })

  // Create test executor
  const executorPassword = await bcrypt.hash('executor123', 12)
  const executor = await prisma.user.upsert({
    where: { email: 'executor@test.com' },
    update: {},
    create: {
      email: 'executor@test.com',
      password: executorPassword,
      role: 'Executor',
      is_paid: false,
      is_kyc_verified: false,
      is_mfa_setup: true,
    },
  })

  console.log('✅ Admin user created:', { email: admin.email, role: admin.role })
  console.log('✅ Test owner created:', { email: owner.email, role: owner.role })
  console.log('✅ Test executor created:', { email: executor.email, role: executor.role })
  
  console.log('\n📝 Test Accounts:')
  console.log('Admin: admin@mydigitallegacyvault.com / admin123')
  console.log('Owner: owner@test.com / owner123')
  console.log('Executor: executor@test.com / executor123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })