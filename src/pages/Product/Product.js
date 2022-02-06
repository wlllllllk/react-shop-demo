// import BigItems from "../../components/Big_Items/Big_Items.js";
// import Category from "../../components/Category/Category.js";
// import MainRecommendation from "../../components/Main_Recommendation/Main_Recommendation.js";
// import SmallItems from "../../components/Small_Items/Small_Items.js";
// import Promotions from "../../components/Promotions/Promotions.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import "./style.scss";

const Product = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const { productID } = useParams();

    return (
        <div className="product">
            Product Page of {productID}
        </div>
    );
};

export default Product;
