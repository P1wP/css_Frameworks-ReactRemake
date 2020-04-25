import React from "react";
import Carousel from "react-bootstrap/Carousel";
//import {imageAssets} from "../../constants/SliderImages.js"
//import SliderItem from "./SliderItem";



import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.jpg";

export function Slider(){
    

    return (
        /*
        <Carousel>
            {imageAssets.map(images => {
                const {src, alt, img} = images;
                console.log(images);

                return( 
                        <SliderItem key={img} src={src} alt={alt} id={img} />
                ); // END RETURN;
            })} {/* END MAP IMGS *//*} 
        </Carousel>
        */

        <Carousel>
            <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="pink sunset at beach"
        />
        </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Chrystal clear blue waters"
        />
        </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Sunny palm beach"
        />
        </Carousel.Item>
        </Carousel>
    ); // END RETURN;
}

export default Slider;

