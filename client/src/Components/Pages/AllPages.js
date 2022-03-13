import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewIn from "./NewIn";
import Casuals from "./Casuals";
import Formals from "./Formals";
import Prints from "./Prints";
import Shawls from "./Shawls";
import Bottoms from "./Bottoms";
import BareezeMan from "./BareezeMan";
import Lookbook from "./lookbook";
import Sale from "./Sale";

export default class AllPages extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/newin" element={<NewIn />} />
          <Route path="/casual" element={<Casuals />} />
          <Route path="/formal" element={<Formals />} />
          <Route path="/print" element={<Prints />} />
          <Route path="/shawl" element={<Shawls />} />
          <Route path="/bottom" element={<Bottoms />} />
          <Route path="/barezzeman" element={<BareezeMan />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </>
    );
  }
}
