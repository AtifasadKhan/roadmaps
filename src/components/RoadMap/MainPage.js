import React from 'react';
// import Navbar from './Navbar';
import NavPage from './NavPage';
// import Sidebar from './Sidebar';

const MainPage = () => {
  return (
    <React.Fragment>
      {/* sidebar section */}
      <section>
        <div className='grid grid-cols-12'>
          <div className='col-span-9 bg-green-500 h-screen pl-2 md:col-span-10'>
            <NavPage />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
