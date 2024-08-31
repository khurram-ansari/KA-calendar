import { Avatar, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type TUserDropdownProps = {
  userImg: string;
  onItemClicked: (key: string) => void;
};
const UserDropdown = ({ userImg, onItemClicked }: TUserDropdownProps) => {
  const items = [
    {
      title: 'Logout',
      key: 'LOGOUT',
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={userImg} alt="user-pic" />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items.map((item) => (
            <DropdownMenuItem
              key={item.key}
              onClick={() => onItemClicked(item.key)}
            >
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserDropdown;
