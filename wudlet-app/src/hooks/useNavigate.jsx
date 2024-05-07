import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext({ page: '/', navigate: () => {} });

const NavigationProvider = ({ children }) => {
  const path = window.location.hash.substring(1);

  const [page, setPage] = useState(path || '/');

  useEffect(() => {
    if (path) {
      setPage(path);
    }
  }, [path]);

  const navigate = (url) => {
    setPage(url);
  };

  return <NavigationContext.Provider value={{ page, navigate }}>{children}</NavigationContext.Provider>;
};

const useNavigate = () => {
  return useContext(NavigationContext);
};

NavigationProvider.propTypes = {
  children: PropTypes.element,
};

export default useNavigate;
export { NavigationProvider };
