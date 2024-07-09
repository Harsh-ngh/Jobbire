import React from 'react';
import './nav.css'
function Navbar() {
  return (
    <div className='h-20 flex items-center w-full text-white'>
      <div className='text-3xl pl-20 font-bold'>
        Job<span className='inline-block animate-pulse-emoji'>ℹ</span>re
      </div>
    </div>
  );
}

export default Navbar;
