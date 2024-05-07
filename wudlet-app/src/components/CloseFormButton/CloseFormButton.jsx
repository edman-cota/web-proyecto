import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

import styles from './CloseFormButton.module.scss';

const CloseFormButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <CloseIcon />
    </button>
  );
};

CloseFormButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseFormButton;
