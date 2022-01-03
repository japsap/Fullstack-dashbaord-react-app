import React, { useEffect } from "react";

import "./Header.css";

import sun from "../../img/sun.png";
import dark from "../../img/dark.png";
import Button from "../Button/Button";
import Button2 from "../Button/Button2";

import Aos from "aos";
import 'aos/dist/aos.css';

import { DiCssdeck } from 'react-icons/di';

const Header = ({ theme }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])
  return (
    <>
      <div className="flex-container">

        <span className="circle__header"></span>
        <span className="circle2__header"></span>

        <div data-aos="fade-up" className="texts-flex">
          <div className="text-pos">
            <div className="background__p">
              <p className="background_p">Alexadner Plamenov Ivanov</p>
            </div>

            <h1>hello world</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br className="red"></br> Neque in atque cupiditate non, et
            </p>
            <div className="btn-flexbox">
              <div className="btn-1flex">
                <Button />
              </div>
              <div className="btn-2flex">
                <Button2 />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left"className="imgs-flex">
          {theme === "light" ? (
            <div className="img__back">
            <img className="img-sun" src={sun} />
          </div>
          ) : (
            <div className="img__background">
              <img className="img-sun" src={dark} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
