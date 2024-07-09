import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const MatchedUser = () => {
  const location = useLocation();
  const { company, college } = location.state || {};
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jobbire-dca5e-default-rtdb.firebaseio.com/userData.json`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        if (data) {
          const matches = Object.values(data).filter(user => 
            (company ? user.company === company : true) && 
            (college ? user.college === college : true)
          );
          setMatchedUsers(matches);
        } else {
          setError('Sorry, no match found');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [company, college]);

  const handleConnectEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleConnectPhone = (phone) => {
    // Implement your logic to handle phone connection here
    // Example: open dialer or initiate a call
    console.log(`Connecting to phone number: ${phone}`);
  };

  return (
    <div className="justify-centre p-8 rounded-lg" style={{ background: 'linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))' }}>
      <div className="mb-2 flex items-center justify-center text-white">
        <div className="text-3xl font-bold">
          Job<span className="inline-block animate-pulse-emoji">ℹ</span>re
        </div>
      </div>
      <p className='text-2xl font-bold text-white mb-2 ml-1'>
        Here's What we got for you!
      </p>
      {error ? (
        <p className="text-white">{error}</p>
      ) : matchedUsers.length > 0 ? (
        matchedUsers.map((user, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded-lg flex justify-between items-center">
            <div>
              <p>Name: {user.firstName ? `${user.firstName} ${user.lastName || ''}` : 'No Name Provided'}</p>
              <p>Company: {user.company || 'No Company Provided'}</p>
              <p>College: {user.college || 'No College Provided'}</p>
              <p>Email: {user.email ? (
                <button className="text-blue-500 underline mr-2" onClick={() => handleConnectEmail(user.email)}>
                  Email
                </button>
              ) : 'No Email Provided'}</p>
            </div>
            <button className="bg-indigo-900 text-white px-4 py-2 rounded" onClick={() => handleConnectEmail(user.email)}>
              Contact
            </button>
          </div>
        ))
      ) : (
        <p className="text-white">Sorry! We did not get any match for you.</p>
      )}
      <Link to='/home'>
        <button className='justify-centre w-20 h-10 bg-white text-centre rounded-sm text-black'>Go Home</button>
      </Link>
    </div>
  );
};

export default MatchedUser;
