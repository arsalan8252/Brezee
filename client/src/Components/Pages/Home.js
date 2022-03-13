import React, { Component } from "react";
import { Container } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import NewinSlider from "./NewinSlider";
export default class Home extends Component {
  render() {
    return (
      <>
        <HomeSlider />
        <Container className="my-lg-5 my-3">
          <NewinSlider />
        </Container>
      </>
    );
  }
}
