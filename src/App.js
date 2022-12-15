import Header from "./components/Header/Header.js";
import Main from "./pages/Main/Main.js";
import Category from "./pages/Category/Category.js";
import Product from "./pages/Product/Product.js";
import Error from "./pages/Error/Error.js";
import Search from "./pages/Search/Search.js";
import Checkout from "./pages/Checkout/Checkout.js";
import Success from "./pages/Success/Success.js";
import OTP from "./pages/OTP/OTP.js";

import Footer from "./components/Footer/Footer.js";
import ChatButton from "./components/Chat_Button/Chat_Button.js";
import ChatBox from "./components/Chat_Box/Chat_Box.js";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { load as loadCart, close as closeCart } from './features/cartSlice';

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('load', (event) => {
      console.log('page is fully loaded');
      dispatch(loadCart());
      dispatch(closeCart());
      setLoaded(true);
    });
  }, [dispatch]);

  const [isLoaded, setLoaded] = useState(false);

  return (
    <Router>
      {isLoaded ? <></> : <div id="loading"><img src="/loading-infinity.svg" alt=""></img></div>}
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryID" element={<Category />} />
        <Route path="/product/:productID" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:keywords" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer></Footer>
      <ChatButton ></ChatButton>
      <ChatBox></ChatBox>
    </Router>
  );
}

export default App;
