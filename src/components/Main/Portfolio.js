import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Backdrop from '../Backdrop/Backdrop'

class Portfolio extends Component{
    state = {
        sideDrawer: false
    }
    toggleHandler = () => {
        console.log("clicked")
        this.setState((prevState) => {
            return {sideDrawer: !prevState.sideDrawer}
        })
    };
    backdropHandler = () => {
        this.setState({sideDrawer: false});
    }
    render(){
        let backD;
        if(this.state.sideDrawer){
            backD = <Backdrop click={this.backdropHandler}/>;
        }
    return(
        <div style={{height: "100%"}}>
        <Navbar clickHandler={this.drawerClick}/>
        <SideDrawer show={this.state.sideDrawer}/>
        {backD}
             <About/>
             <Projects/>
             <Contact/>
        </div>
        )
    }
}
export default Portfolio;