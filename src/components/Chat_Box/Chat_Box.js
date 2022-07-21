import "./style.scss";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { close } from '../../features/chatSlice';

const ChatBox = () => {
  const isChatOpened = useSelector((state) => state.chat.isChatOpened);
  const dispatch = useDispatch();

  // function handleChat() {
  //   dispatch({
  //     type: "CLOSE_CHAT",
  //   });
  // }

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      let chat = document.querySelector(".middle");
      chat.scrollTop = chat.scrollHeight;
    }
    catch (error) {
      console.log(error);
    }
  }, [messages, isChatOpened]);

  const handleSendMessage = (event) => {
    const key = event.key;

    if (key !== undefined) {
      // Enter key is pressed
      if (key === "Enter" && event.target.value !== "") {
        let all = [...messages];
        all = [...messages, event.target.value];
        setMessages(all)

        document.querySelector("#input").value = "";
      }
    }
    else {
      // Send button is pressed
      if (document.querySelector("#input").value !== "") {
        let all = [...messages];
        all = [...messages, document.querySelector("#input").value];
        setMessages(all);

        document.querySelector("#input").value = "";
      }
    }
  };

  return (
    <>
      {isChatOpened ? (
        <div className="chat-window">
          <div className="top">
            <div className="title">Customer Service <span>{ }</span></div>
            <div className="close" onClick={() => { dispatch(close()) }}></div>
          </div>
          <div className="middle">
            <div className="message">
              <div className="icon"></div>
              <div className="text">
                <div>Hello, I’m Bob. How may I help?</div>
              </div>
            </div>
            {messages.map((message, index) => (
              <div
                className={(index - 1) % 2 === 0 ? "message" : "message myself"}
                key={`${index}msg`}
              >
                <div className="icon" key={`${index}icon`}></div>
                <div className="text" key={`${index}text`}>
                  <div>{message}</div>
                </div>
              </div>
            ))}
            <div id="anchor"></div>
          </div>
          <div className="bottom">
            <input
              id="input"
              type="text"
              placeholder="Type something..."
              onKeyPress={handleSendMessage}
              autoFocus
            />
            <div id="send" className="action" onClick={handleSendMessage}>
              Send
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ChatBox;
