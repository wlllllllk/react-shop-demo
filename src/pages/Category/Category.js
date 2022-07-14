import "./style.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SmallItems from "../../components/Small_Items/Small_Items.js";

const Category = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const { categoryID } = useParams();

    const categories = require("../../database/categories.json");
    let result = categories.filter((category) => {
        return category.cat_id === parseInt(categoryID);
    });

    const currentCategory = result[0];

    const products = require("../../database/products-new.json");
    let result2 = products.filter((product) => {
        return product.cat_id === parseInt(categoryID);
    });

    return (
        <div className="category-main">
            {categoryID ?
                <>
                    <h2>{currentCategory.name}</h2>
                    <div className="products-holder"></div>
                    <SmallItems list={result2} mode="grid"></SmallItems>
                </>
                :
                <>
                    <h2>All Categories</h2>
                    <div className="category-blocks-container">
                        {categories.map((cat, index) => (
                            <div className="category-block" onClick={() => { navigate(`/category/${cat.cat_id}`) }}>
                                <img src="https://source.unsplash.com/random/300x300" alt="" />
                                <h3>{cat.name}</h3>
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    );
};

export default Category;
