import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Backdrop from '../Backdrop/Backdrop'

class Portfolio extends Component{
    state = {
        sideDrawerOpen: false,
      };
      drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
      }
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }
    
    
      render() {
        let backdrop;
    
        if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
    
         }
    return(
        <div style={{height: "100%"}}>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
             <About/>
             <Projects/>
             <Contact/>
        </div>
        )
    }
}
export default Portfolio;