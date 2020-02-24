import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function iPhone(){
    return(
        <div className='nav-wrapper'>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMobileAlt} size='3x'/>
                <Link>iPhone 11 Pro</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMobileAlt} size='3x'/>
                <Link>iPhone 11</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMobileAlt} size='3x'/>
                <Link>iPhone Xr</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMobileAlt} size='3x'/>
                <Link>iPhone 8</Link>
            </div>
        </div>
    );
}

export default iPhone;