import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="div">
            <h3 className="h3">
                <a href="https://github.com/IgorSurzhko/react-gotapp.git">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="ul">
                <li>
                    <a href="https://github.com/IgorSurzhko/react-gotapp.git">Characters</a>
                </li>
                <li>
                    <a href="https://github.com/IgorSurzhko/react-gotapp.git">Houses</a>
                </li>
                <li>
                    <a href="https://github.com/IgorSurzhko/react-gotapp.git">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;