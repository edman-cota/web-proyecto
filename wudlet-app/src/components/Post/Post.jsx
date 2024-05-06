import PropTypes from 'prop-types';

import styles from './Post.module.scss';
import useNavigate from '../../hooks/useNavigate';

const Post = ({ post }) => {
  const { navigate } = useNavigate();

  const navigateTo = (url) => {
    window.history.pushState({}, null, url);
    navigate(url);
  };

  return (
    <div className={styles.post} onClick={() => navigateTo(`/post/${post.id}`)}>
      <h3>{post.title}</h3>
      <p className={styles.date}>{post.created_at}</p>

      <img
        height={180}
        style={{ borderRadius: 6 }}
        src='https://lh3.googleusercontent.com/SMZasrMvgS8LMGCxsSnZqBPZD9KmPIcSXjYU85T-Dd0DQCFo6IWCGckK0rhO6K2J-KD1bMZw2XaiNz1JkgdDUaPs1g=s1280-w1280-h800'
      />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }),
};

export default Post;
