import { useState } from "react";
import { Navbar, Drawer, Avatar, Button, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import NavList from "./NavList.jsx";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openNavDrawer = () => setIsNavOpen(true);
  const closeNavDrawer = () => setIsNavOpen(false);
  const openCartDrawer = () => setIsCartOpen(true);
  const closeCartDrawer = () => setIsCartOpen(false);

  return (
    <>
      <Navbar className="mx-auto p-2 rounded-xl">
        <div className="grid grid-cols-3 items-center justify-item-between text-blue-gray-900">
          <IconButton variant="text" color="blue-gray" size="md" onClick={openNavDrawer} className="mx-2">
            {isNavOpen ? <FontAwesomeIcon icon={faXmark} className="text-2xl" /> : <FontAwesomeIcon icon={faBars} className="text-2xl" />}
          </IconButton>

          <Button variant="text" color="blue-gray" className="flex items-center rounded-full p-0.5 justify-self-center">
            <Avatar variant="circular" size="md" alt="DB6" className="border border-gray-800 p-0.5" src="/logo.png" />
            <span className="mx-2 hidden md:block text-2xl"> DB6 </span>
          </Button>

          <NavList openCartDrawer={openCartDrawer} />
        </div>
      </Navbar>

      <Drawer open={isNavOpen} onClose={closeNavDrawer}>
        NavDrawer
      </Drawer>

      <Drawer open={isCartOpen} onClose={closeCartDrawer} placement="right">
        CartDrawer
      </Drawer>
    </>
  );
};

export default Header;