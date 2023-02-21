import React from "react";
import { Container } from "./style.js";
import Slider from "react-slick";
import "./style.css"

const PropertyCarousel=({slideContent, slideToShow})=> {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideToShow==="four" ? 4 : 3 && slideToShow==="res" ? 1 : 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container>
        <Slider {...settings}>
              {slideContent}
        </Slider>
      </Container>
    </>
  );
}

export default PropertyCarousel;
