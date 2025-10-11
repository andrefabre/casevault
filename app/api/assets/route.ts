import { NextResponse } from 'next/server'

let assets: any[] = [
  { id: '1', name: 'Bitcoin Wallet', type: 'cryptocurrency', instructions: 'Recovery phrase in safe deposit box', category: 'cryptocurrency' },
  { id: '2', name: 'Gmail Account', type: 'email', instructions: 'Recovery email: backup@email.com', category: 'email' },
  { id: '3', name: 'Dropbox', type: 'cloud_storage', instructions: '2FA app on phone', category: 'cloud_storage' },
]

export async function GET() {
  return NextResponse.json(assets)
}

export async function POST(req: Request) {
  const data = await req.json()
  const newAsset = {
    id: String(Date.now()),
    name: data.assetName,
    type: data.assetType,
    instructions: data.accessInstructions,
    category: data.assetType,
    accountDetails: data.accountDetails,
    documentFile: data.documentFile || null,
  }
  assets.push(newAsset)
  return NextResponse.json(newAsset)
}
