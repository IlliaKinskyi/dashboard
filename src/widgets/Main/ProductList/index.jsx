import React from 'react';
import Table from 'entites/Main/Table/index';
import Footer from 'entites/Main/Footer/index';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className={styles.productlist}>
      <Table />
      <Footer />
    </div>
  );
};

export default ProductList;
