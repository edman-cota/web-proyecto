import React from 'react';

import styles from './Layout.module.scss';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <Navbar />

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
