import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav/Nav";
import RegisterUser from "./views/Register"

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/registerUser" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
