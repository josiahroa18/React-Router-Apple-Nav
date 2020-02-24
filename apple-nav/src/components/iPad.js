import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTabletAlt, faPen } from '@fortawesome/free-solid-svg-icons';

function iPad(){
    return(
        <div className='nav-wrapper'>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faTabletAlt} size='3x'/>
                <Link>iPad Pro</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faTabletAlt} size='3x'/>
                <Link>iPad Air</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faTabletAlt} size='3x'/>
                <Link>iPad</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faTabletAlt} size='3x'/>
                <Link>iPad Mini</Link>
            </div>
            <div className='product-wrapper'>
                <FontAwesomeIcon icon={faPen} size='3x'/>
                <Link>Apple Pencil</Link>
            </div>
        </div>
    );
}

export default iPad;