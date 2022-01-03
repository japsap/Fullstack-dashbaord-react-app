import React from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './Section-1.css';

//imgs
import user from '../../img/user.png'

//icons
import { FiStar } from 'react-icons/fi';
import { AiOutlineTrophy } from 'react-icons/ai';
import { SiPointy } from 'react-icons/si'
import { FaWpressr } from 'react-icons/fa';

const Section1 = () => {
    return (
        <div className='section__container'>
            <p className='section__name_p' data-aos="fade-up">Services</p>
            <h2 className='section__name_h1' data-aos="fade-up">Our Recent Rewards</h2>

         {/* flexbox */}
            <div className='flexbox__section'>
                {/* box 1 */}
                <div data-aos="fade-down" className='section__box1'>
                    <div className='first__card_name'>
                        <FiStar style={{color:'#D3AB9E'}} className='first__icon'/> <h1 className='first'>4.9</h1>
                    </div>
                    <div className='first__card_pictures'>
                        <img src={user} className='card__1__img'/> <p><span style={{color:'#D3AB9E'}}>+819k</span> Rates</p>
                    </div>
                    <p style={{marginTop:'20px', color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <a className='card__1__a' href="#"><button className='card__1__btn' >Rate web aplication ></button></a>
                </div>
                {/* box 2 */}
                <div data-aos="fade-down" className='section__box2'>
                    <div className='second__card_name'>
                        <AiOutlineTrophy style={{color:'#D3AB9E'}} className='second__icon'/><h1 className='second'>Awwards</h1>
                    </div>
                    <div className='second__card_pictures'>
                        <FaWpressr style={{color:'red', fontSize:'25px'}}/><p>Best of <span style={{color:"#D3AB9E"}}>2019</span> rewwards!</p>
                    </div>
                    <p style={{marginTop:'50px', color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna. 
                    </p>
                    <a className='card__1__a' href="#"><button className='card__1__btn' >Go to rewards ></button></a>
                </div>
                {/* box 3 */}
                <div data-aos="fade-down" className='section__box3'>
                    <div className='second__card_name'>
                        <SiPointy style={{color:'#D3AB9E'}} className='third__icon'/><h1 className='third'>Blogger is the best apliaction for creativity in its direction</h1>
                    </div>
                        <p className='card__3__p'>About Us</p>    

                        <p style={{marginTop:'20px', color:'gray', marginLeft:'30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p> 
                    <a href='#' className='card__3__a'><button className='card__3__btn'>></button></a>
                </div>
            </div>
        </div>
    )
}

export default Section1
