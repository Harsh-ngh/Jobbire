import React from 'react';
import dayjs from 'dayjs';
import {Link} from 'react-router-dom';


function JobCard(props) {
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, 'day');

  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 mb-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3 w-full md:w-auto">
          <h1 className="text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p>
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {props.skills && props.skills.map((skill, i) => (
              <p key={i} className="text-gray-500 py-1 px-2 rounded-md border border-black">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full md:w-auto mt-4 md:mt-0">
          <p className="text-gray-500">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
          </p>
         <Link to={props.job_link}>
            {props.job_title}

            <button className="text-blue-500 border border-blue-500 px-6 sm:px-10 py-2 rounded-md">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
