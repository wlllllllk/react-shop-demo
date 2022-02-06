import "./style.scss";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="error">
      <h1>Error 404!</h1>
      <h1>Page doesn't exist!</h1>
    </div>
  );
};

export default Error;
