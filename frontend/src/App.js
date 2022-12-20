import React from 'react';
import { Routes , Route } from "react-router-dom";

import './App.css';

import Login from './views/Login';

function App() {
  return ( 
    <Routes>
      <Route exact path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
