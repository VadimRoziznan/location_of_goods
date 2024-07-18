import React from 'react'
import styles from './listView.module.css'

export const ListView = (items) => {
  console.log(items)
  return (
    <React.Fragment>
    <div className={styles['container']}>
      {items.cards.map((c, index) => (
        <div className={styles['card']}>
          <img className={styles['list-img']} key={c.img + index} src={c.img} alt={c.name} />
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
