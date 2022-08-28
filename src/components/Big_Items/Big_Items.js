import BigItem from "../Big_Item/Big_Item.js";
import "./style.scss";

const BigItems = ({ list }) => {
  return (
    <div className="big-items">
      {list.map((item) => (
        <BigItem key={item.prod_id} item={item}></BigItem>
      ))}
    </div>
  );
};

export default BigItems;
