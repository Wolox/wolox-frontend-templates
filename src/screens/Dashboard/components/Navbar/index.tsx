import { Link } from "react-router-dom"
import { t } from "i18next";
import PATHS from "@/components/Routes/paths"
import { useDispatch as useUserDispatch } from '@/context/UserContext';
import { actionCreators as authActions } from '@/context/UserContext/reducer';

function Navbar() {
  const userDispatch = useUserDispatch();

  const handleLogout = async () => {
    userDispatch(authActions.resetUser());
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to={PATHS.home}>{t('Navbar:home')}</Link>
        </li>
        <li>
          <Link to={PATHS.about}>{t('Navbar:about')}</Link>
        </li>
        <li>
          <button onClick={handleLogout}>{t('Navbar:logout')}</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
