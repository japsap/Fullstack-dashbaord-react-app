import React, { useEffect }from 'react';

import './Section-2.css';

import task from '../../img/task.png';

//icons
import { FiHome } from 'react-icons/fi'
import { MdOutlineDashboard } from 'react-icons/md';

//animations
import 'aos/dist/aos.css';
import Aos from 'aos';

const Section2 = () => {

    useEffect(() =>{
        Aos.init({ duration: 2000 })
    },[])

    return (
        <div className='swe__section2'>
            <h1 className='section2__h1' data-aos="fade-up">Utilization of a dashboard</h1>
            <div className='flexbox__section2'>
                <div className='flexbox__box-1' data-aos="flip-left">
                    <img src={task}/>
                </div>
                <hr className='section2__hr'></hr>
                <div className='flexbox__box-2' data-aos="flip-left">
                    <p className='flexbox1__p'>Utility</p> 
                    <h1 className='flexbox1__h1'>Connect all the needing tools in one!</h1>
                    {/* flexbox in the second flexbox */}

                    {/* first flexbox */}<div className='first__second__flexbox'>
                        <FiHome className='icon__first__second'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                        Integer ut condimentum erat.</p>
                    </div> {/* end flexbox */}
                    <hr className='second__flexbox__hr'></hr>
                    {/* second flexbox */}<div className='second__second__flexbox'>
                    <MdOutlineDashboard className='icon__second__second'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                        Integer ut condimentum erat.</p>
                    </div> {/* end flexbox */}
                </div>
            </div>
            <span className='section2__circle' data-aos="fade-left"></span>
        </div>
       
    )
}

export default Section2
