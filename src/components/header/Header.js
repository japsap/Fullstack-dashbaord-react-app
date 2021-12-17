import React from "react";

import "./Header.css";

import sun from '../../img/sun.png'
import dark from '../../img/dark.png'
import Button from "../Button/Button";
import Button2 from "../Button/Button2";

const Header = ({ theme }) => {
  return (
    <div className="flex-container">
      <div className="texts-flex">
        <div className="text-pos">
          <h1>hello world</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br className="red"></br> Neque in atque cupiditate non, et</p>
          <div className="btn-flexbox">
            <div className="btn-1flex">
              <Button/>
            </div>
            <div className="btn-2flex">
              <Button2/>
            </div>
          </div>
        </div>
      </div>
      <div className="imgs-flex">
        {theme === 'light' ? 
        (
          <img className="img-sun" src={sun}/>
        ) : (
          <img className="img-sun" src={dark}/>
          )
        }
      </div>
    </div>
  );
};

export default Header;
