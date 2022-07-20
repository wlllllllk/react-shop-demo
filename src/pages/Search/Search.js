import "./style.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SmallItems from "../../components/Small_Items/Small_Items.js";

const Search = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { keywords } = useParams();

  const products = require("../../database/products-new.json");
  let result = products.filter((product) => {
    return product.name.includes(keywords);
  });

  // console.log(result);

  return (
    <div className="search">
      {keywords ?
        <>
          {
            result.length === 0
              ?
              <h1> Sorry, there is no result for "{keywords}"</h1>
              :
              <>
                <h1>Showing results for "{keywords}"</h1>
                <SmallItems list={result} mode="grid"></SmallItems>
              </>
          }
        </>
        :
        <h1>Please enter a keyword to search</h1>}
    </div>
  );
};

export default Search;
