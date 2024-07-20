import React from 'react'
import styles from './shopCard.module.css'


export const ShopCard = ({values}) => {
  return (
    <React.Fragment>
    <div className={styles['container']}>
      {values.cards.map((c, index) => (
        <div className={styles['card']} key={index}>
          <span className={styles['name']}>{c.name}</span>
          <span className={styles['color']}>{c.color}</span>
          <img className={styles['card-img']} src={c.img} alt={c.name} />
          <div className={styles['price-container']}>
            <div className={styles['price']}>${c.price}</div>
            <button className={styles['add-to-cart']}>
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
    </React.Fragment>
  )
}
