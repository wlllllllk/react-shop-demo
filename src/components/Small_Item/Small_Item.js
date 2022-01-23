import "./style.scss";
import { useDispatch } from "react-redux";

const Small_Item = (item) => {
  const dispatch = useDispatch();

  function addCart(item_add) {
    dispatch({
      type: "ADD_CART",
      item: item_add
    });
  }

  return (
    <div className="small-item">
      <div className="photo">
        {/* <img src={`src/photos/${item.id - item.photo}.webp`} alt="" /> */}
        <img src={item.item.photo} alt="" />
      </div>

      <div className="name" title={item.item.name}>{item.item.name}</div>

      <div className="ratings">
        <div className="stars"></div>
        <div className="number">{item.item.stars !== Math.floor(item.item.stars) ? item.item.stars : `${item.item.stars}.0`}</div>
      </div>

      <div className="price">
        <div className="current-price">${item.item.current}</div>
        <div className="original-price">${item.item.original}</div>
      </div>

      <div className="add-to-cart" onClick={() => { addCart(item.item); }}>
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.428223" width="30" height="30" rx="3" fill="#8BB457" />
          <path
            d="M16.0003 12.4284C16.0003 12.2516 15.9301 12.082 15.8051 11.957C15.68 11.832 15.5104 11.7617 15.3336 11.7617C15.1568 11.7617 14.9872 11.832 14.8622 11.957C14.7372 12.082 14.6669 12.2516 14.6669 12.4284V14.4285H12.6669C12.4901 14.4285 12.3205 14.4987 12.1955 14.6238C12.0705 14.7488 12.0002 14.9184 12.0002 15.0952C12.0002 15.272 12.0705 15.4416 12.1955 15.5666C12.3205 15.6916 12.4901 15.7619 12.6669 15.7619H14.6669V17.7619C14.6669 17.9388 14.7372 18.1083 14.8622 18.2334C14.9872 18.3584 15.1568 18.4286 15.3336 18.4286C15.5104 18.4286 15.68 18.3584 15.8051 18.2334C15.9301 18.1083 16.0003 17.9388 16.0003 17.7619V15.7619H18.0004C18.1772 15.7619 18.3468 15.6916 18.4718 15.5666C18.5968 15.4416 18.6671 15.272 18.6671 15.0952C18.6671 14.9184 18.5968 14.7488 18.4718 14.6238C18.3468 14.4987 18.1772 14.4285 18.0004 14.4285H16.0003V12.4284Z"
            fill="white"
          />
          <path
            d="M4.66672 6.42822C4.4899 6.42822 4.32033 6.49846 4.1953 6.62349C4.07027 6.74852 4.00003 6.9181 4.00003 7.09492C4.00003 7.27174 4.07027 7.44131 4.1953 7.56634C4.32033 7.69137 4.4899 7.76161 4.66672 7.76161H6.14676L6.68144 9.90437L8.67883 20.5515C8.70743 20.7043 8.78851 20.8423 8.90806 20.9416C9.0276 21.0409 9.17809 21.0954 9.33352 21.0955H10.6669C9.95963 21.0955 9.28133 21.3765 8.78122 21.8766C8.28111 22.3767 8.00015 23.055 8.00015 23.7623C8.00015 24.4696 8.28111 25.1479 8.78122 25.648C9.28133 26.1481 9.95963 26.4291 10.6669 26.4291C11.3742 26.4291 12.0525 26.1481 12.5526 25.648C13.0527 25.1479 13.3336 24.4696 13.3336 23.7623C13.3336 23.055 13.0527 22.3767 12.5526 21.8766C12.0525 21.3765 11.3742 21.0955 10.6669 21.0955H20.0005C19.2932 21.0955 18.6149 21.3765 18.1148 21.8766C17.6147 22.3767 17.3338 23.055 17.3338 23.7623C17.3338 24.4696 17.6147 25.1479 18.1148 25.648C18.6149 26.1481 19.2932 26.4291 20.0005 26.4291C20.7078 26.4291 21.3861 26.1481 21.8862 25.648C22.3863 25.1479 22.6672 24.4696 22.6672 23.7623C22.6672 23.055 22.3863 22.3767 21.8862 21.8766C21.3861 21.3765 20.7078 21.0955 20.0005 21.0955H21.3339C21.4893 21.0954 21.6398 21.0409 21.7593 20.9416C21.8789 20.8423 21.96 20.7043 21.9886 20.5515L23.9886 9.88437C24.0066 9.78815 24.0032 9.68914 23.9787 9.59438C23.9541 9.49962 23.909 9.41144 23.8465 9.33609C23.784 9.26074 23.7057 9.20008 23.6171 9.15841C23.5285 9.11674 23.4318 9.0951 23.3339 9.09501H7.85348L7.31346 6.93358C7.27747 6.78928 7.19427 6.66116 7.0771 6.5696C6.95992 6.47803 6.81549 6.42826 6.66678 6.42822H4.66672ZM9.88687 19.7621L8.13615 10.4284H22.5312L20.7805 19.7621H9.88687V19.7621ZM12.0003 23.7623C12.0003 24.116 11.8598 24.4551 11.6097 24.7052C11.3597 24.9552 11.0205 25.0957 10.6669 25.0957C10.3133 25.0957 9.97411 24.9552 9.72406 24.7052C9.474 24.4551 9.33352 24.116 9.33352 23.7623C9.33352 23.4087 9.474 23.0695 9.72406 22.8195C9.97411 22.5694 10.3133 22.4289 10.6669 22.4289C11.0205 22.4289 11.3597 22.5694 11.6097 22.8195C11.8598 23.0695 12.0003 23.4087 12.0003 23.7623V23.7623ZM21.3339 23.7623C21.3339 24.116 21.1934 24.4551 20.9433 24.7052C20.6933 24.9552 20.3541 25.0957 20.0005 25.0957C19.6469 25.0957 19.3077 24.9552 19.0577 24.7052C18.8076 24.4551 18.6671 24.116 18.6671 23.7623C18.6671 23.4087 18.8076 23.0695 19.0577 22.8195C19.3077 22.5694 19.6469 22.4289 20.0005 22.4289C20.3541 22.4289 20.6933 22.5694 20.9433 22.8195C21.1934 23.0695 21.3339 23.4087 21.3339 23.7623V23.7623Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Small_Item;
