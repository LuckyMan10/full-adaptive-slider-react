import React, { useState, useEffect, useRef } from "react";
// Components
import SliderItem from "./SliderItem";
import arrow_left from "images/left_arrow.svg";
import arrow_right from "images/right_arrow.svg";
// Styles
import {
  StyledSliderWrapper,
  StyledSlider,
  CenterWrapper,
  SliderComponent,
} from "./SliderStyles";
// Types
type SliderProps = {
  children?: any;
  zoomFactor: number;
  sliderWidth: number;
  arrowType: string;
  slideMargin: number;
  maxVisibleSlides: number;
  pageTransition: number;
  infinity: boolean;
};

const numberOfSlides = (maxVisibleSlides: number, windowWidth: number) => {
  if (windowWidth > 1200) return maxVisibleSlides;
  if (windowWidth > 992) return 4;
  if (windowWidth > 768) return 3;
  return 2;
};

const Slider: React.FC<SliderProps> = ({
  children,
  zoomFactor,
  sliderWidth,
  arrowType,
  slideMargin,
  maxVisibleSlides,
  pageTransition,
  infinity,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [transformValue, setTransformValue] = useState(`-${zoomFactor / 2}%`);
  const [scrollSize, setScrollSize] = useState(0);

  const sliderRef = useRef<HTMLElement>(null);

  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize);
  // Pages start at 0, therefore -1 at the end here
  const totalPages: number = Math.ceil(children.length / visibleSlides) - 1;

  useEffect(() => {
    //@ts-ignore
    const resizeObserver = new ResizeObserver((entries) => {
      setScrollSize(entries[0].contentRect.width);
    });
    resizeObserver.observe(sliderRef.current);
  }, [sliderRef]);

  // Position slider on resize
  useEffect(() => {
    
    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages);
      
      sliderRef.current.style.transform = `translate3D(-${
        currentPage * scrollSize
      }px, 0, 0)`;
    }
    
  }, [sliderRef, currentPage, scrollSize, totalPages]);

  // Have to disable hover effect on slides when flipping page
  // Otherwise it will look ugly when mouse hovers over the slides
  const disableHoverEffect = () => {
    if (sliderRef.current) sliderRef.current.style.pointerEvents = "none";
    setTimeout(() => {
      if (sliderRef.current) sliderRef.current.style.pointerEvents = "all";
    }, pageTransition);
  };


  const handleToForward = (isInfinity: boolean) => {
    console.log(scrollSize)
    if (!(currentPage !== totalPages)) {
      disableHoverEffect();
      setCurrentPage(0);
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translate3D(${0}px, 0, 0)`;
      }
    } else {
      disableHoverEffect();
      setCurrentPage(currentPage + 1);
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translate3D(-${
          (currentPage + 1) * scrollSize
        }px, 0, 0)`;
      }
    }
  };

  const handleToBack = (isInfinity: boolean) => {
    if(!(currentPage > 0)) {
      disableHoverEffect();
      setCurrentPage(totalPages);
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translate3D(-${totalPages * scrollSize}px, 0, 0)`;
      }
    } else {
      disableHoverEffect();
      setCurrentPage(currentPage - 1);
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translate3D(-${(currentPage - 1) * scrollSize}px, 0, 0)`;
      }
    }
  };

  const handleMouseOver = (id: number) => {
    if (id % visibleSlides === 1) setTransformValue("0%"); // left
    if (id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`); // right
  };

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`);
  };

  const assignSlideClass = (index: number, visibleSlides: number) => {
    const classes = ["right", "left"];
    return classes[index % visibleSlides] || "";
  };

  return (
    <SliderComponent>
      <CenterWrapper>
        <StyledSliderWrapper
          arrowType={arrowType}
          zoomFactor={zoomFactor}
          visibleSlides={visibleSlides}
          width={sliderWidth}
        >
          <StyledSlider
            visibleSlides={visibleSlides}
            transformValue={transformValue}
            zoomFactor={zoomFactor}
            slideMargin={slideMargin}
            pageTransition={pageTransition}
            ref={sliderRef}
          >
            {children.map((child: any, i: any) => (
              <SliderItem
                key={i}
                slideMargin={slideMargin}
                visibleSlides={visibleSlides}
                zoomFactor={zoomFactor}
                slideClass={assignSlideClass(i + 1, visibleSlides)}
                id={i + 1}
                callback={handleMouseOver}
                callbackOut={handleMouseOut}
              >
                {child}
              </SliderItem>
            ))}
          </StyledSlider>
          {
            <div className="button-wrapper back">
              <button
                //disabled={!(currentPage > 0)}
                className="button back"
                onClick={() => handleToBack(infinity)}
              >
                <img src={arrow_left} alt="back" />
              </button>
            </div>
          }
          {
            <div className="button-wrapper forward">
              <button
                //disabled={!(currentPage !== totalPages)}
                className="button forward"
                onClick={() => handleToForward(infinity)}
              >
                <img src={arrow_right} alt="forward" />
              </button>
            </div>
          }
        </StyledSliderWrapper>
      </CenterWrapper>
    </SliderComponent>
  );
};

export default Slider;
