import React from "react";

import "./Footer.css";

import {
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiFillGithub,
    AiOutlineLinkedin,
  } from "react-icons/ai";

  import Pic from "../../img/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer__flexbox">
        <div className="logo__box">
            <img src={Pic} className='footer__logo'/>
            <p className="p__1">Usefull tasktool for work or school<br></br> for children and adults</p>
            <p className="p__2">2022 Dashthis all right reserved</p>
        </div>
        <div className="information__box">
            <p className="main__p">Information</p>
            <p className="p__3">Partners</p>
            <p className="p__3">Blog</p>
            <p className="p__3">Terms and conditions</p>
            <p className="p__3">Privacy</p>
        </div>
        <div className="dashboard__box">
            <p className="main__p">Dasboard</p>
            <p className="p__3">Program</p>
            <p className="p__3">Chats</p>
        </div>
        <div className="contacts__box">
            <p className="main__p">Contacts</p>
            <p className="p__3">domashnopomatematika@gmail.com</p>
            <div className='footer__icons'>
                <AiFillGithub/>
                <AiOutlineFacebook/>
                <AiOutlineInstagram/>
                <AiOutlineLinkedin/>
            </div>
            <p className="p__3">Bulgarian</p>
            <p className="p__3">English</p>
        </div>  
      </div>
    </>
  );
};

export default Footer;
