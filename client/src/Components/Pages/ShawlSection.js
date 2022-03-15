import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ShawlSection extends Component {
  render() {
    return (
      <>
            <h3 className='text-center mb-5 fw-light text-uppercase'>Shawl</h3>
          <div className="d-flex">
              <div className='w-50'>
              <img src='./assests/images/shawl1.jpg' className='w-100' />
              <Button className='customBtn rounded-0 border-0 shadow-none'>Summer Shawl</Button>
              </div>
              <div className='w-50'>
              <img src='./assests/images/shawl2.jpg' className='w-100' />
              <Button className='customBtn rounded-0 border-0 shadow-none'>Winter Shawl</Button>
              </div>
          </div>
      </>
    )
  }
}
