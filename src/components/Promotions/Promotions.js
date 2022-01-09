import "./style.scss";
import Promotion from "../../components/Promotion/Promotion.js";

const promos = [
  "https://source.unsplash.com/random/200x400",
  "https://source.unsplash.com/random/400x800",
  "https://source.unsplash.com/random/300x800",
];

const Promotions = () => {
  return (
    <div className="promotions">
      {promos.map((promo, index) => (
        <Promotion key={index} item={promo}></Promotion>
      ))}
    </div>
  );
};

export default Promotions;
