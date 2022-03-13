import React, { Component } from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Prints extends Component {
  render() {
    return (
      <Container className='mt-4'>
          <img src='./assests/images/prints/banner.jpg' width='100%' />
          <Breadcrumb className="mt-4">
            <Breadcrumb.Item>
              <Link to="/" className="li">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/print" className="li">
                Prints
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
    )
  }
}
