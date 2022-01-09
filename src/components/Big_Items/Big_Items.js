import BigItem from "../Big_Item/Big_Item.js";
import "./style.scss";

const items = [
  {
    id: 1,
    stars: 4.5,
    text: "Lorem ipsum dolor sit amet.",
    photo: "https://source.unsplash.com/random/200x400",
    // photo: "",
    name: "This is a Long Product Name 123456789",
    current: 36.9,
    original: 46.9,
  },
  {
    id: 2,
    stars: 3.0,
    text: "Sed id risus quis diam",
    photo: "https://source.unsplash.com/random/300x300",
    // photo: "",
    name: "pellentesque a, facilisis",
    current: 18,
    original: 65,
  },
  {
    id: 3,
    stars: 4.0,
    text: "lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet",
    photo: "https://source.unsplash.com/random/500x500",
    // photo: "",
    name: "et, facilisis",
    current: 52,
    original: 97,
  },
];

const BigItems = () => {
  return (
    <div className="big-items">
      {items.map((item) => (
        <BigItem key={item.id} item={item}></BigItem>
      ))}
    </div>
  );
};

export default BigItems;
