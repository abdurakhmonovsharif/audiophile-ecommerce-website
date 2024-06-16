import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Home from "./components/pages/home/Home";
import About from "./components/shared/About";
import Footer from "./components/shared/Footer";

// pages
import Headphones from "./components/pages/Headphones";
import Speakers from "./components/pages/Speakers";
import Earphones from "./components/pages/Earphones";
import ProductDetails from "./components/pages/ProductDetails";
import Checkout from "./components/pages/Checkout";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const location = useLocation();
  const hideAbout = location.pathname === "/checkout";
  const auth = localStorage.getItem("user");
  return (
    <div className="App">
      <ToastContainer />
      <Nav cartItemCount={cartItemCount} setCartItemCount={setCartItemCount} />
      {auth===null ? (
        <Routes>
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route
            path="/products/:slug"
            element={<ProductDetails setCartItemCount={setCartItemCount} />}
            />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <Footer />
      {!hideAbout && <About />}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
