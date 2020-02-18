import React from 'react';

import './Navbar.css'
import ToggleButton from '../SideDrawer/ToggleButton'
import './Navbar.css'
export default function Navbar(props){
return(
        <header>
            <nav className="navbar" >
                <div className="toggle-btn">
                    <ToggleButton click={props.drawerClick}/>
                </div>
                <ul className="nav navbar-nnav">
                    <li><a href="/portfolio" className="menu-links" >About</a></li>
                    <li><a href="/projects" className="menu-links" >Projects</a></li>
                    <li><a href="/contact" className="menu-links" >Contact</a></li>                
                </ul>
            </nav>
        </header>
        );

}