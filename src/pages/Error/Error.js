import "./style.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="error">
      <div className="container">
        <span></span>
        {/* <img src="/src/icons/not_found.svg" alt="" /> */}
        <h1>Sorry!</h1>
        <h1>The page you are looking for does not exist.</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Error;
