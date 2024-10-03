import React from "react";
import { BiSearch, BiMenu, BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      <div className="md:hidden ">
        <NavSm />
      </div>
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      <div className="hidden lg:flex md:hidden">
        <NavLg />
      </div>
    </nav>
  );
};

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Mumbai <i className="fas fa-chevron-down"></i>
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
    <div className="w-10 h-10">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for Movies, Events, Plays, Sports and Activities."
      />
    </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer">
            Mumbai <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;