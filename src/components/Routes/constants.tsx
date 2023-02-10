import { User } from '@/context/UserContext/reducer';
import { lazy } from 'react';

import PATHS from './paths';

// Add imports for screens
const Login = lazy(() => import('../../screens/Login'));
const Home = lazy(() => import('../../screens/Dashboard/screens/Home'));
const About = lazy(() => import('../../screens/Dashboard/screens/About'));

const MAIN_PUBLIC_PATH = PATHS.login;
const MAIN_PRIVATE_PATH = PATHS.home;

const PRIVATE_REDIRECT = (user: User | null) => (user ? undefined : MAIN_PUBLIC_PATH);
const PUBLIC_REDIRECT = (user: User | null) => (user ? MAIN_PRIVATE_PATH : undefined);

export const ROUTES = [
  {
    path: PATHS.login,
    element: <Login />,
    redirectTo: PUBLIC_REDIRECT
  },
  {
    path: PATHS.home,
    element: <Home />,
    redirectTo: PRIVATE_REDIRECT
  },
  {
    path: PATHS.about,
    element: <About />,
    redirectTo: PRIVATE_REDIRECT
  }
];
