import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import { ImageSlider } from '../DataFiles/ImageSliders';

export default class TopSelling extends Component {
  render() {
    return (
      <>
          <h3 className="text-center text-uppercase fw-light my-5">Top selling</h3>
          <Swiper spaceBetween={20} slidesPerView={4} slidesPerGroup={1} loop={true} autoplay={{delay:2500}} modules={[ Navigation,Autoplay]} className='mySwiper'>
          {ImageSlider.map((data) => (
                  <SwiperSlide key={data.id}>
                  <img src={data.img} />
                </SwiperSlide>
              ))}
          </Swiper>
      </>
    )
  }
}
