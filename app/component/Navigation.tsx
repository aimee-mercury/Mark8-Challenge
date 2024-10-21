"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaStore, FaShoppingCart, FaHeart, FaStoreAlt, FaSearch, FaUser } from 'react-icons/fa';
import CartPanel from './display/cart';
import ProfilePanel from './display/profile';
import SearchPanel from './display/searchp';
import { useCart } from '../component/hook/cart';
import Image from 'next/image';

const Navigation: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { cart } = useCart();

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
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-sm" />
            <div>
              <span className="text-gray-800 text-xl font-semibold">Mark8</span>
              <div className="text-gray-500 text-sm font-light">By Awesomity Lab</div>
            </div>
          </div>

          {/* Middle Links (Hidden on small screens) */}
          <div className="hidden lg:flex space-x-4 justify-center flex-grow">
            <Link href="/home" className="text-black flex items-center">
              <FaHome className="mr-1 hover:text-yellow-600" /> Home
            </Link>
            <Link href="/stores" className="text-black flex items-center">
              <FaStore className="mr-1 hover:text-yellow-600" /> Stores
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4 items-center">
            {/* Search Button */}
            <button onClick={toggleSearchPanel} className="text-black flex items-center">
              <FaSearch className="mr-1 text-gray-500 hover:text-yellow-600" />
            </button>
            {/* Cart Button */}
            <button onClick={toggleCartPanel} className="text-black flex items-center">
              <FaShoppingCart className="mr-1 text-black" />
              <span className="hidden md:inline">My Cart ({cart.length})</span>
            </button>
            {/* Saved Button */}
            <Link href="/saved" className="text-black flex items-center">
              <FaHeart className="mr-1 text-yellow-500 hover:text-yellow-200" /> Saved
            </Link>
            {/* Open Store Button */}
            <Link href="#hello" className="hidden sm:flex border border-black text-black items-center px-3 py-1">
              <FaStoreAlt className="mr-1 text-yellow-500" /> Open A Store
            </Link>
            {/* Profile Button */}
            <button onClick={toggleProfilePanel} className="text-black flex items-center">
              <FaUser className="mr-1 text-yellow-500" />
            </button>
          </div>
        </div>
      </nav>

      {/* Panels */}
      {isCartOpen && <CartPanel onClose={toggleCartPanel} />}
      {isProfileOpen && <ProfilePanel onClose={toggleProfilePanel} />}
      {isSearchOpen && <SearchPanel onClose={toggleSearchPanel} />}
    </div>
  );
};

export default Navigation;
