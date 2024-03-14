import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

import ProfileMenu from "./ProfileMenu.jsx";

const navListItems = [
  {
    label: "Find",
    icon: faMagnifyingGlass,
    url: "",
  },
  {
    label: "Wishlist",
    icon: faHeart,
    url: "",
  },
  {
    label: "Cart",
    icon: faOpencart,
    url: "",
  },
];

const NavList = ({ openCartDrawer }) => {
  return (
    <ul className="ml-auto flex flex-row gap-2">
      {navListItems.map(({ label, icon }) => (
        <Button
          key={label}
          variant="text"
          color="blue-gray"
          className="p-2 flex items-center gap-2"
          onClick={label === "Cart" ? openCartDrawer : null}
        >
          <FontAwesomeIcon icon={icon} className="text-lg lg:inherit" />
          <span className="hidden 2xl:block"> {label}</span>
        </Button>
      ))}
      <ProfileMenu />
    </ul>
  );
};

export default NavList;
