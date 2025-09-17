import React from 'react'

const Category = () => {
  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Sports',
    'Toys',
  ]

  return (
    <div className="w-64 bg-gray-50 border-r pl-2 border-gray-200">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
      </div>
      <nav className="mt-4">
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category}>
              <button
                className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Category