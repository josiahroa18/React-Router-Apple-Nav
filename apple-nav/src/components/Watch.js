import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Watch(){
    return(
        <div className='nav-wrapper'>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faClock} size='3x'/>
                <Link>Apple Watch Series 5</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faClock} size='3x'/>
                <Link>Apple Watch Hermes</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faClock} size='3x'/>
                <Link>Apple Watch Edition</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faClock} size='3x'/>
                <Link>Apple Watch Series 3</Link>
            </div>
        </div>
    );
}

export default Watch;