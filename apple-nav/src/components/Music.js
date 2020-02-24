import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function Music(){
    return(
        <div className='nav-wrapper'>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMusic} size='3x'/>
                <Link>Apple Music</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMusic} size='3x'/>
                <Link>Air Pods Pro</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMusic} size='3x'/>
                <Link>Air Pods</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMusic} size='3x'/>
                <Link>HomePod</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMobileAlt} size='3x'/>
                <Link>iPod touch</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faMusic} size='3x'/>
                <Link>Music Accessories</Link>
            </div>
        </div>
    );
}

export default Music;