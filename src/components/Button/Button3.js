import React from 'react'

import { Link } from 'react-router-dom';

const Button3 = (props) => {
    return (
        <div>
            <button className='btn-header'><Link to='/'><i class="fal fa-undo-alt pos-icon-btn"></i>{props.title}</Link></button>
        </div>
    )
}

export default Button3
