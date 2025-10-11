"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const assetTypes = [
  { value: "cryptocurrency", label: "Cryptocurrency Wallet" },
  { value: "social_media", label: "Social Media Account" },
  { value: "email", label: "Email Account" },
  { value: "cloud_storage", label: "Cloud Storage" },
  { value: "financial", label: "Financial Account" },
  { value: "digital_media", label: "Digital Media" },
  { value: "domain", label: "Domain & Hosting" },
  { value: "subscription", label: "Subscription Service" },
  { value: "other", label: "Other Digital Asset" },
];

export default function MyAssetsPage() {

  const { data: session, status } = useSession();
  const router = useRouter();
  const [assets, setAssets] = useState<any[]>([]);
  const [showDeleteId, setShowDeleteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch assets from API
  useEffect(() => {
    async function fetchAssets() {
      setLoading(true);
      const res = await fetch('/api/assets');
      if (res.ok) {
        const data = await res.json();
        setAssets(data);
      }
      setLoading(false);
    }
    fetchAssets();
  }, []);

  // Metrics: count assets per category
  const metrics = assetTypes.map((type) => ({
    ...type,
    count: assets.filter((a) => a.category === type.value).length,
  }));

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/auth/signin");
      return;
    }
    const hasCompletedOnboarding = session.user?.is_paid && session.user?.is_kyc_verified && session.user?.is_mfa_setup;
    if (!hasCompletedOnboarding) {
      router.push("/owner-vault?locked=assets");
      return;
    }
  }, [session, status, router]);

  // Delete asset handler (mock, local only)
  const handleDelete = async (id: string) => {
    // For demo, just remove locally
    setAssets((prev) => prev.filter((a) => a.id !== id));
    setShowDeleteId(null);
  };

  // Edit asset handler (mock)
  const handleEdit = (id: string) => {
    alert("Edit asset " + id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">MyDigitalLegacy Vault</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/owner-vault" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link href="/my-executors" className="text-gray-700 hover:text-gray-900">My Executors</Link>
              <Link href="/my-assets" className="text-blue-600 font-medium">My Assets</Link>
              <Link href="/admin-panel" className="text-gray-700 hover:text-gray-900">Admin Panel</Link>
              <Link href="/executor-access" className="text-gray-700 hover:text-gray-900">Executor Access</Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900">About</Link>
              <button className="text-gray-700 hover:text-gray-900">Log Out</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/owner-vault" className="text-gray-500 hover:text-gray-700">Dashboard</Link>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 font-medium">My Assets</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Metrics */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Asset Metrics</h2>
              <div className="space-y-4">
                {metrics.map((m) => (
                  <div key={m.value} className="flex items-center justify-between">
                    <span className="text-gray-700">{m.label}</span>
                    <span className="font-bold text-blue-600">{m.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Asset Cards */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">My Digital Assets</h1>
              <Link href="/add-asset" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Add Asset</Link>
            </div>
            {assets.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p>No assets registered yet</p>
                <p className="text-sm">Click "Add Asset" to secure your first digital asset</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {assets.map((asset) => (
                  <div key={asset.id} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{asset.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">Type: <span className="font-medium text-blue-700">{asset.type}</span></p>
                      <p className="text-sm text-gray-600 mb-2">Instructions: {asset.instructions}</p>
                    </div>
                    <div className="flex items-center justify-end space-x-2 mt-4">
                      <button
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 text-sm font-medium"
                        onClick={() => handleEdit(asset.id)}
                      >Edit</button>
                      <button
                        className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200 text-sm font-medium"
                        onClick={() => setShowDeleteId(asset.id)}
                      >Delete</button>
                    </div>
                    {showDeleteId === asset.id && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                        <p className="text-sm text-red-700 mb-2">Are you sure you want to delete this asset?</p>
                        <div className="flex space-x-2">
                          <button className="px-4 py-1 bg-red-600 text-white rounded" onClick={() => handleDelete(asset.id)}>Delete</button>
                          <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded" onClick={() => setShowDeleteId(null)}>Cancel</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Secure your digital legacy with enterprise-grade encryption
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All asset instructions are protected by our K1+K2 two-key system
          </p>
        </div>
      </footer>
    </div>
  );
}
