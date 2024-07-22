import React from 'react';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md flex w-full max-w-4xl rounded mb-4">
        {/* Left Part */}
        <div className="p-8 w-1/2 bg-gray-200 rounded-l flex flex-col">
          <div className="flex flex-col items-center">
            <div className="mb-36">
              <img src="/logo.jpg" className="h-12" alt="Logo" />
            </div>
            <h2 className="text-2xl font-bold">Mark8</h2>
            <p className="mt-1 text-sm">By Awesomity Lab</p>
            <p className="text-xs mt-28">© 2024 Awesomity Lab</p>
          </div>
        </div>

        {/* Right Part */}
        <div className="p-8 w-1/2">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
              <Link href="/index">
                <button
                  type="button"
                  className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Register Section */}
      <div className="bg-white shadow-md w-full max-w-4xl rounded p-4 flex justify-between items-center">
        <p className="text-sm">
          New Here?{' '}
          <span className="text-black">Create an account</span>
        </p>
        <button
          className="py-2 px-4 border border-black text-black rounded-md hover:bg-gray-100 focus:outline-none"
        >
          Register Here
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
