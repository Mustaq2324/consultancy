import React from "react";
import logo from "../../../src/Assest/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Navbar() {
  const [Sidenav, setSideNav] = useState(false);
  const [btn, setBtn] = useState(null);
  const [home, sethome] = useState(false);
  function handledrop() {
    setSideNav(!Sidenav);
  }
  function handleActive(e) {
    sethome(true);
    setBtn(e.target.textContent);
    setSideNav(false);
  }
  function handleHome() {
    sethome(false);
    setSideNav(false);
    setBtn(null);
  }
  return (
    <div className="flex sticky top-0 bg-white z-30">
      <div className="flex justify-between p-4 lg:p-0 z-50 lg:justify-between lg:px-4 text-black items-center w-full">
        <div className="flex lg:justify-center justify-center items-center ">
          <img
            src={logo}
            className="lg:w-[120px]  object-cover hidden lg:block"
          />
          <h1 className="font-[Dmsans] font-semibold text-2xl text-black">
            Epic <span className="text-[#1369AA]">Solutions</span>
          </h1>
        </div>
        <FaBars className="text-2xl lg:hidden" onClick={handledrop} />
        {/* LapNavbar   */}

        <div className="hidden lg:block ">
          <ul className="flex gap-4 text-lg cursor-pointer font-semibold">
            <li
              className={
                home
                  ? "hover:text-[#1369AA] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#1369aa] "
                  : "text-[#1369aa] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#1369aa]"
              }
            >
              <Link onClick={handleHome} to="/">
                Home
              </Link>
            </li>
            <li
              className={
                btn === "About"
                  ? "text-[#1369aa] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#1369aa]"
                  : "hover:text-[#1369AA] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#1369aa] "
              }
            >
              <Link onClick={handleActive} to="/About">
                About
              </Link>
            </li>
            {/* <li className="hover:text-[#1369AA] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#1369aa]">
            <Link to="/Services">Services</Link> 
            </li> */}
            <li
              className={
                btn === "Clients"
                  ? "text-[#1369aa] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#1369aa]"
                  : "hover:text-[#1369AA] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#1369aa] "
              }
            >
              <Link onClick={handleActive} to="/Client">
                Clients
              </Link>
            </li>
            <li
              className={
                btn === "Services"
                  ? "text-[#1369aa] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#1369aa]"
                  : "hover:text-[#1369AA] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#1369aa] "
              }
            >
              <Link onClick={handleActive} to="/Services">
                Services
              </Link>
            </li>
            <li
              className={
                btn === "Contact Us"
                  ? "text-[#1369aa] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#1369aa]"
                  : "hover:text-[#1369AA] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#1369aa] "
              }
            >
              <Link onClick={handleActive} to="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* SideBar */}
      <div
        className={
          Sidenav
            ? "z-[40] w-[100%] h-full  bg-[#E0F4FF] absolute top-[60px] left-0 transition-all duration-1000  lg:hidden "
            : "w-[100%] h-full  bg-[#FFFCF8] absolute -top-[100%] left-0 transition-all duration-1000 lg:hidden"
        }
      >
        <ul className="flex flex-col content-center items-center gap-4 text-lg cursor-pointer font-semibold pt-10  ">
          <li  className={home ?"text-black":"text-[#1369aa]"}>
            <Link  onClick={handleHome}  to="/">Home</Link>
          </li>

          <li className={
                btn ==="About"?"text-[#1369aa]":"text-black hover:text-[#1369AA] "}>
            <Link onClick={handleActive}  to="/About">About</Link>
          </li>

          <li className={
                btn ==="Clients"?"text-[#1369aa]":"text-black hover:text-[#1369AA] "}>
            <Link  onClick={handleActive} to="/Client">Clients</Link>
          </li>
          <li className={
                btn ==="Services"?"text-[#1369aa]":"text-black hover:text-[#1369AA] "}>
            <Link  onClick={handleActive} to="/Services">Services</Link>
          </li>
          <li className={
                btn ==="Contact Us"?"text-[#1369aa]":"text-black hover:text-[#1369AA] "}>
            <Link  onClick={handleActive} to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
