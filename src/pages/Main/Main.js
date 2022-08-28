import BigItems from "../../components/Big_Items/Big_Items.js";
import Category from "../../components/Category/Category.js";
import MainRecommendation from "../../components/Main_Recommendation/Main_Recommendation.js";
import SmallItems from "../../components/Small_Items/Small_Items.js";
import Promotions from "../../components/Promotions/Promotions.js";
import { useEffect } from "react";
import "./style.scss";

const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleScrollPrevious = (list) => {
        const element = document.querySelector(list);
        let current = element.scrollLeft;
        element.scrollLeft = current - 120;
    };

    const handleScrollNext = (list) => {
        const element = document.querySelector(list);
        let current = element.scrollLeft;
        element.scrollLeft = current + 120;
    };

    const products = require("../../database/products-new.json");

    let randomRecommendationList = [];
    let temp = [];
    do {
        let randomProductID = Math.floor(Math.random() * 100 + 1);
        if (!temp.includes(randomProductID)) {
            temp.push(randomProductID);
            let randomProduct = products.filter((product) => {
                return product.prod_id === parseInt(randomProductID);
            });
            randomRecommendationList.push(randomProduct[0]);
        }
    } while (randomRecommendationList.length !== 3);
    const comments = ["Lorem ipsum dolor sit amet.", "Sed id risus quis diam", "lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet"];
    const photos = ["https://source.unsplash.com/random/300x301", "https://source.unsplash.com/random/500x502", "https://source.unsplash.com/random/400x403"];
    randomRecommendationList.forEach((item, index) => {
        item.comment = comments[index];
        item.photo = photos[index];
    });

    let randomProductList = [];
    let temp2 = [];
    do {
        let randomProductID = Math.floor(Math.random() * 100 + 1);
        if (!temp2.includes(randomProductID)) {
            temp2.push(randomProductID);
            let randomProduct = products.filter((product) => {
                return product.prod_id === parseInt(randomProductID);
            });
            randomProductList.push(randomProduct[0]);
        }
    } while (randomProductList.length !== 12);

    return (
        <div className="main">
            <div className="contents">
                <Category></Category>
                <div className="center">
                    <div id="section-1">
                        <MainRecommendation></MainRecommendation>
                    </div>

                    <div id="section-2">
                        <h2>Top Selling</h2>
                        <div className="item-list">
                            <BigItems list={randomRecommendationList}></BigItems>
                        </div>
                    </div>

                    <div id="section-3">
                        <div className="top">
                            <h2>Choice of Health</h2>
                            <div className="control">
                                <span className="prev" onClick={() => { handleScrollPrevious("#section-3 .item-list .small-items") }}><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" /></svg></span>
                                <span className="next" onClick={() => { handleScrollNext("#section-3 .item-list .small-items") }}><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" /></svg></span>
                            </div>
                        </div>
                        <div className="item-list">
                            <div className="prev"></div>
                            <SmallItems list={randomProductList} mode=""></SmallItems>
                            <div className="next"></div>
                        </div>
                    </div>

                    <div id="section-4">
                        <div className="top">
                            <h2>Ut dolor vivamus malesuada condimentum</h2>
                            <div className="control">
                                <span className="prev" onClick={() => { handleScrollPrevious("#section-4 .item-list .small-items") }}><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" /></svg></span>
                                <span className="next" onClick={() => { handleScrollNext("#section-4 .item-list .small-items") }}><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" /></svg></span>
                            </div>
                        </div>
                        <div className="item-list">
                            <div className="prev"></div>
                            <SmallItems list={randomProductList} mode=""></SmallItems>
                            <div className="next"></div>
                        </div>
                    </div>
                </div>

                <Promotions></Promotions>
            </div>
        </div>
    );
};

export default Main;
