import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import styles from './Navbar.module.scss';
import useNavigate from '../../hooks/useNavigate';

const Navbar = () => {
  const { navigate } = useNavigate();

  const selectedTheme = localStorage.getItem('selectedTheme');
  const [isDarkMode, setIsDarkMode] = useState(selectedTheme === 'dark');

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
    window.dispatchEvent(new Event('storage'));
  };

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
    window.dispatchEvent(new Event('storage'));
  };

  if (selectedTheme === 'dark') {
    setDarkMode();
  }

  const toggleTheme = (checked) => {
    if (checked) {
      setIsDarkMode(true);
      setDarkMode();
    } else {
      setIsDarkMode(false);
      setLightMode();
    }
  };

  const handleLogout = () => navigate('/login');

  const navigateTo = (url) => {
    window.history.pushState({}, null, url);
    navigate(url);
  };

  return (
    <nav className={styles.nav}>
      <div onClick={() => navigateTo('/')}>
        <img className={styles.logo} src='https://www.uvg.edu.gt/wp-content/uploads/logo-uvg-1.png' />
      </div>
      <div className={styles.navOptions}>
        <button className={styles.button} onClick={() => navigateTo('/admin')}>
          admin
        </button>

        <button className={styles.button} onClick={() => toggleTheme(!isDarkMode)}>
          {isDarkMode ? <LightModeIcon fontSize='small' /> : <DarkModeIcon fontSize='small' />}
        </button>

        <a className={styles.button} href='#/login' onClick={handleLogout}>
          <LogoutIcon fontSize='small' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
