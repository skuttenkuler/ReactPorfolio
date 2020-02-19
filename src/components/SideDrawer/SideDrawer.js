import React from 'react';
import Resume from '../PDF/pdfButton'
import './SideDrawer.css'

export default function SideDrawer(props){
    let drawerClass = 'side-drawer';
    if(props.show){
        drawerClass ='side-drawer open'
    }
    return(
            <nav className={drawerClass}>
                <ul>
                    <li><a href="/portfolio" >About</a></li>
                    <li><a href="/projects" >Projects</a></li>
                    <li><a href="/contact" >Contact</a></li>   
                    <li><Resume/></li>             
                </ul>
            </nav>
    )
}