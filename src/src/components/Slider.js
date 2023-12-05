import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";

import SliderImage from "./SliderImage"; // Corrected the import statement
import "./Slider.css";

const len = SliderImage.length - 1; // Use 'SliderImage' instead of 'sliderImage'

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
       <div className="slide">
        <div className="text-overlay">
          <h1>Ottawa e-Hospital</h1>
        </div>
      </div>
      <SliderContent activeIndex={activeIndex} SliderImage={SliderImage} /> {/* Corrected prop name */}
      
      <Dots
        activeIndex={activeIndex}
        SliderImage={SliderImage} 
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;