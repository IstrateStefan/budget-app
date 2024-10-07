import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/user/userSlice';
import { GoSignOut } from 'react-icons/go';

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <Menu>
      <MenuHandler>
        <span className="cursor-pointer">Welcome, {user.username}</span>
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2 ">
          <GoSignOut size={24} />
          <Typography
            onClick={() => dispatch(logoutUser())}
            variant="small"
            className="font-medium"
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
