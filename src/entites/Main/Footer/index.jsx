import React from 'react';
import styles from './Footer.module.scss';

const index = () => {
  return (
    <div className={styles.footer}>
      <h4>Showing data 1 to 8 of 256K entries</h4>
      <div className={`${styles.pagination} pagination`}>
        <button>{'<'}</button>
        <button className="active">{'1'}</button>
        <button>{'2'}</button>
        <button>{'3'}</button>
        <button>{'4'}</button>
        <p>...</p>
        <button>{'40'}</button>
        <button>{'>'}</button>
      </div>
    </div>
  );
};

export default index;
