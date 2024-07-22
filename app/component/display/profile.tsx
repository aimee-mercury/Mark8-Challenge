// components/ProfilePanel.tsx

import React from 'react';
import { FaTimes, FaUser, FaBox, FaQuestionCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

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
            <img src="" className="w-16 h-16 rounded-full" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Aimee Mercury</h3>
              <p className="text-gray-600">marie@gmail.com</p>
            </div>
          </div>
          <hr className="mb-4"/>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center w-full">
              <FaUser className="mr-2" /> My Account
            </div>
            <div className="flex items-center justify-center w-full">
              <FaBox className="mr-2" /> My Orders
            </div>
            <div className="flex items-center justify-center w-full">
              <FaQuestionCircle className="mr-2" /> Help
            </div>
            <div className="flex items-center justify-center w-full">
              <FaCog className="mr-2" /> Settings
            </div>
          </div>
          <hr className="my-4"/>
          <div className="flex items-center justify-center w-full">
            <FaSignOutAlt className="mr-2" /> Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;