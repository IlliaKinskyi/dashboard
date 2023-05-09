import React from 'react';
import Menu from 'features/Menu';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <img alt="logo" src="./img/logo.svg" height="37px" width="37px" />
        <div className={styles.logo_text}>
          <h1>Dashboard</h1>
          <h6>v.01</h6>
        </div>
      </div>
      <Menu />

      <div className={styles.userinfo}>
        <img src="./img/avatar.svg" alt="avatar" height="42px" width="42px" />
        <div className={styles.userinfo_text}>
          <h5>Evano</h5>
          <h6>Project Manager</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
