/** @format */
import "./slider.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <Carousel
      autoPlay
      showArrows={true}
      className="section"
      preventMovementUntilSwipeScrollTolerance={true}
    >
      <div className="slider__img slider__img-1"></div>
      <div className="slider__img slider__img-2"></div>
      <div className="slider__img slider__img-3"></div>
      <div className="slider__img slider__img-4"></div>
      <div className="slider__img slider__img-5"></div>
    </Carousel>
  );
};

export default Slider;
