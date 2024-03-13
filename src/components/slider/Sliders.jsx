import React from "react";

const Sliders = ({ item }) => {
  return (
    <div
      className="slider__container "
      style={
        item.id === 1
          ? { backgroundColor: "#5bccf6" }
          : item.id === 2
          ? {
              backgroundColor: "#fcde67",
            }
          : { backgroundColor: "lightcoral" }
      }
    >
      <div className="slider__container-img">
        <img className="slider__img" src={item?.img} alt="slide images" />
      </div>
      <div className="slider__container-info">
        <h1 className="slider__info-title">{item?.title}</h1>
        <span className="slider__info-desc">{item?.desc}</span>
        <button className="slider__info-button">SHOW NOW</button>
      </div>
    </div>
  );
};

export default Sliders;
