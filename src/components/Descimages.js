import React, { Component } from 'react'
import imgo from '../images/1.png'
import imgt from '../images/2.png'
import imgth from '../images/3.png'

export default class Descimages extends Component {
  render() {
    return (
      <>
      <div className='container-carousel'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
     <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={imgo} className="d-block w-60 mx-auto" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={imgt} className="d-block w-60 mx-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imgth} className="d-block w-60 mx-auto" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="false"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    </div>
      </>
    );
  }
}
