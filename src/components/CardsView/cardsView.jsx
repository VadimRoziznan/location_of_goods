import React from 'react'
import styles from './cardsView.module.css'

export const CardsView = (items)  => {

  return (
    <React.Fragment>
    <div className={styles['container']}>
      {items.cards.map((c, index) => (
        <div className={styles['card']}>
          <span className={styles['name']}>{c.name}</span>
          <span className={styles['color']}>{c.color}</span>
          <img className={styles['card-img']} key={c.img + index} src={c.img} alt={c.name} />
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
