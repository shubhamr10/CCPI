import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../auth/Login';
import NotFound from "../layout/NotFound";

import PrivateRoute from "./PrivateRoute";
import Home from "../home/Home";
import CreateUser from "../users/CreateUser";

const Routing = () => {
  return (
      <section>
          <Routes>
              <Route exact path='/' element={<Login/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/home' element={
                  <PrivateRoute>
                      <Home/>
                  </PrivateRoute>
                  }/>
              <Route exact path='/create-user' element={
                  <PrivateRoute>
                      <CreateUser/>
                  </PrivateRoute>
              }/>

              <Route exact path='/*' element={<NotFound/>}/>
          </Routes>
      </section>
  )
}

export default Routing;