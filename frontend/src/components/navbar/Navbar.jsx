import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">E-Commerce</h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <input
                  type="search"
                  className="rounded-lg border border-gray-300 px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar