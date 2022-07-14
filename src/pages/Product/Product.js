// import BigItems from "../../components/Big_Items/Big_Items.js";
// import Category from "../../components/Category/Category.js";
// import MainRecommendation from "../../components/Main_Recommendation/Main_Recommendation.js";
// import Promotions from "../../components/Promotions/Promotions.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import SmallItem from "../../components/Small_Item/Small_Item.js";
import SmallItems from "../../components/Small_Items/Small_Items.js";

import "./style.scss";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [amount, setAmount] = useState(1);

  const { productID } = useParams();
  //   let productID_number = parseInt(productID);

  const products = require("../../database/products-new.json");
  let result = products.filter((product) => {
    return product.prod_id === parseInt(productID);
  });

  const currentProduct = result[0];

  let randomProductList = [];
  for (let i = 0; i < 12; i++) {
    let randomProductID = Math.floor(Math.random() * 12 + 1);
    let randomProduct = products.filter((product) => {
      return product.prod_id === parseInt(randomProductID);
    });
    randomProductList.push(randomProduct[0]);
  }

  const stars = currentProduct.stars;
  const star_array = [];
  for (let i = 0; i < Math.round(stars); i++) {
    star_array.push("");
  }

  const modifyAmount = (type) => {
    let currentAmount = amount;
    if (type === "decrease" && currentAmount > 1) {
      currentAmount--;
    } else if (type === "increase") {
      currentAmount++;
    }

    setAmount(currentAmount);
  };

  return (
    <div className="product-main">
      <div className="first">
        <div className="photo">
          <div className="main-photo">
            <img src="https://source.unsplash.com/random/500x500" alt="" />
          </div>
          <div className="photo-list">
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
          </div>
        </div>
        <div className="text">
          <div className="name">{currentProduct.name}</div>
          <div className="small-heading origin">Country of Origin: Japan</div>
          <div className="price">
            <span className="small-heading">Price:</span>
            <span className="current-price">${currentProduct.cur_price}</span>
            <span className="original-price">${currentProduct.orig_price}</span>
            <span className="discount">
              Saved ${(currentProduct.orig_price - currentProduct.cur_price).toFixed(2)} (
              {(
                ((currentProduct.orig_price - currentProduct.cur_price) /
                  currentProduct.orig_price) *
                100
              ).toFixed(2)}
              %)
            </span>
          </div>
          <div className="special">
            <div className="deliver-by-tomorrow">
              <span>Delivered by tomorrow</span>
            </div>
            <div className="low-stock-remain">
              <span>Low Stocks Remain</span>
            </div>
          </div>
          <div className="review">
            <span className="star-container">
              {star_array.map((star, index) => (
                <div className="star" key={index}>
                  {star}
                </div>
              ))}
            </span>
            <span className="small-heading">
              <a className="review-counts" href="#reviews">
                69 customer reviews
              </a>
            </span>
          </div>
          <div className="option-container">
            <div className="small-heading separate-with-line">Options</div>
            <div className="option-list">
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
              <span className="option"></span>
            </div>
          </div>
          <div className="quantity">
            <div className="small-heading separate">Quantity</div>
            <span className="quantity-selector">
              <button
                onClick={() => {
                  modifyAmount("decrease");
                }}
              ></button>
              <input id="amount" type="text" value={amount} />
              <button
                onClick={() => {
                  modifyAmount("increase");
                }}
              ></button>
            </span>
          </div>
          <div className="buy-button">
            <button>Buy Now</button>
          </div>
          <div className="add-button">
            <button>Add to Wishlist</button>
            <button>Add to Cart</button>
          </div>
          <div className="basics">
            <div className="small-heading separate-with-line">
              Basic Information
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              dictum condimentum justo, purus nunc, non. Sed vitae nibh congue
              viverra magna placerat pellentesque risus. Tempor, pretium pretium
              convallis nulla proin tincidunt vitae sem. Et, accumsan, vitae mi
              enim netus faucibus ullamcorper enim. Odio aenean vulputate purus
              justo, sagittis leo.
              <br></br>
              <br></br>
              Et ornare mauris magna viverra magnis nullam lorem. Odio phasellus
              tortor quisque enim tellus sem quisque arcu. Id pretium morbi
              facilisis eget elit arcu ut nunc, volutpat. Amet nisi donec
              faucibus dignissim sagittis. Lobortis fermentum egestas euismod
              vitae tellus tellus nibh. Duis gravida viverra lorem commodo.
              <br></br>
              <br></br>
              Sed imperdiet placerat sed leo dignissim malesuada consequat sem.
              Magna leo tellus felis cursus faucibus venenatis turpis. Tristique
              congue in orci, lectus magna enim, sem. Volutpat, proin ut eu et
              nunc cras tincidunt varius risus.
              <br></br>
              <br></br>
              Ullamcorper dui risus scelerisque nibh odio nec non. Proin cras
              aliquam.
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="small-heading separate">Product Description</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          fringilla sagittis, ac id. Euismod habitant nuncmauris ultricies et
          lorem viverra cras placerat. Vulputate tincidunt elementum velit nibh
          habitant suspendisse. Id adipiscing tristique enim gravida ultricies
          sagittis, tempus. Sed volutpat luctus porttitor molestie massa at
          dictum dolor. Commodo tortor volutpat diam, viverra pellentesque
          mauris bibendum mauris.
          <br /> <br />
          Scelerisque donec enim pretium odio commodo amet, vestibulum ornare
          euismod. Auctor pellentesque ac sed bibendum blandit malesuada donec
          odio. Massa vel ut elit commodo urna, in in velit. Id ornare eu non
          lectus. Praesent lorem ullamcorper suspendisse cursus in pulvinar
          neque urna.
          <br /> <br />
          Nunc mattis imperdiet amet egestas nisi, ut malesuada habitasse. Nunc
          ullamcorper id facilisi at vitae. Id feugiat eu, at vulputate. Sed
          tortor pharetra, tristique suspendisse dignissim ut ac scelerisque
          sed. Aliquet scelerisque quisque eget eget auctor sem scelerisque
          lectus. Quam tincidunt sapien viverra vel, dui vel morbi. Vitae
          ullamcorper cum nisi amet. Mattis ipsum tristique integer dolor risus
          congue. Cursus iaculis dolor ipsum, mauris sollicitudin vivamus nibh
          sagittis. Nunc augue dictum sagittis mi sed ullamcorper habitasse.
          <br /> <br />
          Arcu malesuada porttitor cras dolor nunc, nisl arcu, auctor. Enim
          nullam congue elementum, amet id in ornare amet. Nulla in nulla sit
          commodo tellus. Vivamus lobortis vitae vitae lorem id ornare vitae a.
          Et eget aliquam aliquam ligula convallis dolor, fringilla mattis. Elit
          commodo id pharetra laoreet pharetra enim. Nec at vitae magnis
          vestibulum orci vel. Velit sapien, lobortis at tellus vitae nulla
          malesuada adipiscing elit. Lorem purus morbi ut netus. In ac a,
          adipiscing sed vulputate ut. Viverra mattis interdum elementum porta
          tristique felis sed praesent blandit. Purus magnis eget nisi, ut
          scelerisque pharetra ut.
          <br /> <br />
          Nunc tortor sed sodales augue massa. Consectetur magna sit elit orci.
          Venenatis amet, sit porttitor tellus tellus. Nisl, est, in massa
          libero amet magna non amet, egestas. Platea ut faucibus lacus,
          dignissim. Ut dui turpis aenean urna sit magna proin. Cum non feugiat
          eleifend imperdiet ante mi. Convallis ut hendrerit nunc platea etiam
          risus, sit. Id risus nulla tellus suspendisse nunc in donec libero
          lorem.
        </p>
      </div>
      <div className="third">
        <div className="s{mall-heading separate-with-line">Similar Items</div>
        <SmallItems list={randomProductList} mode=""></SmallItems>
      </div>
      <div className="fourth">
        <div className="small-heading separate-with-line">
          Frequently Asked Questions
        </div>
        <div className="faq-container">
          <div className="question">
            <span>Question:</span>
            <span>Real question</span>
          </div>
          <div className="answer">
            <span>Answer:</span>
            <span>Real answer</span>
          </div>
        </div>
        <div className="faq-container">
          <div className="question">
            <span>Question:</span>
            <span>Real question</span>
          </div>
          <div className="answer">
            <span>Answer:</span>
            <span>Real answer</span>
          </div>
        </div>
        <div className="faq-container">
          <div className="question">
            <span>Question:</span>
            <span>Real question</span>
          </div>
          <div className="answer">
            <span>Answer:</span>
            <span>Real answer</span>
          </div>
        </div>
        <div className="faq-container">
          <div className="question">
            <span>Question:</span>
            <span>Real question</span>
          </div>
          <div className="answer">
            <span>Answer:</span>
            <span>Real answer</span>
          </div>
        </div>
        <div className="faq-container">
          <div className="question">
            <span>Question:</span>
            <span>Real question</span>
          </div>
          <div className="answer">
            <span>Answer:</span>
            <span>Real answer</span>
          </div>
        </div>
      </div>
      <div className="fifth" id="reviews">
        <div className="small-heading separate-with-line">Customer Reviews</div>
        <div className="both">
          <div className="left">
            <div className="review-stats">
              <div className="general-stats">
                <span className="star-container">
                  {star_array.map((star, index) => (
                    <div className="star" key={index}>
                      {star}
                    </div>
                  ))}
                </span>
                <span className="number">{stars.toFixed(1)} out of 5</span>
              </div>
              <div className="review-count">69 total reviews</div>
              <div className="detailed-stats">
                {[5, 4, 3, 2, 1].map((score, index) => (
                  <div className="bar" index={index}>
                    <span>{score} star</span>
                    <div>
                      <div style={{ width: score * 10 + "%" }}></div>
                    </div>
                    <span>{score * 10}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="write-review">
              <div className="small-heading separate-with-line">
                Review this product
              </div>
              <div> We'd love to hear your thoughts</div>
              <button>Write a review</button>
            </div>
          </div>
          <div className="right">
            <h4>Top Reviews</h4>
            <div className="reviews-container">
              <div className="review">
                <div className="customer-information">
                  <span className="customer-photo"></span>
                  <span className="customer-name">James</span>
                </div>
                <div className="ratings">
                  <span className="star-container">
                    {star_array.map((star, index) => (
                      <div className="star" key={index}>
                        {star}
                      </div>
                    ))}
                  </span>
                  <span className="review-title">
                    Best product I have ever bought!
                  </span>
                </div>
                <div className="full-text">
                  <p>
                    Ac tincidunt aliquam fermentum risus dignissim ultrices
                    purus. Consectetur bibendum elementum turpis diam quam ut
                    vestibulum morbi. Scelerisque sed eu, cursus lacus
                    vestibulum, pretium in arcu fermentum.
                  </p>
                </div>
              </div>
              <div className="review">
                <div className="customer-information">
                  <span className="customer-photo"></span>
                  <span className="customer-name">A Random Customer</span>
                </div>
                <div className="ratings">
                  <span className="star-container">
                    {star_array.map((star, index) => (
                      <div className="star" key={index}>
                        {star}
                      </div>
                    ))}
                  </span>
                  <span className="review-title">
                    Faucibus nunc pretium at vel egestas.{" "}
                  </span>
                </div>
                <div className="full-text">
                  <p>
                    Sed lorem ut enim aliquam viverra urna vivamus fermentum.
                    Est nibh semper pretium tempor sed leo. Lectus purus velit
                    nulla mauris euismod mi feugiat proin. Ultrices egestas a,
                    posuere ipsum velit augue non nunc. Massa massa vitae urna,
                    sed.
                  </p>
                </div>
                <div className="image-container">
                  <span className="image"></span>
                  <span className="image"></span>
                  <span className="image"></span>
                  <span className="image"></span>
                  <span className="image"></span>
                </div>
              </div>
              <div className="review">
                <div className="customer-information">
                  <span className="customer-photo"></span>
                  <span className="customer-name">A Random Customer</span>
                </div>
                <div className="ratings">
                  <span className="star-container">
                    {star_array.map((star, index) => (
                      <div className="star" key={index}>
                        {star}
                      </div>
                    ))}
                  </span>
                  <span className="review-title">
                    Faucibus nunc pretium at vel egestas.{" "}
                  </span>
                </div>
                <div className="full-text">
                  <p>
                    Sed lorem ut enim aliquam viverra urna vivamus fermentum.
                    Est nibh semper pretium tempor sed leo. Lectus purus velit
                    nulla mauris euismod mi feugiat proin. Ultrices egestas a,
                    posuere ipsum velit augue non nunc. Massa massa vitae urna,
                    sed.
                  </p>
                </div>
              </div>
              <div className="view-all-reviews">View All Reviews</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sixth">
        <div className="small-heading separate-with-line">
          You maybe interested in these items as well
        </div>
        <SmallItems list={randomProductList} mode=""></SmallItems>
        {/* <div className="product-container">
          <span className="product"></span>
          <span className="product"></span>
          <span className="product"></span>
          <span className="product"></span>
          <span className="product"></span>
          <span className="product"></span>
          <span className="product"></span>
          <span className="product"></span>
          <span className="product"></span>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
