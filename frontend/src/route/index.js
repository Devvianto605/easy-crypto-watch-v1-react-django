import React from 'react';
import { Routes , Route } from "react-router-dom";
import AuthLogin3 from 'views/pages/authentication/authentication3/Login3';
import AuthRegister3 from 'views/pages/authentication/authentication3/Register3';

import Homepage from 'views/homepage';
import Dashboard from 'views/dashboard/Default';


function AllRoutes() {
  return ( 
    <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/login" element={<AuthLogin3/>} />
        <Route exact path="/register" element={<AuthRegister3/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        
    </Routes>
  );
}

export default AllRoutes;