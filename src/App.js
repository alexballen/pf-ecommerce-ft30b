import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./views/Home";
import {getCurrentUser} from "./redux/actions/index"
import { useAuth0 } from "@auth0/auth0-react";
 
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/Favorites";
import RegisterUser from "./views/Register";
import { useDispatch } from "react-redux";

 
function App()
{ 
  const dispatch= useDispatch()
  const {user, getAccessTokenSilently, isAuthenticated}=useAuth0()

//   useEffect(() => {
//     if (isAuthenticated) {
//         dispatch(getCurrentUser(getAccessTokenSilently, user));
//     }
// }, [isAuthenticated, getAccessTokenSilently, user]);

useEffect(() => {
  if (isAuthenticated) {
    dispatch(getCurrentUser(getAccessTokenSilently, user));
  }
//     dispatch(getCart())
//     dispatch(getProducts())
//     dispatch(getCategories())
//     dispatch(getColors())
//     dispatch(getBrands())
}, [])

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<CreateProduct />} />

          <Route path="/Products/:id" element={<ProductDetail />} />

          <Route path="/registerUser" element={<RegisterUser />} />

          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
