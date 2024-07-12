import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from './Assets/jobire.png'; 
import { MdHomeFilled } from "react-icons/md";
import { MdScreenSearchDesktop } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { FcAddDatabase } from "react-icons/fc";

function About() {
  return (
    <div className="flex flex-row items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-2/3 p-10">
        <h2 className="text-4xl font-bold mb-4">About Jobℹre</h2>
        <p className="text-lg leading-7">
          Welcome to Jobire, your gateway to finding the perfect job tailored to your preferences. Our platform offers robust job filtering options, ensuring you can easily discover opportunities that match your skills and aspirations. Additionally, Jobire facilitates connections with industry professionals for valuable referrals, posting an opening for enhancing your chances of landing your dream job. Start your job search journey with Jobire today and take the next step towards a fulfilling career.
        </p>
        <div className="flex flex-row gap-x-4 mt-6 justify-center">
          <Link to='/home' className="px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <MdHomeFilled className="mr-2" /> Home
          </Link>
          <Link to='/jobs' className="px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <MdScreenSearchDesktop className="mr-2" /> Get Your Jobs
          </Link>
          <Link to='/referral' className="px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <MdContactMail className="mr-2" /> Find Referral
          </Link>
          <Link to='/post' className="px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <FcAddDatabase className="mr-2" /> Post a Job
          </Link>
        </div>
        <div className="flex mt-4 ml-7">
          <Link to='/register' className="ml-8 px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <RiLoginCircleFill className="mr-2" /> Join Us
          </Link>
        </div>
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
