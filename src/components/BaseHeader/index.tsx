import { useAuth } from '@/contexts/useAuth';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const BaseHeader = () => {
  const { session, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logout();

    if (res) navigate('/login');
  };
  return (
    <header>
      <div className="container flex items-center justify-between">
        <div>{JSON.stringify(session?.user?.email)}</div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </header>
  );
};

export default BaseHeader;
