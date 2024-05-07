import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
