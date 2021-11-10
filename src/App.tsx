import React from 'react';
import Slider from './components/Slider';
import './global.css';
import slideImg from './images/slideImg.png'

const SliderProps = {
  zoomFactor: 5, // How much the image should zoom on hover in percent
  slideMargin: 15, // Margin on each side of slides
  maxVisibleSlides: 3,
  pageTransition: 500, // Transition when flipping pages
  sliderWidth: 80,
  arrowType: 'inside green',
  infinity: true
};
/*
  arrow types:
1. inside green;
2. outside green;

3. inside gray;
4. outside gray;

5. none;
*/
const testData = [
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



// Types
export type Character = {
  abilities: string[];
  alias: string[];
  gender: string;
  hair: string;
  id: number;
  img_url: string;
  name: string;
  origin: string;
  species: string;
  status: string;
};

const App: React.FC = () => {

  return (
      <Slider {...SliderProps}>
        {testData.map(slide => (
          <div className="slide" key={slide.id}>
          <section className="slide__image">
            <img src={slide.img} alt='character' />
          </section>
          <section className="slide__text">
            <h2>{slide.name}</h2>
            <p>{slide.price}</p>
          </section>
          </div>
        ))}
      </Slider>
  );
};

export default App;
