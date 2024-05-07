import { useEffect, useState } from 'react';
import { deletePost, getPosts } from '../../utils/http';

import styles from './Admin.module.scss';
import Item from '../../components/Item/Item';

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const posts = await getPosts();

    setPosts(posts);
  };

  const handleDeletePost = async (id) => {
    const status = await deletePost(id);
    if (status === 200) fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.admin}>
      <div className={styles.posts}>
        <ul>
          {posts.map((post) => (
            <Item key={post.id} post={post} onDelete={() => handleDeletePost(post.id)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
