import React from 'react'
import styles from './shopItem.module.css'


export const ShopItem = ({values}) => {
  return (
    <React.Fragment>
    <div className={styles['container']}>
      {values.cards.map((c, index) => (
        <div className={styles['card']} key={index}>
          <img className={styles['list-img']} src={c.img} alt={c.name} />
          <span className={styles['name']}>{c.name}</span>
          <span className={styles['color']}>{c.color}</span>
            <div className={styles['price']}>${c.price}</div>
            <button className={styles['add-to-cart']}>
              ADD TO CART
            </button>
        </div>
      ))}
    </div>
    </React.Fragment>
  )
}
