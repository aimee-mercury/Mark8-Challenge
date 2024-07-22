// components/CartPanel.tsx

import React from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

interface CartPanelProps {
  onClose: () => void;
}

const CartPanel: React.FC<CartPanelProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-90 bg-white h-auto p-4 overflow-y-auto mt-20 mb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">My Cart (2)</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-800" />
          </button>
        </div>
        <div className='bg-gray-300'> <p className="text-gray-700 mb-4 p-5">By proceeding you won't be charged yet</p></div>
       
        <div className="mb-6 ">
          <div className="flex items-center justify-between mb-4 border border-gray-300 p-5">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">1</span>
              <img src="/ludo.jpeg" alt="Product 1" className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Product 1</h3>
                <p className="text-gray-600">9,000 Rwf</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-gray-600 border border-gray-300 rounded-full p-1">
                <FaMinus />
              </button>
              <span className="mx-2">2</span>
              <button className="text-gray-600 border border-gray-300 rounded-full p-1">
                <FaPlus />
              </button>
              <button className="ml-4 text-gray-600">
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border border-gray-300 p-5">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">2</span>
              <img src="/bottle.jpeg" alt="Product 1" className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Product 1</h3>
                <p className="text-gray-600">9,000 Rwf</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-gray-600 border border-gray-300 rounded-full p-1">
                <FaMinus />
              </button>
              <span className="mx-2">2</span>
              <button className="text-gray-600 border border-gray-300 rounded-full p-1">
                <FaPlus />
              </button>
              <button className="ml-4 text-gray-600">
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-28">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
