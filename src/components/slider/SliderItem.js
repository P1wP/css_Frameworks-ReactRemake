import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";

export function SliderItem({src, alt, id}){
    return(
        <>
        <Carousel.Item key={id}>
        <img
          className="d-block w-100"
          src={src}
          alt={alt}
        />
      </Carousel.Item>
      </>
    );
}

export default SliderItem;