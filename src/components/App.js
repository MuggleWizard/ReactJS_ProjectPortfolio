import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, { id: v4(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(LOCAL_STORAGE_KEY);
    // alert(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path ="/" element={(<ContactList contacts = {contacts} getContactId ={removeContactHandler} exact/>)}/>
            <Route path ="/add" element={(<AddContact addContactHandler = {addContactHandler} /> )}/>
            <Route path="/contact/:id" element={ContactDetail}/>
          </Routes>
         
        {/* <AddContact addContactHandler = {addContactHandler}/>
        <ContactList contacts = {contacts} getContactId ={removeContactHandler}/> */}
        </BrowserRouter>
      </div>
  );
};

export default App;
