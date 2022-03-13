import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CategoriesFilter } from './CategoriesFilter';

export default class CategoriesComp extends Component {
  render() {
      console.log(CategoriesFilter[0])
      function handleChange(){
          alert('clicked');
      }
    return (
      <>
            <Row className='justify-content-between'>
                <Col lg={2} md={6} sm={12}>
                <select style={{width:'100%'}} onChange={()=>handleChange()}>
                    {
                        CategoriesFilter[0].price.map((price) => (
                                <option value={price}>{price}</option>
                        ))
                    }
                </select>
                </Col>
            </Row>
      </>
    )
  }
}
