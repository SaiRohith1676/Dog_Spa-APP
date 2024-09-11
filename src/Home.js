import React, { useState, useEffect } from 'react';

const Home = ({ email, onLogout }) => {
  const [image, setImage] = useState('');

  const fetchImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setImage(data.message);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="flex justify-between p-4 bg-white shadow">
        <h1 className="text-2xl font-bold">Demo Spa</h1>
        <div className="flex items-center">
          <span className="mr-4">{email}</span>
          <button onClick={onLogout} className="bg-red-500 text-white p-2 rounded">Sign Out</button>
        </div>
      </header>
      <main className="flex-grow p-4">
        {image && (
          <>
            <img src={image} alt="Random Dog" className="mb-4 mx-auto w-80 h-80" />
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button onClick={fetchImage} className="bg-blue-500 text-white p-2 rounded">Next Image</button>
          </>
        )}
      </main>
      <footer className="p-4 bg-white shadow text-center">
        {new Date().toLocaleDateString()}
      </footer>
    </div>
  );
};

export default Home;
