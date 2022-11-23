import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./views/Home";
 
import ProductDetail from "./components/CardDetail/ProductDetail";
 
 
import Nav from "./components/Nav/Nav";
import RegisterUser from "./views/Register"

function App()
{
 
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
 

        <Route path="/Products/:id" element={<ProductDetail />} />
 
        <Route path="/registerUser" element={<RegisterUser />} />
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
