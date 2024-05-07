import PropTypes from 'prop-types';

import styles from './Textarea.module.scss';

const Textarea = ({ rows, placeholder, value = '', onChange }) => {
  return (
    <textarea
      value={value}
      className={styles.textarea}
      name='postContent'
      rows={rows}
      placeholder={placeholder}
      required
      onChange={onChange}
    />
  );
};

Textarea.propTypes = {
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Textarea;
