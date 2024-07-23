// components/ProfilePanel.tsx

import React from 'react';
import { FaTimes, FaUser, FaBox, FaQuestionCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface ProfilePanelProps {
  onClose: () => void;
}

const Profile: React.FC<ProfilePanelProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-80 bg-white h-auto p-4 overflow-y-auto mt-20 mb-20">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose}>
            <FaTimes className="text-gray-800" />
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <Image src="/logo.jpg" alt="Aimee Mercury" width={64} height={64} className="rounded-full" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Aimee Mercury</h3>
              <p className="text-gray-600">marie@gmail.com</p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="flex items-center justify-center w-full text-gray-800 hover:text-blue-600">
              <FaUser className="mr-2" /> My Account
            </Link>
            <Link href="/saved" className="flex items-center justify-center w-full text-gray-800 hover:text-blue-600">
              <FaBox className="mr-2" /> My Orders
            </Link>
            <div className="flex items-center justify-center w-full">
              <FaQuestionCircle className="mr-2" /> Help
            </div>
            <div className="flex items-center justify-center w-full">
              <FaCog className="mr-2" /> Settings
            </div>
          </div>
          <hr className="my-4" />
          <Link href="/form" className="flex items-center justify-center w-full text-gray-800 hover:text-blue-600">
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
