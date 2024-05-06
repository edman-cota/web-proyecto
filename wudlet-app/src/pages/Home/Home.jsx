import { useEffect, useState } from 'react';

import Post from '../../components/Post/Post';
import styles from './Home.module.scss';
import { getPosts } from '../../utils/http';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const posts = await getPosts();

    setPosts(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.home}>
      <p>Donde los desarrolladores</p>
      <p>crecen juntos</p>

      <div className={styles.posts}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
