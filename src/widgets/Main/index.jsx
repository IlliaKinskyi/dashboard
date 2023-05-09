import React from 'react';
import ProductList from './ProductList';
import ProductListMobile from './ProductListMobile';
import styles from './Main.module.scss';

const Main = ({ isMobile }) => {
  return (
    <div className={styles.main}>
      <h1>Hello Evano 👋🏼,</h1>
      {isMobile ? <ProductListMobile /> : <ProductList />}
    </div>
  );
};

export default Main;
