import { useEffect } from 'react';
import Router from './router';
import { NavigationProvider } from './hooks/useNavigate';

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
    <NavigationProvider>
      <Router />
    </NavigationProvider>
  );
}

export default App;
