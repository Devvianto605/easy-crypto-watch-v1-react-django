import React from 'react';
import { Routes , Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import AuthLogin3 from 'views/pages/authentication/authentication3/Login3';
import AuthRegister3 from 'views/pages/authentication/authentication3/Register3';
import Homepage from 'views/homepage';
import Dashboard from 'views/dashboard/Default';
import Edit from 'views/dashboard/Edit';

import AuthGuard from 'utils/route-guard/AuthGuard';
import GuestGuard from 'utils/route-guard/GuestGuard';
//import Temp from 'views/temp/Temp';


function AllRoutes() {
  return ( 
    <Routes>
        <Route exact path="*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<Homepage/>} />
        {/* Test Page */}
        {/* <Route exact path="/temp" element={<Temp/>} /> */} 
        <Route exact path="/auth" element={<AuthGuard/>}>
          <Route exact path="/auth/login" element={<AuthLogin3/>} />
          <Route exact path="/auth/register" element={<AuthRegister3/>} />
        </Route>
        <Route exact path="/dashboard" element={<GuestGuard/>}>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/dashboard/edit" element={<Edit/>}/>
        </Route>
        
    </Routes>
  );
}

export default AllRoutes;