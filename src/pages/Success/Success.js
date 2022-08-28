import "./style.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { clear as clearCart } from "../../features/cartSlice";


const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clearCart());
  }, [dispatch]);


  return (
    <div className="success">
      <div className="container">
        <h1>Order Placed Successfully</h1>
        <span></span>
        {/* <img src="/src/icons/not_found.svg" alt="" /> */}
        <h1>Thank you!</h1>
        <h1>Order ID: {uuidv4()}</h1>
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

export default Success;
