import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const ButtonLink = ({ label, variant, href }) => {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      {label}
    </a>
  );
};

ButtonLink.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  href: PropTypes.string,
};

export default ButtonLink;
