import React from 'react';
import Item from 'entites/MenuItem';
import styles from './Menu.module.scss';
import list from 'api/menuItems.json';

const Menu = () => {
  return (
    <div className={styles.list}>
      {list.map((item, index) => (
        <Item img={item.img} title={item.title} active={item.active} key={index} />
      ))}
    </div>
  );
};

export default Menu;
