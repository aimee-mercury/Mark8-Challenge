import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchPanelProps {
  onClose: () => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-100 p-8 rounded w-4/5 max-w-2xl relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <FaTimes className="text-gray-800" />
        </button>
        <div className="flex space-x-4 items-center">
          <h2 className="text-lg">Search</h2>
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 border border-gray-300 rounded"
          />
          <button className="px-6 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition flex items-center">
            Search
            <FaSearch className="ml-2 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
