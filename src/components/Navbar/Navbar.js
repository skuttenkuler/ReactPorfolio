import React from 'react';

import './Navbar.css'
import ToggleButton from '../SideDrawer/ToggleButton'
import './Navbar.css'
import Resume from '../PDF/pdfButton'
const Navbar = (props) => (

        <header>
            <nav className="navbar" >
                <div className="toggle-btn">
                    <ToggleButton click={props.drawerClick}/>
                </div>
                <ul className="nav navbar-nnav">
                    <li><a href="#about" className="menu-links" >About</a></li>
                    <li><a href="#work" className="menu-links" >Projects</a></li>
                    <li><a href="#contact" className="menu-links" >Contact</a></li>                
                </ul>
                <Resume/>
            </nav>
        </header>
        );

export default Navbar;