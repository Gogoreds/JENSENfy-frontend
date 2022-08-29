import React, { useEffect, useState } from "react";
import NavMenu from './navbars/NavMenu';
import sliderImage from "./sliderImage";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";


const len = sliderImage.length - 1;

function About(props) {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <div>
      <NavMenu />
      </div>
      <h2>About us</h2>
      <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </div>
    </>
  )
}

export default About