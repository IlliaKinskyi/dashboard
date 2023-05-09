import React from 'react';
import styles from './MenuItem.module.scss';

const MenuItem = ({ img, title, active }) => {
  const isActiveStyle = active === true ? `${styles.item__active}` : '';

  return (
    <div className={`${styles.item} ${isActiveStyle}`}>
      <img src={img} alt={title} height="24px" width="24px" />
      <h2>{title}</h2>
      <img
        src={active ? './img/chevron-right_active.svg' : './img/chevron-right.svg'}
        alt="chevron"
        className={styles.chevron__right}
      />
    </div>
  );
};

export default MenuItem;
