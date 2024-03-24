import React, { useState } from "react";
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
      <Navbar
        className="sticky top-0 z-40 mx-auto rounded-b-md bg-gradient-to-t from-transparent to-blue-gray-50 p-2"
        fullWidth
      >
        <div className="justify-item-between grid grid-cols-3 items-center">
          <IconButton variant="text" size="md" onClick={openNavDrawer} className="mx-2 text-blue-gray-700">
            {isNavOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            )}
          </IconButton>

          <Button variant="text" className="flex items-center justify-self-center rounded-md p-0.5 text-blue-gray-700">
            <Avatar
              variant="circular"
              size="md"
              alt="DB6"
              className="border border-blue-gray-800 p-0.5"
              src="/logo.png"
            />
            <span className="mx-2 hidden text-2xl md:block"> DB6 </span>
          </Button>

          <NavList openCartDrawer={openCartDrawer} />
        </div>
      </Navbar>

      <Drawer open={isNavOpen} onClose={closeNavDrawer}>
        NavDrawer
      </Drawer>

      <Drawer open={isCartOpen} onClose={closeCartDrawer} placement="right">
        Cart
      </Drawer>
    </>
  );
};

export default Header;
