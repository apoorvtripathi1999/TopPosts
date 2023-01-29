import React from 'react'
import { Link } from 'react-router-dom'

export default function Pricecard({cost,features,gotobutton,titlecost}) {
  return (
    <>
    <div className='card rounded-3'>
    <div className="card-body rounded-3">
    <h4 className="card-title border-bottom border-dark my-2">{titlecost}</h4>
    <h1 className="card-title border-bottom border-dark my-2">{cost}</h1>
    <ul className='listing my-2'>{features}</ul>
    <Link to="/" className="btn btn-dark my-2">{gotobutton}</Link>
   </div>
    </div>
    </>
  )
}
