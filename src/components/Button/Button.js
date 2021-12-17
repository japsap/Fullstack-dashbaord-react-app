import React from 'react';

import './Button.css';

import { Link } from 'react-router-dom'


const Button = ( ) => {
    return (
        <div>
            <button className='btn-header'><Link to='/login'> <i class="fal fa-search pos-icon-btn"></i> Sign up</Link></button>
        </div>
    )
}

export default Button
