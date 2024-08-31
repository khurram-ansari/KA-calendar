import { useAuth } from '@/contexts/useAuth';
import { useNavigate } from 'react-router-dom';
import UserDropdown from '../UserDropdown';

const BaseHeader = () => {
  const { session, logout } = useAuth();
  const navigate = useNavigate();

  const { user } = session ?? {};

  const handleLogout = async () => {
    const res = await logout();

    if (res) navigate('/login');
  };

  const dropdownActions: Record<string, () => void> = {
    LOGOUT: handleLogout,
  };

  const handleDropdownAction = (key: string) => {
    if (!key || !dropdownActions[key]) return;

    dropdownActions[key]();
  };
  return (
    <header className="h-16 border-b p-2">
      <div className="container flex h-full items-center justify-between">
        {/* USER AVATAR AND DROPDOWN */}
        {user && (
          <UserDropdown
            onItemClicked={handleDropdownAction}
            userImg={user?.user_metadata?.avatar_url}
          />
        )}
        {/* <Button onClick={handleLogout}>Logout</Button> */}
      </div>
    </header>
  );
};

export default BaseHeader;
