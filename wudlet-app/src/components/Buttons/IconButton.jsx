import React from 'react';
import Icon from '@mui/material/Icon';

import styles from './IconButton.module.scss';

const IconButton = ({ OptionIcon, variant = 'solid', onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.iconButton} ${styles[variant]}`}>
      <Icon>{OptionIcon}</Icon>
    </button>
  );
};

export default IconButton;
