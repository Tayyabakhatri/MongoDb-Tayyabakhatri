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
import UsersCustomersPage from "./Components/Pages/UsersCustomersPage.jsx";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductDetail from "./Components/Pages/ProductDetail.jsx";

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
 
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/items" element={<Items />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/allUsers" element={<UsersCustomersPage />} />
      </Routes>
    </>
  );
}

export default App;
