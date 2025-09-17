import React from 'react'

const SubCategory = () => {
  const subCategories = [
    { name: 'Laptops', count: 150 },
    { name: 'Smartphones', count: 200 },
    { name: 'Tablets', count: 80 },
    { name: 'Accessories', count: 300 },
  ]

  return (
    <div className="flex-1 bg-white">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Electronics</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subCategories.map((subCategory) => (
            <div
              key={subCategory.name}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{subCategory.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{subCategory.count} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubCategory