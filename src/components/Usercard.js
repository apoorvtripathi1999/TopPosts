import React from 'react'

export default function testslide({imageLink,imageText,name,source}) {
  return (
    <>
    <div className="testimonial-card">
    <div>
    <img src={imageLink} className="imga" alt="Profile Photo"/>
    </div>
    <div className="testimonial-body">
    <p className="text">{imageText}</p>
    <h6>{name}</h6>
    <h5>{source}</h5>
    </div>
    </div>
    </>
  )
}
