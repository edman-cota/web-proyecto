import styles from './LoginForm.module.scss';
import Input from '../Input/Input';
import ButtonLink from '../Button/ButtonLink';
import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const processLogin = async () => {};

  return (
    <div className={styles.loginForm}>
      <div className={styles.form}>
        <Input value={username} placeholder='Correo electrónico' onChange={(value) => setUsername(value)} />

        <br />
        <br />
        <Input
          value={password}
          type='password'
          placeholder='Contraseña'
          onChange={(value) => setPassword(value)}
        />

        <br />
        <br />

        <ButtonLink href='/' label='Ingresar' variant='primary' onClick={processLogin} />
      </div>
    </div>
  );
};

export default LoginForm;
