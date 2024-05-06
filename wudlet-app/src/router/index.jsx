import Layout from '../components/Layout/Layout';
import useNavigate from '../hooks/useNavigate';
import useToken from '../hooks/useToken';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Post from '../pages/Post/Post';
import { getRouteParams, isEmptyObject } from '../utils/UtilFunctions';
import Admin from '../pages/Admin/Admin';

const routes = {
  '/': {
    component: Home,
    requiresAuth: false,
  },
  '/post/:id': {
    component: Post,
    requiresAuth: false,
  },
  '/login': {
    component: Login,
    requiresAuth: false,
  },
  '/admin': {
    component: Admin,
    requiresAuth: false,
  },
};

function Router() {
  const { token } = useToken();
  const { page, navigate } = useNavigate();

  let CurrentPage = () => <h1>404 Página no encontrada 🥲</h1>;

  let routeParam = getRouteParams(window.location.pathname);

  if (isEmptyObject(routeParam)) {
    if (routes[window.location.pathname]) {
      if (routes[window.location.pathname].requiresAuth && !token) {
        window.history.pushState({}, null, '/login');
        navigate('/login');

        CurrentPage = Login;
      } else {
        CurrentPage = routes[window.location.pathname].component;
      }
    }
  } else {
    CurrentPage = routes['/post/:id'].component;
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
