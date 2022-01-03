import React, { useEffect } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, {
    EffectCoverflow,Pagination
} from 'swiper';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

import "./Swiper.css";

//imgs
import user from '../../img/user.avif'
import user1 from '../../img/user1.avif'
import user2 from '../../img/user2.avif'
import user3 from '../../img/user3.avif'
import user4 from '../../img/user4.avif'
import user5 from '../../img/user5.avif'
import user6 from '../../img/user6.avif'
import user7 from '../../img/user7.avif'

import quote from '../../img/quote.png'

import Aos from 'aos';
import 'aos/dist/aos.css';

SwiperCore.use([EffectCoverflow,Pagination]);

const Section3 = () => {
    useEffect(() =>{
        Aos.init({ duration: 4000 })
    },[])
  return (
    <div className="swiper__container" data-aos='fade-down'>
        <h1 className="swiper__h1">Feedbacks</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={true}
        className="swiper"
      >
        <SwiperSlide>
          <div className='card__swiper'>
            <img src={quote} className="quote__swiper"/>
                <div className="swiper__content">
                    <p className='p__swiper'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <div className="swiper__details">
                        <div  className="img__user__swiper">
                            <img src={user}/>
                        </div>
                        <h3>Someone Famous<br></br><span>Creative Designer</span></h3>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card__swiper'>
            <img src={quote} className="quote__swiper"/>
                <div className="swiper__content">
                    <p className='p__swiper'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <div className="swiper__details">
                        <div  className="img__user__swiper">
                            <img src={user1} className="user__swiper"/>
                        </div>
                        <h3>Someone Famous<br></br><span>Creative Designer</span></h3>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card__swiper'>
            <img src={quote} className="quote__swiper"/>
                <div className="swiper__content">
                    <p className='p__swiper'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <div className="swiper__details">
                        <div  className="img__user__swiper">
                            <img src={user2} className="user__swiper"/>
                        </div>
                        <h3>Someone Famous<br></br><span>Creative Designer</span></h3>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card__swiper'>
            <img src={quote} className="quote__swiper"/>
                <div className="swiper__content">
                    <p className='p__swiper'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <div className="swiper__details">
                        <div  className="img__user__swiper">
                            <img src={user3} className="user__swiper"/>
                        </div>
                        <h3>Someone Famous<br></br><span>Creative Designer</span></h3>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='card__swiper'>
            <img src={quote} className="quote__swiper"/>
                <div className="swiper__content">
                    <p className='p__swiper'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <div className="swiper__details">
                        <div  className="img__user__swiper">
                            <img src={user4} className="user__swiper"/>
                        </div>
                        <h3>Someone Famous<br></br><span>Creative Designer</span></h3>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card__swiper'>
            <img src={quote} className="quote__swiper"/>
                <div className="swiper__content">
                    <p className='p__swiper'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <div className="swiper__details">
                        <div  className="img__user__swiper">
                            <img src={user5} className="user__swiper"/>
                        </div>
                        <h3>Someone Famous<br></br><span>Creative Designer</span></h3>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card__swiper'>
            <img src={quote} className="quote__swiper"/>
                <div className="swiper__content">
                    <p className='p__swiper'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <div className="swiper__details">
                        <div  className="img__user__swiper">
                            <img src={user6} className="user__swiper"/>
                        </div>
                        <h3>Someone Famous<br></br><span>Creative Designer</span></h3>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card__swiper'>
            <img src={quote} className="quote__swiper"/>
                <div className="swiper__content">
                    <p className='p__swiper'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer ut condimentum erat. Sed feugiat congue sem. 
                        Pellentesque egestas magna a dui dictum rhoncus. Sed 
                        finibus mollis dui, sed posuere dui molestie et. 
                    </p>
                    <div className="swiper__details">
                        <div  className="img__user__swiper">
                            <img src={user7} className="user__swiper"/>
                        </div>
                        <h3>Someone Famous<br></br><span>Creative Designer</span></h3>
                    </div>
                </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Section3;
