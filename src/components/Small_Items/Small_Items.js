import SmallItem from "../Small_Item/Small_Item.js";
import "./style.scss";

const SmallItems = ({ list, mode }) => {
  return (
    <div className={`small-items ${mode}`}>
      {list.map((item, index) => (
        <SmallItem key={index} item={item} mode="grid"></SmallItem>
      ))}
    </div>
  );
};

export default SmallItems;
