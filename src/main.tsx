import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './style/globals.css';
import { router } from './routes';
import AuthProvider from './contexts/useAuth';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
);
