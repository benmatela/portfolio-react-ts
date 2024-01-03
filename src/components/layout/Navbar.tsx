import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IMenuListItem } from "../../models/menu-list-item.model";
import { Button } from "../Button";

export const Navbar = (props: any) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="text-black border shadow-md">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            {/* <img src={logo} alt='' /> */}
            <Link to="/">
              <h1
                id="navHeader"
                data-testid="navHeader"
                className="font-extrabold text-2xl"
              >
                Portfolio
              </h1>
            </Link>
          </div>
          {/* <ul
            className="hidden space-x-6 md:flex"
            id="menuItems"
            data-testid="menuItems"
          >
            {menuItems.map((menuItem: IMenuListItem) => (
              <li key={menuItem.name} id="menuItem" data-testid={"menuItem"}>
                <Link to={menuItem.linkTo} className="hover:text-orange-600">
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul> */}
          <Button
            label="Hire"
            className="hidden cursor-pointer p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-orange-700 md:block"
          />
          {/* Hamburger Icon */}
          <button
            className={
              toggleMenu
                ? "open block hamburger md:hidden focus:outline-none"
                : "block hamburger md:hidden focus:outline-none"
            }
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden text-[#1B1C23]">
          <div
            className={
              toggleMenu
                ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            }
          >
            <ul>
              {props.menuItems.map((menuItem: IMenuListItem) => (
                <li key={menuItem.name} id="menuItem" data-testid={"menuItem"}>
                  <Link to={menuItem.linkTo} className="hover:text-orange-600">
                    {menuItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
