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
    await deletePost(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
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
