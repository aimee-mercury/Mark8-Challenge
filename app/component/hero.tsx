import React from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12 md:py-16 text-center text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-white">Welcome to </span>
          <span className="text-yellow-500">Mark8</span>
        </h1>
        <p className="text-lg md:text-xl mb-4">12,932 Products</p>

        {/* Search Input */}
        <div className="relative flex justify-center mt-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full max-w-sm md:max-w-md pl-10 pr-10 py-2 border border-gray-500 rounded-full bg-gray-800 text-gray-400 placeholder-gray-500"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mt-6 space-x-2">
          <button className="px-3 py-2 bg-gray-800 text-gray-400 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition">
            All
          </button>
          <button className="px-3 py-2 bg-gray-800 text-gray-400 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition">
            Vectors
          </button>
          <button className="px-3 py-2 bg-gray-800 text-gray-400 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition">
            Icons
          </button>
          <button className="px-3 py-2 bg-gray-800 text-gray-400 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition">
            Backgrounds
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
