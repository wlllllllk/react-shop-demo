import "./style.scss";
import { useDispatch } from "react-redux";
import { open } from '../../features/chatSlice';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer>
      <div className="contents">
        <div className="sub-section" id="benefits">
          <div className="item" id="delivery">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.375 37.5H37.5V42.1875H9.375V37.5Z" fill="white" />
              <path
                d="M4.6875 25.7812H28.125V30.4688H4.6875V25.7812Z"
                fill="white"
              />
              <path
                d="M70.1227 38.9203L63.0914 22.5141C62.911 22.0924 62.6107 21.733 62.2277 21.4805C61.8448 21.228 61.3962 21.0935 60.9375 21.0938H53.9063V16.4063C53.9063 15.7846 53.6593 15.1885 53.2198 14.749C52.7803 14.3094 52.1841 14.0625 51.5625 14.0625H14.0625V18.75H49.2188V48.1781C48.1508 48.7983 47.2162 49.6237 46.4688 50.6068C45.7214 51.59 45.176 52.7113 44.8641 53.9063H30.136C29.5655 51.6969 28.2089 49.7714 26.3203 48.4908C24.4318 47.2101 22.141 46.6622 19.8774 46.9497C17.6137 47.2372 15.5327 48.3405 14.0243 50.0526C12.5159 51.7647 11.6837 53.9682 11.6837 56.25C11.6837 58.5318 12.5159 60.7353 14.0243 62.4474C15.5327 64.1595 17.6137 65.2628 19.8774 65.5503C22.141 65.8378 24.4318 65.2899 26.3203 64.0092C28.2089 62.7286 29.5655 60.8031 30.136 58.5938H44.8641C45.3739 60.6053 46.5399 62.3893 48.1776 63.6637C49.8153 64.9381 51.8312 65.63 53.9063 65.63C55.9814 65.63 57.9972 64.9381 59.6349 63.6637C61.2726 62.3893 62.4386 60.6053 62.9485 58.5938H67.9688C68.5904 58.5938 69.1865 58.3468 69.6261 57.9073C70.0656 57.4678 70.3125 56.8716 70.3125 56.25V39.8438C70.3126 39.5262 70.248 39.212 70.1227 38.9203ZM21.0938 60.9375C20.1667 60.9375 19.2604 60.6626 18.4895 60.1475C17.7187 59.6325 17.1179 58.9004 16.7631 58.0438C16.4083 57.1873 16.3155 56.2448 16.4963 55.3355C16.6772 54.4262 17.1236 53.591 17.7792 52.9354C18.4348 52.2799 19.27 51.8334 20.1793 51.6526C21.0886 51.4717 22.0311 51.5645 22.8876 51.9193C23.7441 52.2741 24.4762 52.8749 24.9913 53.6458C25.5064 54.4166 25.7813 55.3229 25.7813 56.25C25.78 57.4928 25.2858 58.6844 24.407 59.5632C23.5282 60.442 22.3366 60.9363 21.0938 60.9375ZM53.9063 25.7813H59.3906L64.4156 37.5H53.9063V25.7813ZM53.9063 60.9375C52.9792 60.9375 52.0729 60.6626 51.302 60.1475C50.5312 59.6325 49.9304 58.9004 49.5756 58.0438C49.2208 57.1873 49.128 56.2448 49.3088 55.3355C49.4897 54.4262 49.9361 53.591 50.5917 52.9354C51.2473 52.2799 52.0825 51.8334 52.9918 51.6526C53.9011 51.4717 54.8436 51.5645 55.7001 51.9193C56.5566 52.2741 57.2887 52.8749 57.8038 53.6458C58.3188 54.4166 58.5938 55.3229 58.5938 56.25C58.5925 57.4928 58.0983 58.6844 57.2195 59.5632C56.3407 60.442 55.1491 60.9363 53.9063 60.9375ZM65.625 53.9063H62.9485C62.4322 51.8987 61.2643 50.1192 59.6279 48.8467C57.9915 47.5742 55.9792 46.8808 53.9063 46.875V42.1875H65.625V53.9063Z"
                fill="white"
              />
            </svg>
            <h2>Free Delivery on All Orders</h2>
          </div>
          <div className="v-separator"></div>
          <div className="item" id="return">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.25 26.25V48.75C71.25 52.8863 67.89 56.25 63.75 56.25H11.25V45H60V30H18.75V37.5L3.75 24.375L18.75 11.25V18.75H63.75C65.7391 18.75 67.6468 19.5402 69.0533 20.9467C70.4598 22.3532 71.25 24.2609 71.25 26.25Z"
                fill="white"
              />
            </svg>
            <h2>30 Days Free Returns</h2>
          </div>
        </div>

        {/* <div className="h-separator"></div> */}

        <div className="sub-section" id="helps">
          <h2>Need help?</h2>
          <div className="details">
            <h3>Shopping Guide</h3>
            <div className="v-separator"></div>
            <h3 onClick={() => { dispatch(open()) }}>Customer Service</h3>
            <div className="v-separator"></div>
            <h3>Return a Product</h3>
          </div>
        </div>

        {/* <div className="h-separator"></div> */}

        <div className="sub-section" id="about">
          <h2>About Us</h2>
          <div className="container">
            <div className="details" id="info">
              <h3>Information</h3>
              <h4>Company Information</h4>
              <h4>Career Opportunities</h4>
              <h4>Business Cooperation</h4>
              <h4>Terms & Conditions</h4>
              <h4>Privacy Policies</h4>
            </div>

            <div className="details" id="location">
              <h3>Store Locations</h3>
              <h4>Kowloon</h4>
              <h4>Hong Kong Island</h4>
              <h4>New Territories</h4>
            </div>

            <div className="details" id="inquiry">
              <h3>Inquiry</h3>
              <h4>FAQ</h4>
              <h4>Order Tracking</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2022 WL. All Rights Reserved. | Last Updated: 29-08-2022</p>
      </div>
    </footer>
  );
};

export default Footer;
