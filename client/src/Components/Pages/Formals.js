import React, { Component } from 'react'
import { Container , Breadcrumb, Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FormalProducts } from '../DataFiles/FormalProducts';

export default class Formals extends Component {
  render() {
    return (
      <>
        <Container className='mt-4'>
          <img src='./assests/images/formals/banner.jpg' width='100%' />
          {/* breadcrumbs */}
          <Breadcrumb className="mt-4">
            <Breadcrumb.Item>
              <Link to="/" className="li">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/formal" className="li">
                Formals
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>

          {/* products filter */}
          <Row className=' mt-4 justify-content-between'>
            <Col lg={2} md={6} sm={12}></Col>
          </Row>

          {/* all products */}

          <Row className='my-2'>
          {
            FormalProducts.map((product) => (
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
    )
  }
}
