import "./style.scss";
import { useDispatch } from "react-redux";
import { open } from '../../features/chatSlice';

const ChatButton = () => {
  const dispatch = useDispatch();

  // function handleChat() {
  //   dispatch({
  //     type: "OPEN_CHAT",
  //   });
  // }

  return (
    <>
      <div className="fab" onClick={() => { dispatch(open()) }}>
        <div>Talk to Us</div>
      </div>
    </>
  );
};

export default ChatButton;
