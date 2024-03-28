import { useState } from "react";

import { Menu, MenuHandler, MenuList, MenuItem, Button, Avatar, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faListCheck, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import profilePhoto from "../../assets/profilePhoto.png";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: faUserCircle,
    url: "",
  },
  {
    label: "Orders",
    icon: faListCheck,
    url: "",
  },
  {
    label: "Sign Out",
    icon: faPowerOff,
    url: "",
  },
];

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button variant="text" className="hidden items-center rounded-full p-0.5 text-blue-gray-700 md:flex">
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-blue-gray-800 p-0.5"
            src={profilePhoto}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
              }`}
            >
              <Typography as="span" variant="small" className={isLastItem ? "text-red-800" : ""}>
                <FontAwesomeIcon icon={icon} />
              </Typography>
              <Typography as="span" variant="small" className={isLastItem ? "text-red-800" : ""}>
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
