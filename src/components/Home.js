import React, { useState }  from "react";

import '@headlessui/react';

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./smallComponents/Theme";
import { GlobalStyles } from "./smallComponents/GlobalStyle";
import { BsMoon , BsSun } from 'react-icons/bs';

import Navbar from './navbar/Navbar';
import Header from "./header/Header";
import Section1 from "./section-1/Section1";
import Section2 from "./section-2/Section2";
import Section3 from "./swiper/Section3";
import Section4 from "./section-4/Section4";
import Contact from "./contactMe/Contact";
import Footer from "./Footer/Footer";


const Home = () => {
  const [ theme, setTheme ] = useState('light');


  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
      document.getElementById("btn-to-light").style.display = 'block'
      document.getElementById("btn-to-dark").style.display = 'none' 
    } else {
      setTheme('Light')
    }
  }

  const toggleThemeOtherTheme = () => {
    if(theme === 'dark'){
      setTheme('light')
      document.getElementById("btn-to-light").style.display = 'none'
      document.getElementById("btn-to-dark").style.display = 'block'
    } else {
      setTheme('dark')
    }
  }

  return (
    <div>
      <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <button className="btn-1" id="btn-to-dark" onClick={toggleTheme}> <BsMoon/> </button>
          <button className="btn-2" id="btn-to-light" onClick={toggleThemeOtherTheme}> <BsSun/> </button>
          <Navbar theme={theme}/>
          <Header theme={theme}/>
          <Section1 theme={theme}/>
          <Section2 theme={theme}/>
          <Section3 theme={theme}/>
          <Section4 theme={theme}/>
          <Contact theme={theme}/>
          <Footer theme={theme}/>
      </ThemeProvider>
    </div>
  );
};

export default Home;



