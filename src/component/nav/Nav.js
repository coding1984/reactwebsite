import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../button/Button';
import './nav.css'
function Nav() {
    return ( 
        <nav> 
            <ul className="navList">
                <li className="logo"><img src="images/logo.svg" alt="" /></li>
                <li>Home</li>
                <li>Community</li>
                <li>Blog</li>
                <li>Event</li>
            </ul>
            <div className="sideBBtn">
                <input type="search" placeholder="Search Here..." name="" id="" />
                <Button value="Login" bgColor="#217BF4" border="none" color="white"/>
            </div>
        </nav>
     );
}

export default Nav;