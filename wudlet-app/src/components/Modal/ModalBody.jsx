import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const ModalBody = ({ children }) => {
  return <div className={styles.modalBody}>{children}</div>;
};

ModalBody.propTypes = {
  children: PropTypes.element,
};

export default ModalBody;
