import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Overview from '../components/Overview';
import Customer from '../components/Customer';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-full bg-white fixed left-0 top-0 transition-all duration-300 ease-in-out">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-80">
        <div className="sticky">
          <Header />
        </div>
        
        {/* Page Content */}
        <div className="p-4">
          <Overview />
          <Customer />
        </div>
      </div>
    </div>
  );
};

export default Home;
