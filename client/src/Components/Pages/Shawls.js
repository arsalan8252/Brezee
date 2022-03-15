import React, { Component } from 'react';
import {Container , Breadcrumb, Row,Col,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CategoriesComp from './CategoriesComp';
import { ShawlProducts } from '../DataFiles/ShawlProducts';

export default class Shawls extends Component {
  render() {
    return (
      <>
        <Container className='mt-4'>
          <img src='./assests/images/shawls/banner.jpg' width='100%' />
         
         {/* bread crumbs */}
         <Breadcrumb className="mt-4">
            <Breadcrumb.Item>
              <Link to="/" className="li">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/shawl" className="li">
                Shawls
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>

           {/* category filter */}
           <CategoriesComp />

          {/* products  */}

          <Row className='my-2'>
          {
            ShawlProducts.map((product) => (
                <Col lg='3' md='4' sm='6' xs='12' className='mt-4'>
                  <Card className="border-0 rounded-0 myCard" key={product.id}  style={{cursor:'pointer'}}>
                    <Card.Img src={product.images[0]} className='hoverImg1' style={{objectFit : 'contain'}} />
                    <Card.Img src={product.images[1]} className='hoverImg2' style={{objectFit : 'contain'}} />
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
    )
  }
}
