import "./style.scss";
import { useNavigate } from "react-router-dom";

const Sub_Category = ({ parent, list }) => {
  const navigate = useNavigate();

  console.log(list);

  return (
    <div className="sub">
      {list.map((sc, index) => (
        <h5 key={index} onClick={() => { navigate(`/category/${parent}/${index + 1}`) }}>{sc}</h5>
      ))}
    </div>
  );
};

export default Sub_Category;
