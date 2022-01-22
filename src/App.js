import Header from './components/Header/Header.js'
import Main from './pages/Main/Main.js'
import Footer from './components/Footer/Footer.js'
import ChatButton from './components/Chat_Button/Chat_Button.js';
import ChatBox from "./components/Chat_Box/Chat_Box.js";
import { useState } from "react";

import './App.scss';

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
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer isChat={isChat} setChat={handleChat}></Footer>
      <ChatButton isChat={isChat} setChat={handleChat}></ChatButton>
      <ChatBox isChat={isChat} setChat={handleChat}></ChatBox>
    </div>
  );
}

export default App;
