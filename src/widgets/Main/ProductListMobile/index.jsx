import React from 'react';
import Footer from 'entites/MainMobile/Footer/index';
import Table from 'entites/MainMobile/Table/index';
import styles from './ProductListMobile.module.scss';

const ProductListMobile = () => {
  return (
    <div className={styles.productlist}>
      <Table />
      <Footer />
    </div>
  );
};

export default ProductListMobile;
