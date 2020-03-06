# Portfolio 3
Developer Portfolio built with React

# Deployed Link
[Portfolio](https://skuttenkuler.github.io/ReactPorfolio/)


# Visual

![Alt text](./src/assets/images/portfolio.gif?raw=true "Preview")


# Technologies
* [React](https://reactjs.org/)
* [React-Router](https://reacttraining.com/react-router/web/guides/quick-start)
* CSS
* JSX
* [Emailjs](https://www.emailjs.com/)
* [Bootstrap](https://getbootstrap.com/)




# Code Snippets
    - Utilizing power of React to manage all components in my Portfolio Component with responsive side drawer for mobile

```JSX
   class Portfolio extends Component{
    state = {
        sideDrawer: false
    }
    toggleHandler = () => {
        console.log("clicked")
        this.setState(prevState => {
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
        <Navbar toggleHandler={this.drawerClick}/>
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
```

    

# Author
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)