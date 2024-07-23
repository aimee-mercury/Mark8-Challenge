import React from 'react';
import Link from 'next/link';
import { FaStar, FaUser, FaTwitter, FaWhatsapp, FaInstagram, FaFacebook, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Navi from '../component/Navigation';
import Image from 'next/image';

const Stores: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navi />

      <div className="bg-gray-300 py-16 text-center text-white mr-36 ml-32 mt-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-yellow-500">Mark8</span>
            <span className="text-white"> Stores</span>
          </h1>
          <p className="text-xl mb-4">932 Products</p>

          <div className="relative flex justify-center mt-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full max-w-md pl-10 pr-10 py-2 border border-gray-600 rounded-full bg-gray-300 text-gray-400 placeholder-gray-500"
            />
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {['All', 'Vectors', 'Icons', 'Backgrounds'].map((category) => (
              <button key={category} className="px-4 py-2 bg-gray-300 text-gray-700 border border-gray-600 rounded-full transition">
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Stores</h2>
          
        </div>

        {[1, 2].map((shop) => (
          <div key={shop} className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-20 h-20 bg-yellow-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Awesome Shop {shop}</h3>
                  <p className="text-gray-600">94 Products</p>
                </div>
              </div>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md flex items-center space-x-2">
                <FaUser className="mr-2" aria-label="View Profile" />
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
                  {['Fashion', 'Accessories'].map((category) => (
                    <button key={category} className="bg-gray-200 text-gray-800 px-2 py-1 rounded mb-2">
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2].map((product) => (
                  <Link key={product} href={`/detail`}>
                    <div className="bg-white p-4 rounded-lg shadow cursor-pointer  md:w-1/2 lg:w-1/2 flex flex-col ml-96">
                      <Image src="/bottle.jpeg" alt="Product" width={500} height={500} className=" object-cover mb-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Product Name {product}</h3>
                      <p className="text-gray-600">Home Accessories.</p>
                      <div className="text-yellow-500 text-lg font-bold mt-2">9000 Rwf</div>
                      <div className="flex justify-between mt-auto">
                        <button className="p-2 hover:bg-gray-200 ">
                         
                        </button>
                        <button className="p-2 hover:bg-gray-200 border">
                        <FaHeart className="text-yellow-500 "/>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-800">Reviews:</span>
              <div className="flex items-center ml-2">
                <FaStar className="text-yellow-500 mr-1" aria-label="Rating" />
                <span>4.8</span>
              </div>
              <span className="ml-2 text-gray-600">(36 Reviews)</span>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4 mt-6">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-yellow-500">Open</span>
            <span className="text-black"> your Store</span>
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
          <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-sm" />
          <p className="text-center">Mark8 ©2024. By Awesomity Ltd</p>
          <div className="flex space-x-4">
            <FaTwitter className="hover:text-blue-400 cursor-pointer" aria-label="Twitter" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" aria-label="WhatsApp" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" aria-label="Instagram" />
            <FaFacebook className="hover:text-blue-600 cursor-pointer" aria-label="Facebook" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Stores;
