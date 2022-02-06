import Header from "./components/Header/Header.js";
import Main from "./pages/Main/Main.js";
import Product from "./pages/Product/Product.js";
import Error from "./pages/Error/Error.js";
import Footer from "./components/Footer/Footer.js";
import ChatButton from "./components/Chat_Button/Chat_Button.js";
import ChatBox from "./components/Chat_Box/Chat_Box.js";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.scss";

function App() {
  const [isChat, setChat] = useState(false);
  const handleChat = () => {
    if (!isChat) {
      setChat(true);
    } else {
      setChat(false);
    }
  };

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/product/:productID" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer isChat={isChat} setChat={handleChat}></Footer>
      <ChatButton isChat={isChat} setChat={handleChat}></ChatButton>
      <ChatBox isChat={isChat} setChat={handleChat}></ChatBox>
    </Router>
  );
}

export default App;
