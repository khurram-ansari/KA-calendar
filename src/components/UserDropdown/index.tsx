/**
 * A dropdown menu component that displays the user's avatar and provides a logout option.
 *
 * @param userImg - The URL of the user's avatar image.
 * @param onItemClicked - A callback function that is called when a menu item is clicked, with the key of the clicked item as the argument.
 */
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
