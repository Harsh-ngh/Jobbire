import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from './Assets/jobire.png'; 
import Jobs from '../Jobs';

function About() {
  return (
    <div className="flex flex-row items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-2/3 p-10">
        <h2 className="text-4xl font-bold mb-4">About Jobℹre</h2>
        <p className="text-lg leading-7">
          Welcome to Jobire, your gateway to finding the perfect job tailored to your preferences. Our platform offers robust job filtering options, ensuring you can easily discover opportunities that match your skills and aspirations. Additionally, Jobire facilitates connections with industry professionals for valuable referrals, enhancing your chances of landing your dream job. Start your job search journey with Jobire today and take the next step towards a fulfilling career.
        </p>
        <Link to='/jobs' className="inline-block mt-4 px-6 py-3 bg-sky-950 text-white rounded-lg hover:bg-sky-900 transition duration-300">
          Grab ℹ️t Now
        </Link>
      </div>
      <div className="w-1/3 mr-5">
        <img
          src={aboutImage}
          alt="About Jobℹre"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default About;
