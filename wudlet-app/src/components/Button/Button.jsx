import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ label, variant, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
