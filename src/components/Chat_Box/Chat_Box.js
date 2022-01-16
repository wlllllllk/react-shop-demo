import "./style.scss";

import { useState } from "react";

const ChatBox = ({ isChat, setChat }) => {
  const [messages, setMessage] = useState([]);

  const handleSendMessage = (event) => {
    const key = event.key;

    if (key !== undefined) {
      // Enter key is pressed
      if (key === "Enter" && event.target.value !== "") {
        let all = [...messages];
        all = [...messages, event.target.value];
        setMessage(all);

        document.querySelector("#input").value = "";

        let chat = document.querySelector(".middle");
        chat.scrollTop = chat.scrollHeight;

        // console.log("Height: ", chat.scrollHeight);
      }
    } else {
      // Send button is pressed
      if (document.querySelector("#input").value !== "") {
        let all = [...messages];
        all = [...messages, document.querySelector("#input").value];
        setMessage(all);

        document.querySelector("#input").value = "";

        let chat = document.querySelector(".middle");
        chat.scrollTop = chat.scrollHeight;
      }
    }
  };

  return (
    <>
      {isChat ? (
        <div className="chat-window">
          <div className="top">
            <div className="title">Customer Service</div>
            <div className="close" onClick={setChat}></div>
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
            <div className="anchor"></div>
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
