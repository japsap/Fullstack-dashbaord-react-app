import React from 'react';

import './Button.css';

import { Link } from 'react-router-dom';

const Button2 = ( ) => {
    return (
        <div>
            <button className='btn2-header'><Link to='/login'><i class="fal fa-users pos-icon-btn"></i>Login</Link></button>
        </div>
    )
}

export default Button2
