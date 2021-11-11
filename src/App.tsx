import React from 'react';
import Slider from './components/Slider';
import './global.css';
import slideImg from './images/slideImg.png'
import arrow_left from "images/left_arrow.svg";
import arrow_right from "images/right_arrow.svg";
import left_arrow_gray from "images/left_arrow_gray.svg";
import right_arrow_gray from "images/right_arrow_gray.svg";
import huawei from "images/Huawei.jpg";
import lenovo from "images/lenovo.png";
import lg from "images/lg.png";
import samsung from "images/samsung.png";

const SliderProps = {
  zoomFactor: 5,
  slideMargin: 15,
  maxVisibleSlides: 3,
  pageTransition: 500,
  sliderWidth: 80,
  infinity: true,
  leftArrowImg: left_arrow_gray,
  rightArrowImg: right_arrow_gray,
  slidePadding: 20,
  slideBorderRadius: 10,
  slideBoxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
  sliderBackground: "none"
};

const testData1 = [
  {id: 1, name: "Iphone 8", price: "От 60 тыс. рублей", img: slideImg},
  {id: 2, name: "Iphone 9", price: "От 50 тыс. рублей", img: slideImg},
  {id: 3, name: "Iphone 4", price: "От 67 тыс. рублей", img: slideImg},
  {id: 4, name: "Iphone 5", price: "От 45 тыс. рублей", img: slideImg},
  {id: 5, name: "Iphone 6", price: "От 53 тыс. рублей", img: slideImg},
  {id: 6, name: "Iphone 9", price: "От 23 тыс. рублей", img: slideImg},
  {id: 7, name: "Iphone 10", price: "От 43 тыс. рублей", img: slideImg},
  {id: 8, name: "Iphone 7", price: "От 66 тыс. рублей", img: slideImg},
  {id: 9, name: "Iphone 6", price: "От 53 тыс. рублей", img: slideImg},
  {id: 10, name: "Iphone 9", price: "От 23 тыс. рублей", img: slideImg},
  {id: 11, name: "Iphone 10", price: "От 43 тыс. рублей", img: slideImg},
  {id: 12, name: "Iphone 7", price: "От 66 тыс. рублей", img: slideImg}
]
const testData2 = [
  {id: 1, img: huawei},
  {id: 2, img: lenovo},
  {id: 3, img: lg},
  {id: 4, img: samsung},
  {id: 5, img: huawei},
  {id: 6, img: lenovo},
  {id: 7, img: lg},
  {id: 8, img: samsung},
]


const App: React.FC = () => {

  return (
      <Slider {...SliderProps}>
        {testData2.map(slide => (
          <div className="slide" key={slide.id}>
          <section className="slide__image">
            <img src={slide.img} alt='character' />
          </section>
          {/*
          <section className="slide__text">
            <h2>{slide.name}</h2>
            <p>{slide.price}</p>
          </section>
          */}
          </div>
        ))}
      </Slider>
  );
};

export default App;
