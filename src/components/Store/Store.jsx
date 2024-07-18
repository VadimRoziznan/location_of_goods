import React from 'react'
import styles from './store.module.css'
import { IconSwitch } from '../IconSwitch';
import { useState } from 'react';
import { ListView } from '../ListView';
import { CardsView } from '../CardsView';

export const Store = () => {

  const state = {viveName: 'view_module'};

  const [view, setView] = useState(state);

  const handleChangeView = () => {
    if (view.viveName === 'view_module') {
      setView({viveName: 'view_list'})
    } else {
      setView({viveName: 'view_module'})
    }
  }

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];
  return (
    <React.Fragment>
    <IconSwitch icon={view.viveName} onSwitch={() => handleChangeView()}/>
    {view.viveName === 'view_list' ? <ListView cards={products} /> : <CardsView cards={products} />}
    </React.Fragment>
  )
}


