"use client";

import React from 'react';
import { FaTwitter, FaWhatsapp, FaInstagram, FaFacebook, FaHeart, FaShoppingCart, FaPhone } from 'react-icons/fa';
import { FavoritesProvider, useFavorites } from '../component/favorite';
import Navbar from '../component/Navigation';

const RecentProducts: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();

  const featuredProduct = {
    id: 1,
    name: "Product 1",
    price: 9000,
    originalPrice: 12000,
    imageUrl: "/ludo.jpeg",
    description: "This is a great product.",
    reviews: 4.5,
  };

  const otherProducts = [
    { id: 2, name: "Product 2", price: 9000, originalPrice: 12000, imageUrl: "/acc.jpeg" },
    { id: 3, name: "Product 3", price: 9000, originalPrice: 12000, imageUrl: "/bottle.jpeg" },
    { id: 6, name: "Product 6", price: 9000, originalPrice: 12000, imageUrl: "/sup.jpeg" },
  ];

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-6">
        <section className="py-8 w-full">
          <div className="border p-4 rounded relative flex flex-col md:flex-row">
            <img src={featuredProduct.imageUrl} alt={featuredProduct.name} className="w-full md:w-1/2 h-48 object-cover rounded mb-2" />
            <div className="md:ml-4 flex flex-col justify-between">
              <button onClick={() => toggleFavorite(featuredProduct.id)} className="absolute top-2 right-2 p-2 hover:bg-gray-200">
                <FaHeart className="text-yellow-500" />
              </button>
              <h2 className="text-2xl font-bold mb-2">{featuredProduct.name}</h2>
              <p className="text-yellow-500 font-semibold">{featuredProduct.price} RWF</p>
              <p className="text-gray-500 line-through text-sm font-thin">{featuredProduct.originalPrice} RWF</p>
              <p className="mt-2">{featuredProduct.description}</p>
              <div className="mt-2 flex items-center">
                <div className="flex items-center mr-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaHeart key={index} className={index < featuredProduct.reviews ? 'text-yellow-500' : 'text-gray-300'} />
                  ))}
                </div>
                <span>{featuredProduct.reviews} stars</span>
              </div>
              <div className="flex items-center mt-2">
                <button className="px-3 py-1 bg-white border text-black rounded transition">
                  -
                </button>
                <span className="mx-2 m-10">2</span>
                <button className="px-3 py-1 bg-white border text-black rounded transition">
                  +
                </button>
                <button className=" px-6 py-3 ml-80 bg-yellow-500 text-black rounded transition">
                  Add to Cart
                
                </button>
               
              </div>
            </div>
          </div>

          <h2 className='mt-10'>you might also like : </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
            {otherProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded mb-2" />
                <p className="font-medium">{product.name}</p>
                <div className="flex items-center mt-2">
                  <p className="text-yellow-500 font-semibold">{product.price} RWF</p>
                  <p className="text-gray-500 line-through ml-2 text-sm font-thin">{product.originalPrice} RWF</p>
                  <div className="ml-auto flex">
                    <button onClick={() => toggleFavorite(product.id)} className="p-2 hover:bg-gray-200">
                      <FaHeart className="text-yellow-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-200">
                      <FaShoppingCart className="text-gray-500 hover:text-green-500" />
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

const Details: React.FC = () => (
  <FavoritesProvider>
  
    <Navbar />
    
    <main className="container mx-auto p-4">
      <RecentProducts />
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
  </FavoritesProvider>
);

export default Details;
