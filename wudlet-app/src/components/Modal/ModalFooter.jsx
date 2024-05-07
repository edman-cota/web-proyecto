import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const ModalFooter = ({ children }) => {
  return <div className={styles.modalFooter}>{children}</div>;
};

ModalFooter.propTypes = {
  children: PropTypes.element,
};

export default ModalFooter;
