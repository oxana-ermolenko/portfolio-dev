import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "../brands/Socials";
import Toggle from "../buttons/Toggle";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header {...headerProps} className={`${bg ? "dark:bg-tertiary h-20" : "h-24"} flex items-center fixed top-0 w-full dark:text-white z-10 transition-all duration-300`}>
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        {/* logo */}
        <Link href="#">Oxana Ermolenko</Link>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
        <div className="hidden lg:block">
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Header;