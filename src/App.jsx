import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const getPosts = async () => {
    console.log('init');
    let listado = await fetch('http://localhost:19830/posts');
    let listado_json = await listado.json();
    console.log(listado_json);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
