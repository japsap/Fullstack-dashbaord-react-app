import React, { useEffect } from 'react';

import './Section-4.css';

import feedback from '../../img/feedback.png'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Section4 = () => {
    useEffect(() =>{
        Aos.init({ duration: 4000 })
    },[])
    return (
        <div data-aos='fade-down'>
            <span className='circle__section4'></span>
            <div className='section4__flexbox'>
            <div className='section4__box1'>
                <h1 className='section4__h1'>Sign in to simplify your day<br></br> and your activities</h1>
                <p className='section4__p'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                </p>
                <button className='section4__btn'>Learn more </button>
            </div>  
            <div className='section4__box2'>
            
                <img src={feedback}/>
              
                </div>
            </div>  
        </div>
    )
}


export default Section4
