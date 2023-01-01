import React from 'react'
import aboutusmain from '../images/aboutusmain.png'

export default function About() {
  return (
    <>
      <div className='about'>
        <div className='about-head'>
        <h1>We create Tools to keep you up to date</h1>
        <p>Founded in 2005, we have disrupted news industry. With our top notch sevices we have acheived many milestones</p>
        </div>
        <img src={aboutusmain}></img>
      </div>
    </>
  )
}
