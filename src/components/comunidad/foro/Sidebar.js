import React from 'react';

const categories = ['planning', 'legal', 'settling', 'jobs'];

const Sidebar = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="w-1/4 bg-gray-800 text-white flex flex-col overflow-y-auto">
            <div className="p-4 font-bold text-lg">Categories</div>
            {categories.map((category) => (
                <div
                    key={category}
                    className={`p-4 cursor-pointer ${activeCategory === category ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
