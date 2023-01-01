import React from 'react'

export default function Pricecard({cost,features,gotobutton,titlecost}) {
  return (
    <>
    <div className='card rounded-3'>
    <div className="card-body rounded-3">
    <h4 className="card-title border-bottom border-dark my-2">{titlecost}</h4>
    <h1 className="card-title border-bottom border-dark my-2">{cost}</h1>
    <ul className='listing my-2'>{features}</ul>
    <a href="/" className="btn btn-dark my-2">{gotobutton}</a>
   </div>
    </div>
    </>
  )
}
