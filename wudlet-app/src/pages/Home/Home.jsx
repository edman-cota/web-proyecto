import { useEffect, useState } from 'react';
import useNavigate from '../../hooks/useNavigate';
import useToken from '../../hooks/useToken';

const Home = () => {
  const { page } = useNavigate();
  const { token } = useToken();

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    let listado = await fetch('http://localhost:19830/posts');
    let listado_json = await listado.json();
    setPosts(listado_json);
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log('posts: ', posts);

  return (
    <div>
      <p>Donde los desarrolladores</p>
      <p>crecen juntos</p>

      <p></p>
    </div>
  );
};

export default Home;
