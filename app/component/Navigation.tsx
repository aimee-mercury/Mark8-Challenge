"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaStore, FaShoppingCart, FaHeart, FaStoreAlt, FaSearch, FaUser } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { useCart } from '../component/hook/cart';
import Image from 'next/image';

// Dynamically importing panels to improve load performance
const CartPanel = dynamic(() => import('./display/cart'), { ssr: false });
const ProfilePanel = dynamic(() => import('./display/profile'), { ssr: false });
const SearchPanel = dynamic(() => import('./display/searchp'), { ssr: false });

const Navigation: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { cart } = useCart(); // Using the cart hook

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
            <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-sm" />
            <div>
              <span className="text-gray-800 text-xl font-semibold">Mark8</span>
              <div className="text-gray-500 text-sm font-light">By Awesomity Lab</div>
            </div>
          </div>
          <div className="flex space-x-4 justify-center flex-grow">
            <Link href="/home" legacyBehavior>
              <a className="text-black flex items-center">
                <FaHome className="mr-1 hover:text-yellow-600" /> Home
              </a>
            </Link>
            <Link href="/stores" legacyBehavior>
              <a className="text-black flex items-center">
                <FaStore className="mr-1 hover:text-yellow-600" /> Stores
              </a>
            </Link>
          </div>
         
            <button onClick={toggleSearchPanel} className="text-black flex items-center">
              <FaSearch className="mr-1 text-gray-500 hover:text-yellow-600" />
            </button>
            <button onClick={toggleCartPanel} className="text-black flex items-center">
              <FaShoppingCart className="mr-1 text-black" />
              My Cart ({cart.length})
            </button>
            <Link href="/saved" legacyBehavior>
              <a className="text-black flex items-center">
                <FaHeart className="mr-1 text-yellow-500 hover:text-yellow-200" /> Saved
              </a>
            </Link>
            
            <div className="flex space-x-4">
            <Link href="#hello" legacyBehavior>
              <a className="border border-black text-black flex items-center px-3 py-1">
                <FaStoreAlt className="mr-1 text-yellow-500" /> Open A Store
              </a>
            </Link>
            <button onClick={toggleProfilePanel} className="text-black flex items-center ml-16">
              <FaUser className="mr-1 text-yellow-500" />
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
