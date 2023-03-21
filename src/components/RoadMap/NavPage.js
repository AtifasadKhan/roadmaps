import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Java from './pages/Java';
import JS from './pages/JS';
import Python from './pages/Python';

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path='/java' element={<Java />} />
          <Route path='/js' element={<JS />} />
          <Route path='/python' element={<Python />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
