import React, { useState } from 'react';

const categories = [
  {
    name: "Electronics",
    subcategories: ["Mobile Phones", "Laptops", "Headphones"]
  },
  {
    name: "Fashion",
    subcategories: ["Men's Clothing", "Women's Clothing", "Footwear"]
  },
  {
    name: "Home & Kitchen",
    subcategories: ["Furniture", "Kitchenware", "Categoryliances"]
  }
];

const Category = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery) ||
    category.subcategories.some(subcategory =>
      subcategory.toLowerCase().includes(searchQuery)
    )
  );

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navbar */}
      <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
        <h1>Navbar</h1>
      </div>

      {/* Main Container */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Sidebar: Categories */}
        <div style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={handleSearch}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
          />
          {isFocused && (
            <div>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                  <div key={index}>
                    <button
                      style={{ width: '100%', padding: '10px', marginBottom: '10px', textAlign: 'left' }}
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      {category.name}
                    </button>
                    {selectedCategory === category.name && (
                      <ul style={{ paddingLeft: '20px' }}>
                        {category.subcategories.map((subcategory, subIndex) => (
                          <li key={subIndex} style={{ padding: '5px 0' }}>
                            {subcategory}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <p>No categories or subcategories found.</p>
              )}
            </div>
          )}
        </div>

        {/* Right: Subcategory Area */}
        <div style={{ flex: 1, padding: '20px' }}>
          {selectedCategory ? (
            <h3>Subcategories for {selectedCategory}</h3>
          ) : (
            <p>Select a category to see subcategories.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
