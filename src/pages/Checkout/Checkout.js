import "./style.scss";
import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  // const { keywords } = useParams();
  const cartItem = useSelector((state) => state.cart.cartItem);
  const itemsTotal = cartItem.reduce((prev, cur, index) => prev + (cartItem[index].quantity * cartItem[index].cur_price), 0).toFixed(2);
  const handlingFees = itemsTotal > 1000 ? 0 : 100;

  let today = new Date();
  let future = new Date(today.setDate(today.getDate() + 5));
  let dd = String(future.getDate()).padStart(2, '0');
  let mm = String(future.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = future.getFullYear();
  let hr = today.getHours();

  let deliveryDate = dd + '/' + mm + '/' + yyyy;
  let deliveryTime = hr + ":00";

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="container">
        <table className="itemContainer">
          <tbody>


            <tr className="itemTitle">
              <th></th>
              <th></th>
              <th>Price</th>
              {/* <th></th> */}
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td colSpan={6} className="itemRow_Divider"></td>
            </tr>
            {cartItem.map((item, index) => (
              <>
                <tr key={item.prod_id} className="itemRow">
                  <td className="itemRow_Photo">
                    {/* <img src={item.photo} alt="" /> */}
                    <img src="https://source.unsplash.com/random/" alt="" />
                  </td>
                  <td className="itemRow_Name">{item.name}</td>
                  <td className="itemRow_Price">
                    <span>${item.cur_price.toFixed(2)}</span>
                    <br></br>
                    <span>${item.orig_price.toFixed(2)}</span></td>
                  {/* <td className="itemRow_CurPrice">${item.cur_price.toFixed(2)}</td> */}
                  <td className="itemRow_Quantity">{item.quantity}</td>
                  <td className="itemRow_Subtotal">${(item.cur_price * item.quantity).toFixed(2)}</td>
                </tr>
                <tr>
                  <td key={`g${index}`} colSpan={6} className="itemRow_Divider"></td>
                </tr>
              </>
            ))}

          </tbody>
        </table>
        <div className="side">
          <div className="details">
            <table className="detailsTable">
              <tbody>
                <tr className="detailsTable_Title">
                  <th colSpan={2}>Summary</th>
                </tr>
                <tr>
                  <td colSpan={2} className="itemRow_Divider"></td>
                </tr>
                <tr className="detailsTable_ItemsTotal">
                  <td>Items Total</td>
                  <td>${Number(itemsTotal).toFixed(2)}</td>
                </tr>
                {
                  handlingFees > 0 &&
                  <tr className="detailsTable_Handling">
                    <td>Handling Fees</td>
                    <td>${Number(handlingFees).toFixed(2)}</td>
                  </tr>
                }
                <tr>
                  <td colSpan={2} className="itemRow_Divider"></td>
                </tr>
                <tr className="detailsTable_OrderTotal">
                  <td>Order Total</td>
                  <td>${(Number(itemsTotal) + Number(handlingFees)).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="details">
            <table className="detailsTable">
              <tbody>
                <tr className="detailsTable_Title">
                  <th>Delivery Details</th>
                </tr>
                <tr>
                  <td className="itemRow_Divider"></td>
                </tr>
                <tr className="detailsTable_SmallTitle">
                  <td>Address</td>
                </tr>
                <tr>
                  <td>Adah Satterfield</td>
                </tr>
                <tr>
                  <td>(713) 794-0368</td>
                </tr>
                <tr>
                  <td>1200 Binz St, Houston, Texas, United States</td>
                </tr>
                <tr className="detailsTable_SmallTitle">
                  <td>Date</td>
                </tr>
                <tr>
                  <td>{deliveryDate}</td>
                </tr>
                <tr className="detailsTable_SmallTitle">
                  <td>Time</td>
                </tr>
                <tr>
                  <td>{deliveryTime}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="details">
            <table className="detailsTable">
              <tbody>
                <tr className="detailsTable_Title">
                  <th>Payment Methods</th>
                </tr>
                <tr>
                  <td className="itemRow_Divider"></td>
                </tr>
                <tr className="detailsTable_SmallTitle">
                  <td>Credit Card</td>
                </tr>
                <tr>
                  <td>4646 4646 4646 4646</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="payButton">
            <button
              onClick={() => {
                navigate("/success");
              }}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
