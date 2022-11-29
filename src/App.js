import { useContext } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/AuthContext";
import AlertSuccess from "./components/aleartSuccess/AlertSuccess";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Reset from "./pages/resetPassword/Reset";
import ResetSuccess from "./components/alertResetSuccess/ResetSuccess";
import CSKH from "./pages/cskh/cskh";
// css HomePage

import "./assets/css/NavBar.css";
import "./assets/css/Carousel.css";
import "./assets/css/Bonus.css";
import "./assets/css/Title.css";
import "./assets/css/Cart.css";
import "./assets/css/SeeMore.css";
import "./assets/css/Banner.css";
import "./assets/css/Information.css";
import "./assets/css/Responsive.css";
import "./assets/css/PageProductSingle/Product.css";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";

import CatPage from "./pages/dogAndcatPage/CatPage";
import DogPage from "./pages/dogAndcatPage/DogPage";
import Doan from "./pages/doan/Doan";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import ProductDetailState from "./components/HomePage/store/ProductDetail/ProductDetailState";

function App() {
  const { user, dispatch } = useContext(AuthContext);
  let axiosJWT = axios.create();

  const refreshToken = async () => {
    axios.defaults.withCredentials = true;
    try {
      const res = await axios.post(
        "https://web-thu-cung.herokuapp.com/api/auth/refresh-token",
        null,
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      const token = user.accessToken;
      let date = new Date();
      const decodeToken = jwt_decode(token);
      if (decodeToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        console.log(data);
        if (data.newAccessToken) {
          dispatch({
            type: "SAVE_NEW_ACCESS_TOKEN",
            payload: data.newAccessToken,
          });
          config.headers["Authorization"] = data.newAccessToken;
        }
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return (
    <ProductDetailState>
      <Routes>
        {/* <Route path="/" element={user ? <Login /> : <Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/reset/:id" element={<Reset />} />
        <Route path="/lienhe" element={<CSKH />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route exact path="/chocanh/:id" element={<SingleProductPage />} />
        <Route path="/api/auth/active-account" element={<AlertSuccess />} />
        <Route path="/api/auth/reset-password" element={<ResetSuccess />} />
        <Route path="/meocanh" element={<CatPage />} />
        <Route path="/chocanh" element={<DogPage />} />
        <Route path="/doan" element={<Doan axiosJWT={axiosJWT} />} />
      </Routes>
    </ProductDetailState>
  );
}

export default App;
