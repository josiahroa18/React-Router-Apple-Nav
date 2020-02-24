import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faDesktop } from '@fortawesome/free-solid-svg-icons';

function Mac(){
    return (
        <div className='nav-wrapper'>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faLaptop} size='3x'/>
                <Link>MacBook Air</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faLaptop} size='3x'/>
                <Link>MacBook Pro 13"</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faLaptop} size='3x'/>
                <Link>MacBook Pro 16"</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faDesktop} size='3x'/>
                <Link>iMac</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faDesktop} size='3x'/>
                <Link>iMac Pro</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faDesktop} size='3x'/>
                <Link>Mac Pro</Link>
            </div>
        </div>
    )
}

export default Mac;