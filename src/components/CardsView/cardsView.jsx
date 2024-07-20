import React from 'react'
import { ShopCard } from '../ShopCard/shopCard'


export const CardsView = (items)  => {
  return (
    <React.Fragment>
    <ShopCard values={items}/>
    </React.Fragment>
  )
}
