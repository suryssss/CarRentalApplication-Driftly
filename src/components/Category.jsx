import React from 'react';
import Data from '@/Shared/Data';

function Category() {
  return (
    <div className="px-4 md:px-10">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Data.Category && Data.Category.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img src={category.icon} width={40} height={40} alt={category.name} />
            <p className="mt-2 text-sm font-medium text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;