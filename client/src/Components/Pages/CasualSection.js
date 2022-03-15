import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CasualSecData } from '../DataFiles/CasualSecData';

export default class CasualSection extends Component {
  render() {
    return (
      <>
          <Row>
            <div className="text-center my-3">
                <h3 className='fw-light text-uppercase'>Casuals</h3>
            </div>
              <Col lg={4} md={6} className='mb-3'>
                 <Link to='/casual'>
                 <Card className='overlay'>
                      <Card.Img src={CasualSecData[0]} className='w-100 h-100'/>
                        <Card.Body className='position-absolute p-5 d-flex flex-column justify-content-center'>
                            {
                                CasualSecData[3].season.map((item)=>(
                                    <Card.Link className='mt-3 m-0 text-white-50 text-capitalize'>{item}</Card.Link>
                                ))
                            }
                        </Card.Body>
                  </Card>
                 </Link>
              </Col>
              <Col lg={4} md={6} className='mb-3'>
                  <Link to='/casual'>
                  <Card className='overlay'>
                      <Card.Img src={CasualSecData[1]} className='w-100 h-100' />
                      <Card.Body className='position-absolute p-5 d-flex flex-column justify-content-center'>
                            {
                                CasualSecData[3].category.map((item)=>(
                                    <Card.Link className='mt-3 m-0 text-white-50 text-capitalize'>{item}</Card.Link>
                                ))
                            }
                        </Card.Body>
                  </Card>
                  </Link>
              </Col>
              <Col lg={4} md={6} className='mb-3'>
                  <Link to='/casual'>
                  <Card className='overlay'>
                      <Card.Img src={CasualSecData[2]} className='w-100 h-100'/>
                      <Card.Body className='position-absolute p-5 d-flex flex-column justify-content-center'>
                            {
                                CasualSecData[3].fabric.map((item)=>(
                                    <Card.Link className='mt-3 m-0 text-white-50 text-capitalize'>{item}</Card.Link>
                                ))
                            }
                        </Card.Body>
                  </Card>
                  </Link>
              </Col>
          </Row>
      </>
    )
  }
}
