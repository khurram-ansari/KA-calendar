import BrandLogo from '../BrandLogo';
import CalDatePicker from '../CalDatePicker';
import UserAvatarAndDropdown from '../UserAvatarAndDropDown';

const BaseHeader = () => {
  return (
    <header className="h-16 border-b p-2">
      <div className="container flex h-full items-center justify-between ">
        {/* BRAND LOGO */}
        <BrandLogo />

        {/* DATE PICKER */}

        <CalDatePicker />

        {/* USER AVATAR AND DROPDOWN */}
        <UserAvatarAndDropdown />
        {/* <Button onClick={handleLogout}>Logout</Button> */}
      </div>
    </header>
  );
};

export default BaseHeader;
