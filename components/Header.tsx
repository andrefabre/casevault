import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">MyDigitalLegacy Vault</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            <Link href="/owner-vault" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
            <Link href="/my-executors" className="text-gray-700 hover:text-gray-900">My Executors</Link>
            <Link href="/my-assets" className="text-blue-600 font-medium">My Assets</Link>
            <Link href="/admin-panel" className="text-gray-700 hover:text-gray-900">Admin Panel</Link>
            <Link href="/executor-access" className="text-gray-700 hover:text-gray-900">Executor Access</Link>
            <Link href="/" className="text-gray-700 hover:text-gray-900">About</Link>
            <button className="text-gray-700 hover:text-gray-900" aria-label="Log out">Log Out</button>
          </nav>
        </div>
      </div>
    </div>
  );
}
