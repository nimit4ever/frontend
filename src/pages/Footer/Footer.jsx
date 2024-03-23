import React from "react";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full px-6">
      <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
          &copy; {currentYear} <a href="#">DB6</a> All Rights Reserved.
        </Typography>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Typography color="green" as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
            <FontAwesomeIcon icon={faWhatsapp} />
          </Typography>
          <Typography color="brown" as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
            <FontAwesomeIcon icon={faInstagram} />
          </Typography>
          <Typography color="blue" as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
            <FontAwesomeIcon icon={faFacebook} />
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
