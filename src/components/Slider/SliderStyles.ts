import styled from 'styled-components';
import { StyledSliderItem } from './SliderItemStyles';

type SliderWrapperProps = {
  zoomFactor: number;
  visibleSlides: number;
  arrowType: string;
  width: number;
};

type SliderProps = {
  visibleSlides: number;
  transformValue: string;
  zoomFactor: number;
  slideMargin: number;
  pageTransition: number;
  ref: any;
};

export const CenterWrapper = styled.div`
  position: relative;
  background-color: orange;
  width: 90%;
  display: flex;
  justify-content: center;
`
export const SliderComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledSliderWrapper = styled.div<SliderWrapperProps>`
  
  overflow: hidden;
  //position: relative;
  width: ${(props) => props.width}%;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: ${(props) => (props.zoomFactor / props.visibleSlides) * 0.7 + '%'} 0;
  .slide {
    background-color: rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    &__image {
      img {
        max-width: 200px;
        min-width: 180px;
      }
    }
    &__text {

    }
  }
  .button-wrapper {
    position: absolute;
    height: 100%;
    z-index: 20;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center
    background-color: orange;
    //padding: ${(props) => props.zoomFactor / 7 + '%'} 0;
    box-sizing: border-box;
    //${(props) => props.arrowType === 'inside green' && 'color: green;'}
  }

  .button {
    background: transparent;
    border: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;
  }

  .back {
    left: ${(props) => props.arrowType === 'outside green' || 'outside gray' ? 0 : 10}px;
  }

  .forward {
    right: ${(props) => props.arrowType === 'outside green' || 'outside gray' ? 0 : 10}px;
  }
`;

export const StyledSlider = styled.div<SliderProps>`
  display: flex;
  transition: transform ${(props) => props.pageTransition}ms ease;

  :hover ${StyledSliderItem} {
    transform: translateX(${(props) => props.transformValue});
  }
`;
