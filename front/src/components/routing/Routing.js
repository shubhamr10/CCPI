import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../auth/Login';
import Home from "../home/Home";


const Routing = () => {
  return (
      <section>
          <Routes>
              <Route exact path='/' element={<Login/>}/>
              <Route exact path='/home' element={<Home/>}/>
          </Routes>
      </section>
  )
}

export default Routing;