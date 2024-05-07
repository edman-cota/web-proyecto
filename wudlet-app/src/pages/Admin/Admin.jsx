import { useEffect, useState } from 'react';
import { deletePost, getPosts } from '../../utils/http';

import styles from './Admin.module.scss';
import Item from '../../components/Item/Item';
import Button from '../../components/Button/Button';
import PostForm from '../../components/PostForm/PostForm';

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [initialPost, setInitialPost] = useState({});

  const fetchData = async () => {
    const posts = await getPosts();

    setPosts(posts);
  };

  const setEditData = (post) => {
    setInitialPost(post);

    setShowPostForm(true);
  };

  const handleDeletePost = async (id) => {
    const status = await deletePost(id);
    if (status === 200) fetchData();
  };

  // const handleEditPost = async (id) => {
  //   const status = await editPost(id);
  //   if (status === 200) fetchData();
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.admin}>
      {showPostForm && (
        <PostForm
          onClose={() => setShowPostForm(!showPostForm)}
          initialPost={initialPost}
          onRefresh={fetchData}
        />
      )}

      <div style={{ width: 150 }}>
        <Button label='Crear post' onClick={() => setShowPostForm(!showPostForm)} />
      </div>
      <div className={styles.posts}>
        <ul>
          {posts.map((post) => (
            <Item
              key={post.id}
              post={post}
              onEdit={() => setEditData(post)}
              onDelete={() => handleDeletePost(post.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
