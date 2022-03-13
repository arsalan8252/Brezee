import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class TopHeader extends Component {
  render() {
    return (
      <>
        <Container fluid className="bg-light p-2">
         <Container>
         <Row>
              <Col className="text-end"  style={{fontSize:'9px',color:'#222'}}>
                 <a href="" className="me-3 text-dark">Help</a>
                 <a href="" className="me-3 text-dark">Track Your Order</a>
                 <a href="" className="text-dark">+92 301 123 4567</a>
              </Col>
          </Row>
         </Container>
        </Container>
      </>
    );
  }
}
