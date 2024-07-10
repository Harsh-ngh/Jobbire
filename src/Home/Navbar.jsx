import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-[#101529] via-[#1d0635] to-[#0f033c]">
      <div className="text-3xl font-bold text-white">
        Job<span className="inline-block animate-pulse">ℹ</span>re
      </div>
      <div className="flex gap-8 text-center text-xl">
        <Link to="/about" className="text-white hover:scale-110 transition-transform duration-300">About</Link>
        <Link to="/jobs" className="text-white hover:scale-110 transition-transform duration-300">Search Jobs</Link>
        <Link to="/referral" className="text-white hover:scale-110 transition-transform duration-300">Get Referral</Link>
         <Link to="/register" className="text-white hover:scale-110 transition-transform duration-300">
      <button className='bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'>
        Join Now
      </button>
    </Link>
      </div>
    </div>
  );
}

export default Navbar;
