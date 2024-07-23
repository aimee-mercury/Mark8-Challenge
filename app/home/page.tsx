"use client";

import React from 'react';
import { FavoritesProvider } from '../component/favorite';
import RecentProducts from '../component/product';
import Navbar from '../component/Navigation';
import HeroSection from '../component/hero';
import Image from 'next/image';

import { FaTwitter, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Home: React.FC = () => (
  <FavoritesProvider>
    <Navbar />
    <main className="container mx-auto p-4">
      <HeroSection />
      <div className="flex flex-col md:flex-row md:space-x-4 mt-8">
        <RecentProducts />
      </div>
      <div className="text-center mt-8">
        <button className="px-3 py-3 bg-white text-gray-800 rounded border border-gray-300 transition">
          Load More
        </button>
      </div>
      <section id="hello" className="mt-8 bg-gray-200 rounded p-4">
        <div className="text-center mb-4"></div>
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4">
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
      </section>
    </main>
    <footer className="bg-gray-300 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-sm" />
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

export default Home;
