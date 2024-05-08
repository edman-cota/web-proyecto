import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ children, style }) => {
  return (
    <div className={styles.modal} style={{ ...style }}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
};

export default Modal;
