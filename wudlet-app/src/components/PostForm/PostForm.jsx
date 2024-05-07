import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import ModalOverlay from '../Modal/ModalOverlay';
import Modal from '../Modal/Modal';
import ModalHeader from '../Modal/ModalHeader';
import ModalBody from '../Modal/ModalBody';
import Textarea from '../Textarea/Textarea';

import styles from './PostForm.module.scss';
import ModalFooter from '../Modal/ModalFooter';
import Button from '../Button/Button';
import { isEmptyObject } from '../../utils/UtilFunctions';
import { createPost } from '../../utils/http';

const PostForm = ({ onClose, onRefresh, initialPost }) => {
  const [title, setTitle] = useState(initialPost?.title ?? '');
  const [content, setContent] = useState(initialPost?.content ?? '');

  const handleCreatePost = async () => {
    if (title !== '' && content !== '') {
      const status = await createPost(title, content);
      if (status === 200) onRefresh();
    }
  };

  return (
    <Fragment>
      <ModalOverlay />

      <Modal style={{ maxHeight: '90%', maxWidth: 1000 }}>
        <ModalHeader onClose={onClose} />

        <ModalBody>
          <div className={styles.postForm}>
            <Textarea
              value={title}
              rows={2}
              placeholder='Título'
              onChange={(e) => setTitle(e.target.value)}
            />

            <br />

            <Textarea
              value={content}
              rows={14}
              placeholder='Contenido'
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </ModalBody>

        <ModalFooter border={false} style={{ gap: 10 }}>
          {isEmptyObject(initialPost) ? (
            <Button label='Crear' variant='primary' onClick={() => handleCreatePost()} />
          ) : (
            <Button label='Actualizar' variant='primary' />
          )}
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

PostForm.propTypes = {
  onClose: PropTypes.func,
  onRefresh: PropTypes.func,
  initialPost: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PostForm;
