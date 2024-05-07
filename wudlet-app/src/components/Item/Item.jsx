import PropTypes from 'prop-types';

import styles from './Item.module.scss';
import Button from '../Button/Button';

const Item = ({ post, onDelete, onEdit }) => {
  return (
    <li className={styles.item}>
      <div>{post.title}</div>
      <div className={styles.options}>
        <Button label='Editar' variant='primary' onClick={onEdit} />
        <Button label='Eliminar' variant='error' onClick={onDelete} />
      </div>
    </li>
  );
};

Item.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Item;
