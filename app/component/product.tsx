"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaStore, FaMicrophone, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import { useFavorites } from '../component/favorite';
import { useCart } from '../component/hook/cart';

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  quantity: number;
};

const MainPage: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { cart, toggleCartItem } = useCart();
  const router = useRouter();

  const products: Product[] = [
    { id: 1, name: "Product 1", price: 9000, originalPrice: 12000, imageUrl: "/ludo.jpeg", quantity: 1 },
    { id: 2, name: "Product 2", price: 9000, originalPrice: 12000, imageUrl: "/acc.jpeg", quantity: 1 },
    { id: 3, name: "Product 3", price: 9000, originalPrice: 12000, imageUrl: "/bottle.jpeg", quantity: 1 },
    { id: 4, name: "Product 4", price: 9000, originalPrice: 12000, imageUrl: "/rice.jpeg", quantity: 1 },
    { id: 5, name: "Product 5", price: 9000, originalPrice: 12000, imageUrl: "/spice.jpeg", quantity: 1 },
    { id: 6, name: "Product 6", price: 9000, originalPrice: 12000, imageUrl: "/sup.jpeg", quantity: 1 },
  ];

  const stores = [
    "Awesome Shop 1",
    "Awesome Shop 2",
    "Awesome Shop 3",
    "Awesome Shop 4",
    "Awesome Shop 5",
    "Awesome Shop 6",
    "Awesome Shop 7",
    "Awesome Shop 8",
    "Awesome Shop 9",
  ];

  const handleProductClick = (id: number) => {
    router.push(`/detail`);
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-6 flex flex-wrap space-y-24">
        <section className="py-8 w-full md:w-2/3 mb-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Recent Products (100)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <div
                key={product.id}
                className="border p-4 rounded relative cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <p className="font-medium">{product.name}</p>
                <div className="flex items-center mt-2">
                  <p className="text-yellow-500 font-semibold">{product.price} RWF</p>
                  <p className="text-gray-500 line-through ml-2 text-sm font-thin">{product.originalPrice} RWF</p>
                  <div className="ml-auto flex">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
                      className="p-2 hover:bg-gray-200"
                    >
                      <FaHeart className={favorites.includes(product.id) ? "text-yellow-500" : "text-gray-500"} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleCartItem(product); }}
                      className="p-2 hover:bg-gray-200"
                    >
                      <FaShoppingCart className={cart.some(item => item.id === product.id) ? "text-green-500" : "text-gray-500"} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-8 w-full md:w-1/3 bg-white rounded shadow-md mt-28">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-semibold flex items-center">
              <FaStore className="mr-2 text-yellow-500" />
              Top 10 Stores
            </h2>
            <button className="text-gray-500">
              <FaSearch />
            </button>
          </div>
          <div className="px-4 mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search a store"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-full"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <FaMicrophone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="mt-4 space-y-2">
              {stores.map((store, index) => (
                <div key={index} className="flex items-center p-2 rounded shadow-sm">
                  <div className="bg-yellow-600 h-10 w-8 rounded flex-shrink-0"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{store}</p>
                    <p className="text-xs text-gray-500">154 Products</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
