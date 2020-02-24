import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';

function Tv(){
    return(
        <div className='nav-wrapper'>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faTv} size='3x'/>
                <Link>Apple Tv+</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faTv} size='3x'/>
                <Link>Apple Tv app</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faTv} size='3x'/>
                <Link>Apple TV 4k</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faTv} size='3x'/>
                <Link>Apple Tv HD</Link>
            </div>
        </div>
    );
}

export default Tv;