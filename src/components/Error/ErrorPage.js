import React from 'react';

import Error from '../../img/404.png';
import Button3 from '../Button/Button3';



import './Error.css';

const ErrorPage = () => {
    return (
        <div>
            <img src={Error} className='img-error'/>
            <div className='display-flex-error'>
                
                <h1 className='h1-error'>Broken Link</h1>
                <p className='p-error'>It looks like you have followed a broken link</p>

                <div className='btn-error'>
                    <Button3 title='Go back'/>
                </div>
            </div>
        
            
        </div>
    )
}

export default ErrorPage
