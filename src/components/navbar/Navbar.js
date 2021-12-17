import React from "react";

import "./Navbar.css";
import Pic from "../../img/logo.png";

import { FiAlignRight, FiX } from "react-icons/fi";

const Navbar = ({ theme }) => {
  const names = [
    {
      id: 1,
      name: "Dashboard",
    },
    {
      id: 2,
      name: "Team",
    },
    {
      id: 3,
      name: "Projects",
    },
    {
      id: 4,
      name: "Calendar",
    },
  ];

  const toggleNavbar = () => {
    document.getElementById("slidebar").classList.toggle("active");
    document.getElementById("show").style.display = "block";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
  };

  const closeNavbar = () => {
    document.getElementById("slidebar").classList.toggle("active");
    document.getElementById("show").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
  };

  return (
    <div className={theme === 'light' ? 'navbar-1' : 'navbar-2'}>
      {/* navbar */}
      <div className="navbar">
        {/*  mobile navbar  */}

        <div id="slidebar">
          <div className="toggle-btn" id="open">
            <FiAlignRight onClick={() => toggleNavbar()} />
          </div>
          <div className="toggle-close" id="close">
            <FiX onClick={() => closeNavbar()} />
          </div>
          <div className="mobile-links" id="show">
            {names.map((nam) => {
              return (
                <a className="link-phone" href="#">
                  {nam.name}
                </a>
              );
            })}
          </div>
        </div>

        {/*  mobile navbar  */}

        <div className="logo">
            {theme === 'light' ? (<img src={Pic} />): (<img src={Pic}/>)}
        </div>

        {/* pc navbar */}

        <div className="link-pos">
          {names.map((nam) => {
            return (
              <a className="link-pc" href="#">
                {nam.name}
              </a>
            );
          })}
        </div>

        {/* pc navbar */}
      </div>
      {/* navbar */}
    </div>
  );
};

export default Navbar;
