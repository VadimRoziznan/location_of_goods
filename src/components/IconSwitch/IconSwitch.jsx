import React from 'react'
import styles from './iconSwitch.module.css'


export const IconSwitch = ({icon, onSwitch}) => {
  const handleClick = () => {
    onSwitch();
  }
  return (
    <React.Fragment>
    <div className={styles['container']}>
      <div className={styles[icon]} onClick={handleClick}></div>
    </div>
    </React.Fragment>
  )
}
