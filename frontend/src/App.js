import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { Header, Login, PersonalInv, Signup, Footer, VisitorInventory, ItemDetails, AddItem, Profile } from './Components/ExportComponents';

export const Distribution = React.createContext();



function App() {
  const [loggedin, setLoggedin] = useState(false)
  const [userData, setUserData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [itemDescription, setItemDescription] = useState([]);



  return (
    <Distribution.Provider value={{ loggedin, setLoggedin, userData, setUserData, allUsers, setAllUsers, allItems, setAllItems, itemName, setItemName, itemQuantity, setItemQuantity, itemDescription, setItemDescription }}>
      <Header id="appheader" />
      <div className='App'>
        <Routes>
          <Route path='/' element={<VisitorInventory />} />
          <Route path='/item/:id' element={<ItemDetails />} />
          <Route path='/additem' element={<AddItem />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/personalinventory' element={<PersonalInv />} />
        </Routes>
      </div>
      <Footer id="footer" />
    </Distribution.Provider>
  );
}

export default App;
