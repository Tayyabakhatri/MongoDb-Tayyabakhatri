import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import Hero from "./Components/Hero/Hero.jsx";
import Items from "./Components/Items/Items.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import LogOut from "./Components/LogOut/LogOut.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import AdminDashboard from "./Components/adminDashboard/AdminDashboard.jsx";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/items" element={<Items/>}/>
          <Route path="/logout" element ={<LogOut/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
