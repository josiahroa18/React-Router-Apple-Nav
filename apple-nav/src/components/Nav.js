import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    return(
        <nav>
            <div className="links">
                <Link to='/'>
                    <FontAwesomeIcon icon={faApple} size='lg'/>
                </Link>
                <Link to='/mac'>Mac</Link>
                <Link to='/ipad'>iPad</Link>
                <Link to='/iphone'>iPhone</Link>
                <Link to='/watch'>Watch</Link>
                <Link to='/tv'>TV</Link>
                <Link to='/music'>Music</Link>
                <Link to='/support'>Support</Link>
                <Link to='/search'>
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
                <Link to='/bag'>
                    <FontAwesomeIcon icon={faShoppingBag} />
                </Link>
                
                
            </div>  
        </nav>
    ); 
}

export default Nav;