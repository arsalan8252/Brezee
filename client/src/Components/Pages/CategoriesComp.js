import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CategoriesFilter } from './CategoriesFilter';
import Casuals from './Casuals';

export default class CategoriesComp extends Component {
  render() {
      console.log(CategoriesFilter[0])
      function handleChange(e){
        //   alert('clicked');
        console.log(e.target.value,'test')
      }
    return (
      <>
            <Row className=''>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}} onChange={(e)=>handleChange(e)}>
                <option value="price">Price</option>
                    {
                        CategoriesFilter[0].price.map((price) => (
                                <option value={price}>PKR {price}</option>
                        ))
                    }
                </select>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}} onChange={(e)=>handleChange(e)}>
                <option value="color">Colors</option>
                    {
                        CategoriesFilter[0].colors.map((color) => (
                                <option value={color}>{color}</option>
                        ))
                    }
                </select>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}} onChange={(e)=>handleChange(e)}>
                <option value="fabric">Fabric</option>
                    {
                        CategoriesFilter[0].fabric.map((fabric) => (
                                <option value={fabric}>{fabric}</option>
                        ))
                    }
                </select>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}} onChange={(e)=>handleChange(e)}>
                <option value="type">Type</option>
                    {
                        CategoriesFilter[0].type.map((type) => (
                                <option value={type}>{type}</option>
                        ))
                    }
                </select>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}} onChange={(e)=>handleChange(e)}>
                <option value="season">Season</option>
                    {
                        CategoriesFilter[0].season.map((season) => (
                                <option value={season}>{season}</option>
                        ))
                    }
                </select>
                </Col>
            </Row>
      </>
    )
  }
}
