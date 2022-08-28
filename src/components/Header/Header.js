import "./style.scss";

import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { UseCart } from "../../hooks/useCart";
import { useSelector, useDispatch } from "react-redux";
import { close as closeCart, toggle as toggleCart, remove as removeCart, clear as clearCart } from "../../features/cartSlice";
import { close as closeAccount, toggle as toggleAccount } from "../../features/accountSlice";
import { useMediaQuery } from 'react-responsive'

const Header = () => {
  const navigate = useNavigate();
  const isCartOpened = useSelector((state) => state.cart.isCartOpened);
  const isAccountOpened = useSelector((state) => state.account.isAccountOpened);
  const cartItem = useSelector((state) => state.cart.cartItem);
  const numOfItem = useSelector((state) => state.cart.numOfItem);

  const dispatch = useDispatch();

  // const [isCart, setCart] = useState(false);
  // const [isAccount, setAccount] = useState(false);

  // const [isEdit, setEdit] = useState(false);
  // const [isAllSelected, setAllSelected] = useState(false);

  // const [counter, setCounter] = useState(0);
  // const [selectedItems, setSelectedItems] = useState([]);

  const [isMenuOpened, setMenuOpened] = useState(false);
  const [isSearchOpened, setSearchOpened] = useState(false);

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 800px)'
  })

  useEffect(() => { setSearchOpened(false) }, [isSmallScreen]);

  const handleCart = () => {
    dispatch(closeAccount());
    dispatch(toggleCart());
    // handleUpdateSelectedItems();
  };

  const handleAccount = () => {
    dispatch(closeCart());
    dispatch(toggleAccount());
  };

  const handleItemOnClick = () => {
    alert("TODO: View product details");
  };

  // const handleEdit = () => {
  //   if (!isEdit) {
  //     setEdit(true);
  //     setAllSelected(false);
  //   } else {
  //     setEdit(false);
  //     // clearSelected();
  //   }
  // };

  // const handleSelect = (id) => {
  //   const currentlySelected = [...selectedItems];
  //   console.log(id);

  //   if (!currentlySelected.includes(id)) {
  //     currentlySelected.push(id);

  //     if (currentlySelected.length === cartItem.length) {
  //       setAllSelected(true);
  //     }

  //     setSelectedItems(currentlySelected);
  //   } else {
  //     let filtered = currentlySelected.filter((cs) => cs !== id);
  //     setSelectedItems(filtered);
  //     setAllSelected(false);
  //   }
  // };

  const handleBuy = () => {
    dispatch(closeCart());
    navigate("/checkout");
    // if (selectedItems.length === 0) {
    //   alert("TODO: Nothing is selected");
    // } else {
    //   alert("TODO: Buy Items | " + selectedItems);
    // }
  };

  // const handleUpdateSelectedItems = () => {
  //   const checkboxes = document.querySelectorAll(".selector");
  //   checkboxes.forEach((checkbox) => {
  //     // console.log(checkbox.attributes['data-id'].value);
  //     console.log(selectedItems);
  //     if (selectedItems.includes(Number(checkbox.attributes['data-id'].value))) {
  //       console.log("inside");
  //       checkbox.checked = true;
  //       console.log(checkbox);
  //     }
  //   });
  // };

  // const handleSelectAll = () => {
  //   const checkboxes = document.querySelectorAll(".selector");
  //   const currentlySelected = [];

  //   if (!isAllSelected) {
  //     setAllSelected(true);
  //     checkboxes.forEach((checkbox) => {
  //       checkbox.checked = true;
  //     });

  //     cartItem.forEach((item) => {
  //       console.log(item);
  //       if (!currentlySelected.includes(item.prod_id)) {
  //         currentlySelected.push(item.prod_id);
  //       }
  //     });

  //     setSelectedItems(currentlySelected);
  //   } else {
  //     setAllSelected(false);
  //     checkboxes.forEach((checkbox) => {
  //       checkbox.checked = false;
  //     });
  //     setSelectedItems([]);
  //   }
  // };

  const handleClearAll = () => {
    // const currentlySelected = selectedItems;
    // if (!currentlySelected.length > 0) alert("Nothing is selected!");
    // else {

    if (
      window.confirm("Are you sure to delete these products from your cart?")
    ) {
      dispatch(clearCart());
      // const removeList = cartItem.map(item => item.prod_id);
      // console.log(removeList);
      // dispatch(removeCart(removeList));
      // clearSelected();
      // dispatch(removeCart(currentlySelected));
    }
    // }
  };

  const handleMenuOnClick = () => {
    // setMenuOpened(!isMenuOpened);
    alert("TODO: menu");
  };

  const handleSearchOnClick = () => {
    setSearchOpened(!isSearchOpened);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // setSearchOpened(false);
    let keywords = event.target[0].value;
    navigate(`/search/${keywords}`);
  };

  // function clearSelected() {
  //   const checkboxes = document.querySelectorAll(".selector");
  //   checkboxes.forEach((checkbox) => {
  //     checkbox.checked = false;
  //   });
  //   setSelectedItems([]);
  // }

  return (
    <header>
      <div className="contents">
        {isMenuOpened ?
          <div className="menu-content">
            TODO: add menu
          </div>
          :
          <></>
        }

        {/* search bar in small screen  */}
        {isSearchOpened && isSmallScreen ?
          <div className="search-container">
            <div className="searchBar">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  id="bar"
                  name="name"
                  placeholder="Type to Search..."
                />
                <button className="button" id="searchIcon" type="submit"></button>
              </form>
            </div>
            <span onClick={handleSearchOnClick}></span>
          </div>
          :
          <></>
        }

        <span id="menu-icon" onClick={handleMenuOnClick}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5H25V10H5V7.5ZM5 13.75H25V16.25H5V13.75ZM5 20H25V22.5H5V20Z"
              fill="black"
            />
          </svg>
        </span>
        <svg
          id="logo"
          width="180"
          height="36"
          viewBox="0 0 180 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => { navigate("/") }}
        >
          <path d="M180 0H0V36H180V0Z" fill="white" />
          <path
            d="M173.053 7.57898H152.842V10.1053H173.053V7.57898ZM174.316 20.2106V17.6842L173.053 11.3685H152.842L151.579 17.6842V20.2106H152.842V27.7896H165.474V20.2106H170.526V27.7896H173.053V20.2106H174.316ZM162.947 25.2631H155.368V20.2106H162.947V25.2631Z"
            fill="#8BB457"
          />
          <path
            d="M18.4367 25.9046C17.1563 26.3931 15.7759 26.6373 14.2957 26.6373C8.54485 26.6373 5.66943 23.8803 5.66943 18.3663C5.66943 13.1484 8.44492 10.5394 13.9959 10.5394C15.5872 10.5394 17.0674 10.7615 18.4367 11.2055V12.9819C17.0674 12.4638 15.6612 12.2047 14.218 12.2047C9.88818 12.2047 7.72329 14.2586 7.72329 18.3663C7.72329 22.7701 9.85487 24.972 14.118 24.972C14.799 24.972 15.5539 24.8832 16.3828 24.7056V19.31H18.4367V25.9046ZM23.1107 20.6533C23.1107 23.4585 24.2763 24.861 26.6078 24.861C28.9391 24.861 30.1049 23.4585 30.1049 20.6533C30.1049 17.9074 28.9391 16.5345 26.6078 16.5345C24.2763 16.5345 23.1107 17.9074 23.1107 20.6533ZM21.0568 20.6977C21.0568 16.8121 22.907 14.8692 26.6078 14.8692C30.3084 14.8692 32.1588 16.8121 32.1588 20.6977C32.1588 24.576 30.3084 26.5151 26.6078 26.5151C22.922 26.5151 21.0716 24.576 21.0568 20.6977ZM36.433 20.6533C36.433 23.4585 37.5988 24.861 39.9301 24.861C42.2616 24.861 43.4272 23.4585 43.4272 20.6533C43.4272 17.9074 42.2616 16.5345 39.9301 16.5345C37.5988 16.5345 36.433 17.9074 36.433 20.6533ZM34.3791 20.6977C34.3791 16.8121 36.2295 14.8692 39.9301 14.8692C43.6307 14.8692 45.4811 16.8121 45.4811 20.6977C45.4811 24.576 43.6307 26.5151 39.9301 26.5151C36.2443 26.5151 34.3939 24.576 34.3791 20.6977ZM56.0835 17.245C55.2545 16.8453 54.3072 16.6455 53.2414 16.6455C50.8951 16.6455 49.7221 17.8926 49.7221 20.3869C49.7221 23.3401 50.8951 24.8167 53.2414 24.8167C54.3072 24.8167 55.2545 24.6723 56.0835 24.3835V17.245ZM58.1374 25.8269C56.7237 26.2932 54.9807 26.5263 52.9083 26.5263C49.4371 26.5263 47.7015 24.5057 47.7015 20.4646C47.7015 16.7343 49.5444 14.8692 53.2304 14.8692C54.2369 14.8692 55.188 15.0542 56.0835 15.4243V10.6504H58.1374V25.8269ZM66.2751 14.8692C69.5909 14.8692 71.2488 16.5086 71.2488 19.7875C71.2488 20.2537 71.2154 20.7532 71.1489 21.2862H62.9667C62.9667 23.6694 64.3582 24.861 67.141 24.861C68.466 24.861 69.6428 24.713 70.6714 24.4169V26.0821C69.6428 26.3783 68.3919 26.5263 66.9191 26.5263C62.9149 26.5263 60.9128 24.5391 60.9128 20.5645C60.9128 16.7676 62.7003 14.8692 66.2751 14.8692ZM62.9667 19.5764H69.2725C69.2282 17.5337 68.2291 16.5123 66.2751 16.5123C64.2028 16.5123 63.0999 17.5337 62.9667 19.5764ZM73.9021 25.9711V24.1948C75.2715 24.6389 76.6554 24.861 78.0543 24.861C79.9121 24.861 80.8409 24.3058 80.8409 23.1957C80.8409 22.1595 80.1932 21.6414 78.898 21.6414H77.2327C74.7163 21.6414 73.458 20.4942 73.458 18.1998C73.458 15.9794 75.0752 14.8692 78.3097 14.8692C79.7012 14.8692 81.0815 15.0542 82.4506 15.4243V17.2006C81.0815 16.7565 79.7012 16.5345 78.3097 16.5345C76.3704 16.5345 75.4009 17.0896 75.4009 18.1998C75.4009 19.2359 76.0116 19.7541 77.2327 19.7541H78.898C81.5626 19.7541 82.8948 20.9012 82.8948 23.1957C82.8948 25.4161 81.2812 26.5263 78.0543 26.5263C76.6554 26.5263 75.2715 26.3412 73.9021 25.9711ZM85.6702 12.9819H86.958L87.4021 14.8692H90.5552V16.5345H87.7241V23.2291C87.7241 24.317 88.1941 24.861 89.1341 24.861H90.5552V26.5263H88.6011C86.6473 26.5263 85.6702 25.4791 85.6702 23.3844V12.9819ZM98.9483 26.5263V10.6504H101.557L107.386 23.8951L113.103 10.6504H115.601V26.5263H113.769V13.5036L108.13 26.5263H106.509L100.78 13.5036V26.5263H98.9483ZM118.599 23.007C118.599 20.6164 120.175 19.421 123.328 19.421C124.342 19.421 125.356 19.4951 126.37 19.6431V18.544C126.37 17.2043 125.323 16.5345 123.228 16.5345C122.029 16.5345 120.801 16.7195 119.542 17.0896V15.4243C120.801 15.0542 122.029 14.8692 123.228 14.8692C126.692 14.8692 128.424 16.0756 128.424 18.4884V26.5263H127.269L126.559 25.3716C125.397 26.1415 124.131 26.5263 122.762 26.5263C119.986 26.5263 118.599 25.3532 118.599 23.007ZM123.328 21.0863C121.544 21.0863 120.652 21.7153 120.652 22.9736C120.652 24.2319 121.356 24.861 122.762 24.861C124.183 24.861 125.386 24.4836 126.37 23.7285V21.3084C125.356 21.1604 124.342 21.0863 123.328 21.0863ZM133.93 10.6504V26.5263H131.877V10.6504H133.93ZM139.548 10.6504V26.5263H137.494V10.6504H139.548Z"
            fill="#8BB457"
          />
        </svg>
        <svg
          id="logo-small"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => { navigate("/") }}
        >
          <path d="M36 0H0V36H36V0Z" fill="white" />
          <path
            d="M28.4736 8H8.26322V10.5263H28.4736V8ZM29.7368 20.6316V18.1053L28.4736 11.7895H8.26322L7 18.1053V20.6316H8.26322V28.2106H20.8947V20.6316H25.9474V28.2106H28.4736V20.6316H29.7368ZM18.3684 25.6841H10.7895V20.6316H18.3684V25.6841Z"
            fill="#8BB457"
          />
        </svg>


        <span id="search-icon" onClick={handleSearchOnClick}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6562 21.5516L16.7562 15.6516C18.1741 13.9495 18.8811 11.7663 18.7302 9.55619C18.5793 7.34609 17.5822 5.27923 15.9463 3.78557C14.3103 2.29192 12.1615 1.48648 9.94684 1.5368C7.73217 1.58712 5.62215 2.48933 4.05573 4.05575C2.48932 5.62216 1.58711 7.73218 1.53678 9.94686C1.48646 12.1615 2.29191 14.3103 3.78556 15.9463C5.27921 17.5822 7.34607 18.5794 9.55617 18.7302C11.7663 18.8811 13.9495 18.1741 15.6516 16.7563L21.5516 22.6563L22.6562 21.5516ZM3.125 10.1563C3.125 8.76561 3.53737 7.40619 4.30998 6.24991C5.08258 5.09363 6.18071 4.19241 7.46551 3.66024C8.7503 3.12806 10.164 2.98882 11.528 3.26012C12.8919 3.53142 14.1448 4.20108 15.1281 5.18442C16.1114 6.16776 16.7811 7.42061 17.0524 8.78454C17.3237 10.1485 17.1845 11.5622 16.6523 12.847C16.1201 14.1318 15.2189 15.2299 14.0626 16.0025C12.9063 16.7751 11.5469 17.1875 10.1562 17.1875C8.29208 17.1854 6.50486 16.444 5.18669 15.1258C3.86852 13.8077 3.12707 12.0204 3.125 10.1563V10.1563Z"
              fill="black"
            />
          </svg>
        </span>
        {/* 
        <span id="cart-icon">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833359 0C0.612338 0 0.40037 0.0877973 0.244085 0.244078C0.0878001 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0878001 1.26631 0.244085 1.42259C0.40037 1.57887 0.612338 1.66667 0.833359 1.66667H2.68342L3.35177 4.345L5.84851 17.6533C5.88426 17.8443 5.98561 18.0168 6.13504 18.1409C6.28447 18.2651 6.47259 18.3332 6.66687 18.3333H8.33359C7.44951 18.3333 6.60164 18.6845 5.9765 19.3096C5.35135 19.9348 5.00015 20.7826 5.00015 21.6667C5.00015 22.5507 5.35135 23.3986 5.9765 24.0237C6.60164 24.6488 7.44951 25 8.33359 25C9.21767 25 10.0655 24.6488 10.6907 24.0237C11.3158 23.3986 11.667 22.5507 11.667 21.6667C11.667 20.7826 11.3158 19.9348 10.6907 19.3096C10.0655 18.6845 9.21767 18.3333 8.33359 18.3333H20.0006C19.1165 18.3333 18.2687 18.6845 17.6435 19.3096C17.0184 19.9348 16.6672 20.7826 16.6672 21.6667C16.6672 22.5507 17.0184 23.3986 17.6435 24.0237C18.2687 24.6488 19.1165 25 20.0006 25C20.8847 25 21.7326 24.6488 22.3577 24.0237C22.9829 23.3986 23.3341 22.5507 23.3341 21.6667C23.3341 20.7826 22.9829 19.9348 22.3577 19.3096C21.7326 18.6845 20.8847 18.3333 20.0006 18.3333H21.6673C21.8616 18.3332 22.0497 18.2651 22.1992 18.1409C22.3486 18.0168 22.4499 17.8443 22.4857 17.6533L24.9858 4.32C25.0083 4.19973 25.004 4.07597 24.9733 3.95753C24.9426 3.83908 24.8862 3.72886 24.8081 3.63467C24.73 3.54049 24.6321 3.46467 24.5213 3.41258C24.4106 3.3605 24.2898 3.33345 24.1674 3.33333H4.81682L4.14179 0.631667C4.09681 0.451306 3.99281 0.291165 3.84634 0.176708C3.69986 0.0622511 3.51933 5.13525e-05 3.33344 0H0.833359ZM7.35856 16.6667L5.17016 5H23.164L20.9756 16.6667H7.35856V16.6667ZM10.0003 21.6667C10.0003 22.1087 9.82471 22.5326 9.51214 22.8452C9.19957 23.1577 8.77563 23.3333 8.33359 23.3333C7.89155 23.3333 7.46761 23.1577 7.15504 22.8452C6.84247 22.5326 6.66687 22.1087 6.66687 21.6667C6.66687 21.2246 6.84247 20.8007 7.15504 20.4882C7.46761 20.1756 7.89155 20 8.33359 20C8.77563 20 9.19957 20.1756 9.51214 20.4882C9.82471 20.8007 10.0003 21.2246 10.0003 21.6667V21.6667ZM21.6673 21.6667C21.6673 22.1087 21.4917 22.5326 21.1792 22.8452C20.8666 23.1577 20.4427 23.3333 20.0006 23.3333C19.5586 23.3333 19.1346 23.1577 18.8221 22.8452C18.5095 22.5326 18.3339 22.1087 18.3339 21.6667C18.3339 21.2246 18.5095 20.8007 18.8221 20.4882C19.1346 20.1756 19.5586 20 20.0006 20C20.4427 20 20.8666 20.1756 21.1792 20.4882C21.4917 20.8007 21.6673 21.2246 21.6673 21.6667V21.6667Z"
              fill="black"
            />
          </svg>
        </span> */}

        {/* original search bar */}
        <div className="searchBar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              id="bar"
              name="name"
              placeholder="Type to Search..."
            />
            <button className="button" id="searchIcon" type="submit"></button>
          </form>
        </div>
        <div className="action">
          <div className="cart">
            <button
              className="button"
              id="cart-button"
              onClick={handleCart}
            ></button>
            {cartItem.length > 0 ? (
              <div className="counter">{numOfItem}</div>
            ) : (
              <></>
            )}

            {isCartOpened &&
              <div className="cart-overview">
                {cartItem.length > 0 ?
                  <div className="item-list">
                    <div className="cart-top">
                      <div className="first-row">
                        {/* <button onClick={handleEdit}>
                            {isEdit ? "Cancel" : "Select Items"}
                          </button> */}
                        <button onClick={handleClearAll} className="clear">
                          Clear
                        </button>

                        {/* {isEdit ? (
                            <button onClick={handleClearAll} className="clear">
                              Clear
                            </button>
                          ) : (
                            <></>
                          )} */}

                        <button onClick={handleBuy} className="buy">
                          {/* {selectedItems.length > 0
                              ? selectedItems.length > 1
                                ? `Buy ${selectedItems.length} Items`
                                : `Buy ${selectedItems.length} Item`
                              : "Buy All"} */}
                          {/* {isEdit ? "Buy Selected Items" : "Buy All"} */}
                          {"Buy All"}
                        </button>
                      </div>

                      {/* {isEdit ? (
                          <div className="second-row">
                            <button
                              onClick={handleSelectAll}
                              className={isAllSelected ? "all" : ""}
                            >
                              Select All
                            </button>
                            <div className="number">
                              {selectedItems.length > 0
                                ? selectedItems.length > 1
                                  ? `${selectedItems.length} Items Selected`
                                  : `${selectedItems.length} Item Selected`
                                : "0 Item Selected"}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )} */}
                    </div>
                    {cartItem.map((item, index) => (
                      <div
                        // className={isEdit ? "item editing" : "item"}
                        className={"item"}
                        key={index}
                      >
                        {/* {isEdit ? (
                            <input
                              id={`item-${item.prod_id}`}
                              data-id={item.prod_id}
                              className="selector"
                              type="checkbox"
                              checked={false}
                              onChange={() => {
                                handleSelect(item.prod_id);
                              }}
                            ></input>
                          ) : (
                            <></>
                          )} */}
                        <div
                          className="photo"
                          onClick={handleItemOnClick}
                        ></div>
                        <div className="text">
                          <div className="brief">
                            <div className="title">{item.name}</div>
                            {
                              // isEdit ? (
                              //   <></>
                              // ) : (
                              <div
                                className="delete"
                                onClick={() => {
                                  dispatch(removeCart([item.prod_id]));
                                }}
                              ></div>
                              // )
                            }
                          </div>
                          <div className="details">
                            <div className="quantity">{`Quantity: ${item.quantity}`}</div>
                            <div className="price">
                              ${`${+(item.cur_price * item.quantity).toFixed(1)}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  :
                  <div className="notice">
                    There is nothing in the cart right now :(
                  </div>
                }
              </div>
            }
          </div>
          <div className="account">
            <button
              className="button"
              id="account-button"
              onClick={handleAccount}
            ></button>
            {isAccountOpened ? <div className="account-overview"></div> : <></>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
