import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./views/Home";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Nav from "./components/Nav/Nav";
import RegisterUser from "./views/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />

          <Route path="/Products/:id" element={<ProductDetail />} />

          <Route path="/registerUser" element={<RegisterUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
