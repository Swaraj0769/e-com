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
    subcategories: ["Furniture", "Kitchenware", "Homieliances"]
  }
];

const Homie = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Search function that filters categories and subcategories
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter categories based on the search query
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery) ||
    category.subcategories.some(subcategory =>
      subcategory.toLowerCase().includes(searchQuery)
    )
  );

  // Handle click on the search bar to toggle the visibility of categories
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className=''>
      <input
        type="text"
        placeholder="Search categories and subcategories..."
        value={searchQuery}
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && (
        <div className='bg-blue-200'>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div key={index}>
                <h3>{category.name}</h3>
                <ul>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>{subcategory}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No categories or subcategories found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Homie;
