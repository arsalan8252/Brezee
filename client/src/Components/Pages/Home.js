import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CasualSection from "./CasualSection";
import FormalSection from "./FormalSection";
import HomeSlider from "./HomeSlider";
import NewinSlider from "./NewinSlider";
import ShawlSection from './ShawlSection';
import TopSelling from "./TopSelling";
export default class Home extends Component {
  render() {
    return (
      <>
        <HomeSlider />
        <Container className="my-lg-5 my-3">
          <NewinSlider />
          <CasualSection />
        </Container>
        <ShawlSection />
        <Container>
          <FormalSection />
          <TopSelling />
        </Container>
        <div className="my-5"><img src='./assests/images/FindStore.jpg' className="w-100" /></div>
        <div className="container my-5"><img src='./assests/images/Insta.jpg' className="w-100" /></div>
      </>
    );
  }
}
