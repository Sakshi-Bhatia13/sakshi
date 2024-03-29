import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const NavBar = ({ setActiveComponent }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    // {
    //   id: 2,
    //   link: "about",
    // },
    {
      id: 3,
      link: "technologies",
    },
    {
      id: 4,
      link: "project",
    },
    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "contact"
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">
      <div>
      <h1 className="text-5xl font-signature ml-2">
  <span className="text-purple-600">S</span>akshi..
</h1>

      </div>

      <div className="md:hidden">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center md:hidden absolute top-0 left-0 w-full h-screen bg-black ">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 cursor-pointer capitalize py-6 text-3xl hover:text-purple-600 hover:underline hover:font-semibold hover:text-5xl"
              onClick={() => {
                setActiveComponent(link);
                setNav(false);
              }}
            />
          ))}
        </ul>
      )}

      <div className="hidden md:flex justify-center items-center list-none">
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className="px-4 cursor-pointer capitalize font-medium font-family- text-white transition duration-300 hover:text-purple-600 hover:underline transform hover:scale-90 hover:text-4xl"
            onClick={() => setActiveComponent(link)} 
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
