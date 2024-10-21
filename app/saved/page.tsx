"use client";

import React from 'react';
import { FaTwitter, FaWhatsapp, FaInstagram, FaFacebook, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FavoritesProvider, useFavorites } from '../component/favorite';
import Navbar from '../component/Navigation';
import Image from 'next/image';

const RecentProducts: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();

  const products = [
    { id: 1, name: "Product 1", price: 9000, originalPrice: 12000, imageUrl: "/ludo.jpeg" },
    { id: 2, name: "Product 2", price: 9000, originalPrice: 12000, imageUrl: "/acc.jpeg" },
    { id: 3, name: "Product 3", price: 9000, originalPrice: 12000, imageUrl: "/bottle.jpeg" },
    { id: 4, name: "Product 4", price: 9000, originalPrice: 12000, imageUrl: "/rice.jpeg" },
    { id: 5, name: "Product 5", price: 9000, originalPrice: 12000, imageUrl: "/spice.jpeg" },
    { id: 6, name: "Product 6", price: 9000, originalPrice: 12000, imageUrl: "/sup.jpeg" },
  ];

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-6">
        <section className="py-8 w-full">
          {/* Responsive grid for product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <p className="font-medium">{product.name}</p>
                <div className="flex items-center mt-2">
                  <p className="text-yellow-500 font-semibold">{product.price} RWF</p>
                  <p className="text-gray-500 line-through ml-2 text-sm font-thin">{product.originalPrice} RWF</p>
                  <div className="ml-auto flex">
                    <button className="p-2 hover:bg-gray-200">
                      <FaShoppingCart className="text-gray-500 hover:text-green-500" />
                    </button>
                    <button onClick={() => toggleFavorite(product.id)} className="p-2 hover:bg-gray-200">
                      <FaHeart className="text-yellow-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const Saved: React.FC = () => (
  <FavoritesProvider>
    <Navbar />

    {/* Responsive container for saved products heading */}
    <div id="hello" className="mt-8 bg-gray-200 rounded p-4 text-center">
      <h2 className='text-2xl font-bold'>Saved products</h2>
      <span>6 saved</span>
    </div>
    
    <main className="container mx-auto p-4">
      {/* Responsive layout for recent products */}
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8">
        <RecentProducts />
      </div>
      
      {/* Responsive search section */}
      <section id="hello" className="mt-8 bg-gray-200 rounded p-4">
        <div className="text-center mb-4"></div>
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4">
          <h2 className='text-2xl font-bold mb-2'>
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
      </section>
    </main>
    
    {/* Responsive footer */}
    <footer className="bg-gray-300 text-black py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-sm" />
        <p className="text-center">Mark8 ©2024. By Awesomity Ltd</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaFacebook className="hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </footer>
  </FavoritesProvider>
);

export default Saved;
