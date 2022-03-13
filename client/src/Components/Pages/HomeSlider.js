import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class HomeSlider extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assests/images/SliderBanner2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assests/images/SliderBanner1.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
