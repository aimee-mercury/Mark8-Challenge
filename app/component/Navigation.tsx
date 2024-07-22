// component/Navigation.tsx

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaStore, FaShoppingCart, FaHeart, FaStoreAlt, FaSearch, FaUser } from 'react-icons/fa';
import CartPanel from './display/cart';
import ProfilePanel from './display/profile';
import SearchPanel from './display/searchp';

const Navigation: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleCartPanel = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleProfilePanel = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleSearchPanel = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-sm" />
            <div>
              <span className="text-gray-800 text-xl font-semibold">Mark8</span>
              <div className="text-gray-500 text-sm font-light">By Awesomity Lab</div>
            </div>
          </div>
          <div className="flex space-x-4 justify-center flex-grow">
            <Link href="/" className="text-black flex items-center">
              <FaHome className="mr-1" /> Home
            </Link>
            <Link href="/" className="text-black flex items-center">
              <FaStore className="mr-1" /> Stores
            </Link>
          </div>
          <div className="flex space-x-4">
            <button onClick={toggleSearchPanel} className="text-black flex items-center">
              <FaSearch className="mr-1" />
            </button>
            <button onClick={toggleCartPanel} className="text-black flex items-center">
              <FaShoppingCart className="mr-1" /> My Cart
            </button>
            <Link href="/store" className="text-black flex items-center">
              <FaHeart className="mr-1" /> Saved
            </Link>
            <Link href="#hello" className="border border-black text-black flex items-center px-3 py-1">
              <FaStoreAlt className="mr-1 text-yellow-500" /> Open A Store
            </Link>
            <button onClick={toggleProfilePanel} className="text-black flex items-center border">
              <FaUser />
            </button>
          </div>
        </div>
      </nav>
      {isCartOpen && <CartPanel onClose={toggleCartPanel} />}
      {isProfileOpen && <ProfilePanel onClose={toggleProfilePanel} />}
      {isSearchOpen && <SearchPanel onClose={toggleSearchPanel} />}
    </div>
  );
};

export default Navigation;
