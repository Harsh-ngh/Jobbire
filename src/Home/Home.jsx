import React from 'react';
import Navbar from './Navbar';
import jobireImg from './Assets/jobire.png';
import TypingEffect from './TypingEffect';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex flex-row items-center justify-center h-full text-center p-10 text-white">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold mb-6">Welcome to Jobℹre</h1>
          <p className="text-5xl leading-7">
            <TypingEffect
              strings={['Get your dream job.', 'Apply now.', 'Find the perfect role.']}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
            />
          </p>
        </div>
        <div className="w-1/2 p-4">
          <img
            src={jobireImg}
            alt="Jobℹre"
            className="w-full h-auto img-animation"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
