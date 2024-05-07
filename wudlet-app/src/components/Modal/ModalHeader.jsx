import PropTypes from 'prop-types';

import styles from './Modal.module.scss';
import CloseFormButton from '../CloseFormButton/CloseFormButton';

const ModalHeader = ({ onClose, children }) => {
  return (
    <div className={styles.modalHeader}>
      {children}
      <CloseFormButton onClick={onClose} />
    </div>
  );
};

ModalHeader.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element,
};

export default ModalHeader;
