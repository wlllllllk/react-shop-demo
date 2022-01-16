import "./style.scss";

const ChatButton = ({ setChat }) => {
  return (
    <>
      <div className="fab" onClick={setChat}>
        <div>Talk to Us</div>
      </div>
    </>
  );
};

export default ChatButton;
