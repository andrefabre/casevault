// Edit asset (PUT)
export async function PUT(req: Request) {
  const data = await req.json()
  const { id, assetName, accessInstructions, accountDetails, assetType } = data
  try {
    const updated = await prisma.digitalAsset.update({
      where: { id },
      data: {
        asset_name: assetName,
        encrypted_instructions: accessInstructions,
        // Add other fields as needed
      }
    })
    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: 'Asset not found or update failed' }, { status: 404 })
  }
}

// Delete asset (DELETE)
export async function DELETE(req: Request) {
  const data = await req.json()
  const { id } = data
  try {
    await prisma.digitalAsset.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Asset not found or delete failed' }, { status: 404 })
  }
}

import { NextResponse } from 'next/server'
import prisma from './prisma'

export async function GET() {
  const assets = await prisma.digitalAsset.findMany({})
  return NextResponse.json(assets)
}

export async function POST(req: Request) {
  const data = await req.json()
  // TODO: Add encryption for instructions if needed
  const newAsset = await prisma.digitalAsset.create({
    data: {
      asset_name: data.assetName,
      owner_id: data.ownerId, // Make sure to pass ownerId from frontend
      encrypted_instructions: data.accessInstructions,
      // Add other fields as needed
    }
  })
  return NextResponse.json(newAsset)
}
