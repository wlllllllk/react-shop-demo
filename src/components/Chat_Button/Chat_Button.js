import "./style.scss";
import { useDispatch } from "react-redux";

const ChatButton = () => {
  const dispatch = useDispatch();

  function handleChat() {
    dispatch({
      type: "OPEN_CHAT",
    });
  }

  return (
    <>
      <div className="fab" onClick={handleChat}>
        <div>Talk to Us</div>
      </div>
    </>
  );
};

export default ChatButton;
