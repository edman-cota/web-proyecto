import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ label, variant }) => {
  return <button className={`${styles.button} ${styles[variant]}`}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
