import { useTranslation } from 'react-i18next';
import { useDispatch as useUserDispatch } from '@/context/UserContext';
import { actionCreators as authActions } from '@/context/UserContext/reducer';

function Login() {
  const userDispatch = useUserDispatch();
  const {t} = useTranslation();

  const handleLogin = () => {
    userDispatch(authActions.setUser({
      id: 1,
      sessionToken: 'aTokennnnn'
    }));
  }

  return (
    <div>
      <h1>Login!</h1>
      <button onClick={handleLogin}>{t('Login:button')}</button>
    </div>
  );
}

export default Login;
