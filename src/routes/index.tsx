import Home from '@/pages';
import LoginPage from '@/pages/login';
import { getSession } from '@/services/auth';
import { createBrowserRouter, redirect } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/calendar'),
  },
  {
    path: '/login',
    loader: async () => {
      const session = await getSession();

      if (session) return redirect('/calendar');

      return null;
    },
    element: <LoginPage />,
  },
  {
    path: '/calendar',
    loader: async () => {
      const session = await getSession();

      if (!session) return redirect('/login');

      return null;
    },
    children: [{ path: '', element: <Home /> }],
  },
]);
