import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginIntro}></div>
      <LoginForm />
    </div>
  );
};

export default Login;
