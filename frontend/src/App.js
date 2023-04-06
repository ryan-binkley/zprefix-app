import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Header, Login, PersonalInv, Signup, Footer, VisitorInventory } from './Components/ExportComponents';

export const Distribution = React.createContext();



function App() {
  const [loggedin, setLoggedin] = useState(false)
  const [userData, setUserData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allItems, setAllItems] = useState([]);



  return (
    <Distribution.Provider value={{ loggedin, setLoggedin, userData, setUserData, allUsers, setAllUsers, allItems, setAllItems }}>
      <Header id="appheader" />
      <div className='App'>
        <Routes>
          <Route path='/' element={<VisitorInventory />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/personalinventory' element={<PersonalInv />} />
        </Routes>
      </div>
      <Footer id="footer" />
    </Distribution.Provider>
  );
}

export default App;
