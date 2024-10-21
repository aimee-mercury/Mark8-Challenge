import React from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../hook/cart';
import Image from 'next/image';

interface CartPanelProps {
  onClose: () => void;
}

const CartPanel: React.FC<CartPanelProps> = ({ onClose }) => {
  const { cart, toggleCartItem, updateQuantity } = useCart();

  const handleQuantityChange = (productId: number, action: 'increase' | 'decrease') => {
    const product = cart.find(item => item.id === productId);
    if (!product) return;

    const newQuantity = action === 'increase' ? product.quantity + 1 : product.quantity - 1;
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: number) => {
    const product = cart.find(item => item.id === productId);
    if (product) {
      toggleCartItem(product);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white h-auto p-4 overflow-y-auto mt-20 mb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-semibold">My Cart</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-800" />
          </button>
        </div>
        <div className='bg-gray-300'>
          <p className="text-gray-700 mb-4 p-4 text-sm md:text-base">By proceeding you won&apos;t be charged yet</p>
        </div>
       
        <div className="mb-6">
          {cart.length === 0 ? (
            <p className="text-gray-700">Your cart is empty</p>
          ) : (
            cart.map(product => (
              <div key={product.id} className="flex items-center justify-between mb-4 border border-gray-300 p-4">
                <div className="flex items-center">
                  <Image src={product.imageUrl} alt={product.name} width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 object-cover rounded" />
                  <div className="ml-4">
                    <h3 className="text-base md:text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{typeof product.price === 'number' ? product.price.toLocaleString() : product.price} Rwf</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(product.id, 'decrease')}
                    className="text-gray-600 border border-gray-300 rounded-full p-1"
                  >
                    <FaMinus />
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, 'increase')}
                    className="text-gray-600 border border-gray-300 rounded-full p-1"
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => handleRemoveItem(product.id)}
                    className="ml-4 text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-end mt-8 md:mt-28">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
