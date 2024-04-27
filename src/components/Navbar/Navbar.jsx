import { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
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

  return (
    <nav className={styles.nav}>
      Navbar
      <label>
        <input type='checkbox' checked={isDarkMode} onChange={() => toggleTheme(!isDarkMode)} />
        Dark Mode
      </label>
    </nav>
  );
};

export default Navbar;
