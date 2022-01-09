import "./style.scss";

const cat = [
  "Heavy",
  "Fruit",
  "Frozen",
  "Snacks",
  "Drinks",
  "Noodles",
  "Rice",
  "Soup",
  "Breakfast",
  "Organics",
  "Medicines",
  "Coupons",
  "Papers",
  "House Cleaning",
  "Body Care",
  "Babies",
  "Pets",
];

const sub_cat = ["Sub 1", "Sub 2", "Sub 3"];

const Category = () => {
  return (
    <div className="category">
      <div className="banner">
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
        {cat.map((c, index) => (
          <div className="each">
            <h4 key={index}>{c}</h4>
            <div className="sub">
              {sub_cat.map((sc, index2) => (
                <h5 key={`${index}0${index2}`}>{sc}</h5>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
