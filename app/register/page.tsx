"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Image from 'next/image'; 
import Link from 'next/link'; 

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let valid = true;
    let newErrors: { email?: string; password?: string } = {};

    // Email validation
    if (!email.includes('@')) {
      valid = false;
      newErrors.email = 'Invalid email address';
    }

    // Password validation (minimum 7 characters)
    if (password.length < 7) {
      valid = false;
      newErrors.password = 'Password must be at least 7 characters';
    }

    setErrors(newErrors);

    if (valid) {
      router.push('/form'); // Redirect to form page after successful registration
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md flex flex-col lg:flex-row w-full max-w-4xl rounded mb-4">
        {/* Left Part */}
        <div className="p-8 w-full lg:w-1/2 bg-gray-200 rounded-t lg:rounded-l flex flex-col items-center">
          <div className="mb-36">
            <Image src="/logo.jpg" height={48} width={48} alt="Logo" />
          </div>
          <h2 className="text-2xl font-bold">Mark8</h2>
          <p className="mt-1 text-sm">By Awesomity Lab</p>
          <p className="text-xs mt-28">© 2024 Awesomity Lab</p>
        </div>

        {/* Right Part */}
        <div className="p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative flex items-center">
              <FaEnvelope className="absolute left-3 text-yellow-400" />
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4 relative flex items-center">
              <FaLock className="absolute left-3 text-yellow-400" />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
              <Link href="/form">
                <p className="text-sm text-blue-500 hover:underline">
                  Already have an account? Login
                </p>
              </Link>
              <button
                type="submit"
                className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 mt-4 md:mt-0"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Login Section */}
      <div className="bg-white shadow-md w-full max-w-4xl rounded p-4 flex justify-between items-center">
        <p className="text-sm">
          Already have an account?{' '}
          <span className="text-black">Login here</span>
        </p>
        <Link href="/form">
          <p className="py-2 px-4 border border-black text-black rounded-md hover:bg-gray-100 focus:outline-none">
            Login Here
          </p>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
