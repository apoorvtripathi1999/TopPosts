import React, { Component } from 'react'
import Logo from '../images/logo.png'



export default class Intro extends Component {
  render() {
    return (
      <>
      <div className='intro-main'>
      <img src= {Logo} className=" mx-auto d-block" alt="logo"/>
      </div>
      </>
    )
  }
}
