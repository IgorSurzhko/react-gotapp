import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="div">
            <h3 className="h3">
                <Link to='/'>
                Game of Thrones DB
                </Link>
            </h3>
            <ul className="ul">
                <li>
                    <Link to='/characters'>Characters</Link>
                </li>
                <li>
                    <Link to='/houses'>Houses</Link>
                </li>
                <li>
                    <Link to='/books'>Books</Link>   
                </li>
            </ul>
        </div>
    );
};

export default Header;