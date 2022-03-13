import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Button, Col, Row } from "react-bootstrap";
import { ImageSlider } from "../DataFiles/ImageSliders";

export default class NewInSlider extends Component {
  render() {
    const myLinks = ['casual','formal','print','shawl','bottom','lookbook','bareezeman','sale'];
    return (
      <>
        <Row>
          <Col lg="3" className="p-4">
            <h1 className="fw-light fs-2">NEW-IN</h1>
            <p className="my-4">
              These spectacular styles are new and here to certainly tempt you
            </p>
           <Link to='newin'> <Button className="border-0 bg-white text-dark p-0 shadow-none">
              View All
            </Button></Link>
          </Col>
          <Col lg="9" className="p-4">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              slidesPerGroup={1}
              loop={true}
              autoplay={{ delay: 2500 }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {ImageSlider.map((data) => (
                  <SwiperSlide key={data.id}>
                  <img src={data.img} />
                  <h5 className="mt-4 fw-light fs-6">{data.title}</h5>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </>
    );
  }
}
