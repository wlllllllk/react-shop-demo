import SmallItem from "../Small_Item/Small_Item.js";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const items = [
  {
    id: 4,
    stars: 1.0,
    text: "risus. Duis a mi fringilla mi lacinia",
    photo: "https://source.unsplash.com/random/300x300",
    name: "gravida sit",
    current: 92,
    original: 20,
  },
  {
    id: 5,
    stars: 1.0,
    text: "ornare, elit elit fermentum risus, at fringilla",
    photo: "https://source.unsplash.com/random/300x301",
    name: "Phasellus",
    current: 90,
    original: 45,
  },
  {
    id: 6,
    stars: 1.0,
    text: "vitae erat vel",
    photo: "https://source.unsplash.com/random/300x302",
    name: "euismod",
    current: 59,
    original: 29,
  },
  {
    id: 7,
    stars: 2.0,
    text: "lectus pede et risus. Quisque libero",
    photo: "https://source.unsplash.com/random/300x303",
    name: "Donec porttitor",
    current: 74,
    original: 32,
  },
  {
    id: 8,
    stars: 0.0,
    text: "velit justo nec ante.",
    photo: "https://source.unsplash.com/random/300x304",
    name: "placerat, augue. Sed molestie. Sed",
    current: 19,
    original: 76,
  },
  {
    id: 9,
    stars: 3.0,
    text: "at, nisi. Cum sociis natoque",
    photo: "https://source.unsplash.com/random/300x305",
    name: "nibh. Quisque nonummy",
    current: 63,
    original: 41,
  },
  {
    id: 10,
    stars: 5.0,
    text: "Aenean eget metus. In nec orci. Donec nibh. Quisque",
    photo: "https://source.unsplash.com/random/300x306",
    name: "Curabitur",
    current: 69,
    original: 94,
  },
  {
    id: 11,
    stars: 2.0,
    text: "et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget",
    photo: "https://source.unsplash.com/random/300x307",
    name: "Sed auctor odio a",
    current: 35,
    original: 84,
  },
  {
    id: 12,
    stars: 4.0,
    text: "ipsum. Suspendisse sagittis.",
    photo: "https://source.unsplash.com/random/300x308",
    name: "Nulla",
    current: 71,
    original: 22,
  },
  {
    id: 13,
    stars: 4.0,
    text: "enim non nisi. Aenean eget",
    photo: "https://source.unsplash.com/random/300x309",
    name: "amet",
    current: 8,
    original: 78,
  },
  {
    id: 14,
    stars: 3.0,
    text: "molestie tellus. Aenean egestas hendrerit neque. In ornare",
    photo: "https://source.unsplash.com/random/300x310",
    name: "aliquet libero. Integer",
    current: 94,
    original: 100,
  },
  {
    id: 15,
    stars: 1.0,
    text: "Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet",
    photo: "https://source.unsplash.com/random/300x311",
    name: "felis ullamcorper viverra. Maecenas iaculis",
    current: 33,
    original: 83,
  },
];

const SmallItems = () => {
  return (
    <div className="small-items">
      {/* <Swiper
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
        loopFillGroupWithBlank={true}
        loop={true}
        navigation={true}
        // onSlideChange={() => console.log("slide changed")}
        // onSwiper={(swiper) => {
        //   console.log(swiper);
        // }}
      >
        {items.map((item) => (
          <SwiperSlide>
            <SmallItem key={item.id} item={item}></SmallItem>
          </SwiperSlide>
        ))}
      </Swiper> */}
      {items.map((item) => (
        <SmallItem key={item.id} item={item}></SmallItem>
      ))}
    </div>
  );
};

export default SmallItems;
