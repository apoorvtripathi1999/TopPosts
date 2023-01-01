import React from 'react'
import Pricecard from './Pricecard'
const Basic = ['Read Unlimited Artiles ✓','Latest Updates ✓','Pesonalised Recommendation ✗','Access to Premium articles ✗']
const Standard = ['Read Unlimited Artiles ✓','Latest Updates ✓','Pesonalised Recommendation ✓','Access to Premium articles ✗']
const Pro = ['Read Unlimited Artiles ✓','Latest Updates ✓','Pesonalised Recommendation ✓','Access to Premium articles ✓']
export default function Prices() {
  return (
      <>
      <div className='pricetitle'>
      <h1 className='member'>Top Post Membership</h1>
      </div>
      <div className='pricecard'>
      <Pricecard
      cost = {'Free'} 
      features = {
        Basic.map((Basic)=><li>{Basic}</li>)
      }
      gotobutton = {'Explore'}
      titlecost = {'Basic'}
      />
      <Pricecard
      cost = {'60$'} 
      features = {
        Standard.map((Standard)=><li>{Standard}</li>)
      }
      gotobutton = {'Buy Now'}
      titlecost = {'Standard'}
      />
      <Pricecard
      cost = {'100$'} 
      features = {
        Pro.map((Pro)=><li>{Pro}</li>)
      }
      gotobutton = {'Buy Now'}
      titlecost = {'Pro'}
      />
      </div>
      </>
  )
}
