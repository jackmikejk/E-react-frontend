import React from "react";

function SliderContent({ activeIndex, SliderImage }) {
  return (
    <section>
      {SliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
