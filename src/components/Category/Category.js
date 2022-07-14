import "./style.scss";
import { useNavigate } from "react-router-dom";
import SubCategory from "../Sub_Category/Sub_Category.js";

const sub_cat = ["Sub 1", "Sub 2", "Sub 3"];

const Category = () => {
  const navigate = useNavigate();

  const categories = require("../../database/categories.json");
  // let result = categories.filter((category) => {
  //     return category.cat_id === parseInt(categoryID);
  // });

  return (
    <div className="category">
      <div className="banner" onClick={() => { navigate(`/category`) }}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16669 6.25H20.8334V8.33333H4.16669V6.25ZM4.16669 11.4583H20.8334V13.5417H4.16669V11.4583ZM4.16669 16.6667H20.8334V18.75H4.16669V16.6667Z"
            fill="white"
          />
        </svg>
        <h3>Categories</h3>
      </div>
      <div className="choices">
        {categories.map((c, index) => (
          <div className="each">
            <h4 key={index} onClick={() => { navigate(`/category/${c.cat_id}`) }}>{c.name}</h4>
            <SubCategory parent={c.cat_id} list={sub_cat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
