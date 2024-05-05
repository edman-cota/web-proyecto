import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ placeholder, type = 'text' }) => {
  return <input type={type} className={styles.input} placeholder={placeholder} spellCheck={false} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
