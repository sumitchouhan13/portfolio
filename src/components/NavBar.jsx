import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/PortfolioLogo.jpg";
import { Link } from "react-scroll";
import { NavLinks } from "../static_data/navLinks";
import { sideNavLinks } from "../static_data/sideNavLinks";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div style={{ width: "100%", height: "100%" }}>
        <img src={Logo} alt="Logo" style={{ width: "auto", height: "100%" }} />
      </div>
      <ul className="hidden md:flex">
        {NavLinks.map(({ id, linkTo, name }) => (
          <li key={id}>
            <Link to={linkTo} smooth={true} duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {NavLinks.map(({ id, linkTo, name }) => (
          <li className="py-6 text-4xl" key={id}>
            <Link
              onClick={handleClick}
              to={linkTo}
              smooth={true}
              duration={500}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {sideNavLinks.map(({ id, linkTo, name, icon, backgroundColor }) => (
            <li
              key={id}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${backgroundColor}`}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={linkTo}
                target="_blank"
                rel="noreferrer"
              >
                {name} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
