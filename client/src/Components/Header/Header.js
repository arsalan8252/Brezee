import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Search, Person, Bag } from "react-bootstrap-icons";
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    // console.log(this.props.NavLinks);
    return (
      <>
        <Container fluid className="bg-white sticky-top">
          <Container>
            <Navbar  expand="lg" className="">
              <Container>
                <Link to='/'><Navbar.Brand className="fst-italic fs-1 me-5">Bareezé</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link className="li">
                      <Link to='/newin' className="text-dark">{this.props.NavLinks[0]}</Link>
                    </Nav.Link>
                    <Nav.Link className="li">
                      <Link to='/casual' className="text-dark">{this.props.NavLinks[1]}</Link>
                    </Nav.Link>
                    <Nav.Link className="li">
                      <Link to='/formal' className="text-dark">{this.props.NavLinks[2]}</Link>
                    </Nav.Link>
                   <Nav.Link className="li">
                      <Link to='/print' className="text-dark">{this.props.NavLinks[3]}</Link>
                    </Nav.Link>
                    <Nav.Link className="li">
                      <Link to='/shawl' className="text-dark">{this.props.NavLinks[4]}</Link>
                    </Nav.Link>
                    <Nav.Link className="li">
                      <Link to='/bottom' className="text-dark">{this.props.NavLinks[5]}</Link>
                    </Nav.Link>
                    <Nav.Link className="li">
                      <Link to='/barezzeman' className="text-dark">{this.props.NavLinks[6]}</Link>
                    </Nav.Link>
                    <Nav.Link className="li">
                      <Link to='/lookbook' className="text-dark">{this.props.NavLinks[7]}</Link>
                    </Nav.Link>
                    <Nav.Link className="li">
                      <Link to='/sale' className="text-dark">{this.props.NavLinks[8]}</Link>
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link className="li"><Search /></Nav.Link>
                    <Nav.Link className="li"><Person /></Nav.Link>
                    <Nav.Link className="li"><Bag /></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
        </Container>
      </>
    );
  }
}
