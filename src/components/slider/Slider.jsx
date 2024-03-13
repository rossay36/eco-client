import "./Slider.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Carousel } from "antd/lib";
import { useRef } from "react";
import { slideItems } from "../../Data";

import Sliders from "./Sliders";

const Slider = () => {
  const ref = useRef();

  return (
    <div className="slider">
      <div className="slider__arrow forward">
        <IoMdArrowDropleft
          className="slider__forward"
          role="button"
          onClick={() => {
            ref.current.prev();
          }}
        />
      </div>
      <div className="slider__wrap">
        <Carousel
          autoplay
          autoplaySpeed={5000}
          fade={false}
          speed={1500}
          dotPosition="bottom"
          dots={true}
          ref={ref}
        >
          {slideItems.map((item) => (
            <Sliders key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
      <div className="slider__arrow back">
        <IoMdArrowDropright
          className="slider__back"
          role="button"
          onClick={() => {
            ref.current.next();
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
