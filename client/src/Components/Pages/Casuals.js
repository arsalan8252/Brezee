import React, { Component } from "react";
import {Container,Breadcrumb,Dropdown,Row,Col,Card,Button,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CasualProducts } from "../DataFiles/CasualProducts";
import CategoriesComp from "./CategoriesComp";
export default class Casuals extends Component {
  render() {
    console.log(CasualProducts);
    return (
      <>
        <Container className="mt-4">
          <img src="./assests/images/casuals/casualBanner.jpg" width="100%" />

          {/* bread crumbs */}
          <Breadcrumb className="mt-4">
            <Breadcrumb.Item>
              <Link to="/" className="li">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/casual" className="li">
                Casuals
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>

           {/* category filter */}
           <CategoriesComp />

          {/* products  */}

          <Row className='my-2'>
          {
            CasualProducts.map((product) => (
                <Col lg='3' md='4' sm='6' xs='12' className='mt-4'>
                  <Card className="border-0 rounded-0" key={product.id}  style={{cursor:'pointer'}}>
                    <Card.Img src={product.images[0]} style={{objectFit : 'contain'}} />
                    <Card.Body className='p-0'>
                      <Card.Title className='mt-3 text-capitalize fs-6'>{product.title}</Card.Title>
                      <Card.Title className='mt-2 text-capitalize fw-light fs-6'>{product.completeSuitPrice}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
            ))
          }
          </Row>

        </Container>
      </>
    );
  }
}
