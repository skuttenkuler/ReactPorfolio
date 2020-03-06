import React from 'react';
import Resume from '../PDF/pdfButton'
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses ='side-drawer open'
    }
    return(
            <nav className={drawerClasses}>
                <ul>
                    <li><a href="#portfolio" >About</a></li>
                    <li><a href="#projects" >Projects</a></li>
                    <li><a href="#contact" >Contact</a></li>   
                    <li><Resume/></li>             
                </ul>
            </nav>
    )
}
export default SideDrawer