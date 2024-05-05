import Layout from '../components/Layout/Layout';
import useNavigate from '../hooks/useNavigate';
import useToken from '../hooks/useToken';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const routes = {
  '/': {
    component: Home,
    requiresAuth: false,
  },
  '/login': {
    component: Login,
    requiresAuth: false,
  },
};

function Router() {
  const { token } = useToken();
  const { page } = useNavigate();

  let CurrentPage = () => <h1>404 Página no encontrada 🥲</h1>;

  if (routes[page]) {
    if (routes[page].requiresAuth && !token) {
      CurrentPage = Login;
    } else {
      CurrentPage = routes[page].component;
    }
  }

  if (page == '/logout') {
    window.location.replace('/');
  }

  return (
    <Layout>
      <CurrentPage />
    </Layout>
  );
}

export default Router;
