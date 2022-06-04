import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../auth/Login';

const Routing = () => {
  return (
      <section>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
          </Routes>
      </section>
  )
}

export default Routing;