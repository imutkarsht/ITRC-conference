import React, { useState } from 'react';
import topics from './topics';

const ConferenceInfo = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };
  
    const category = topics.find((t) => t.category === selectedCategory);
  
    return (
      <div className="container mx-auto px-4 py-8 bg-black text-white">
        
        <div className="bg-gray-900 shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block mb-2 font-bold text-orange-500" htmlFor="category">Select Category</label>
            <select
              id="category"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="">-- Select Category --</option>
              {topics.map((topic) => (
                <option key={topic.category} value={topic.category}>
                  {topic.category}
                </option>
              ))}
            </select>
          </div>
  
          {selectedCategory && category && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Topics in {selectedCategory}</h3>
              <ul className="list-disc pl-5">
                {category.items.map((item) => (
                  <li key={item} className="text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ConferenceInfo;