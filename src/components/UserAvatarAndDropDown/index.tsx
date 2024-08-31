import { useAuth } from '@/contexts/useAuth';
import UserDropdown from '../UserDropdown';
import { useNavigate } from 'react-router-dom';

const UserAvatarAndDropdown = () => {
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

  if (user)
    return (
      <UserDropdown
        onItemClicked={handleDropdownAction}
        userImg={user?.user_metadata?.avatar_url}
      />
    );
};

export default UserAvatarAndDropdown;
