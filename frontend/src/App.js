import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { Header, Login, PersonalInv, Signup } from './Components/ExportComponents';

export const Distribution = React.createContext();



function App() {
  const [loggedin, setLoggedin] = useState(false)
  const [userData, setUserData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  return (
    <Distribution.Provider value={{ loggedin, setLoggedin, userData, setUserData, allUsers, setAllUsers }}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/personalinventory' element={<PersonalInv />} />
        </Routes>
      </div>
    </Distribution.Provider>
  );
}

export default App;
