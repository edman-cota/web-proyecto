import { useCallback, useEffect, useState } from 'react';
import { getRouteParams } from '../../utils/UtilFunctions';
import { getPost } from '../../utils/http';

import styles from './Post.module.scss';

const Post = () => {
  const routeParam = getRouteParams(window.location.pathname);
  const [post, setPost] = useState({});

  const fetchData = useCallback(async () => {
    const post = await getPost(routeParam.id);
    setPost(post);
  }, [routeParam.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{post?.title}</h1>
      <div>
        <p>{post?.content}</p>
      </div>
    </div>
  );
};

export default Post;
