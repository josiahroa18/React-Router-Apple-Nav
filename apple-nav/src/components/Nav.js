import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    return(
        <nav>
            <div className="links">
                <FontAwesomeIcon icon={faApple} size='lg'/>
                <Link>Mac</Link>
                <Link>iPad</Link>
                <Link>iPhone</Link>
                <Link>Watch</Link>
                <Link>TV</Link>
                <Link>Music</Link>
                <Link>Support</Link>
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faShoppingBag} />
            </div>  
        </nav>
    ); 
}

export default Nav;