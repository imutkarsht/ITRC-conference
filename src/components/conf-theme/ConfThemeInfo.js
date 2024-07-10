import React, { useState } from 'react';
import topics from './topics';

const ConferenceInfo = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };
  
    const category = topics.find((t) => t.category === selectedCategory);
  
    return (
      <div className="container mx-auto px-4 py-8 dark:bg-slate-900 bg-slate-100 text-black dark:text-white">
        
        <div className="dark:bg-slate-800 bg-slate-200 shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block mb-2 font-bold text-orange-500" htmlFor="category">Select Category</label>
            <select
              id="category"
              className="w-full px-3 py-2 dark:bg-slate-600 bg-white border border-gray-400 dark:border-gray-700 rounded dark:text-white text-black"
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