import React from 'react'
import { ShopItem } from '../ShopItem/shopItem'


export const ListView = (items) => {
  return (
    <React.Fragment>
    <ShopItem values={items}/>
    </React.Fragment>
  )
}
