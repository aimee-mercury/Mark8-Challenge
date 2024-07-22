"use client";

import React from 'react';
import { FaStar, FaUser, FaTwitter, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import Navigation from '../component/Navigation';
import HeroSection from '../component/hero';

const Stores: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      <HeroSection />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Stores</h2>
          <input
            type="text"
            placeholder="Search Store"
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {[1, 2].map((shop, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Awesome Shop {shop}</h3>
                <p className="text-gray-600">94 Products</p>
              </div>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md flex items-center space-x-2">
                <FaUser className="mr-2" />
                <span>View Profile</span>
              </button>
            </div>
            <hr className="mb-4" />
            <div className="mb-6">
              <span className="font-semibold text-gray-800">About:</span>
              <p className="text-gray-600 mb-2">
                A cozy boutique offering a curated selection of unique, high-quality clothing and accessories for fashion-minded individuals.
              </p>
            </div>
            <div className="mb-6">
              <div className="mb-4">
                <span className="font-semibold text-gray-800">Categories:</span>
                <div className="flex flex-wrap mt-2 space-x-2">
                  <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded mb-2">Fashion</button>
                  <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded mb-2">Accessories</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example of product cards */}
                {[1, 2].map((product, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mb-2"></div>
                    <h3 className="text-lg font-semibold text-gray-800">Product Name {product}</h3>
                    <p className="text-gray-600">Short description of the product.</p>
                    <button className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded-md">View Product</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center mb-6">
              <span className="font-semibold text-gray-800">Reviews:</span>
              <div className="flex items-center ml-2">
                <FaStar className="text-yellow-500 mr-1" />
                <span>4.8</span>
              </div>
              <span className="ml-2 text-gray-600">(36 Reviews)</span>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4 mt-6">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-yellow-500">Open </span>
            <span className="text-black">your Store</span>
          </h2>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded mb-4 md:mb-0 md:flex-grow"
          />
          <button className="px-6 py-3 bg-yellow-500 text-black rounded transition">
            Submit
          </button>
        </div>
      </main>
      <footer className="bg-gray-300 text-black py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-sm" />
          <p className="text-center">Mark8 ©2024. By Awesomity Ltd</p>
          <div className="flex space-x-4">
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Stores;
