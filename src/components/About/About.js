import React from 'react';
import './About.css'
export default function About(){
    return(
        <div className="About" id="about">
            <div className="section" id="aboutSection">
                        <div className="container" id="aboutcontainer">
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="about-left">
                                        <img className="headshot" src="public/images/75-feather-1.png" alt="headshot" ></img>
                                            <div className="icons" >
                                                <div className="icon-block center clickable">
                                                    <a href="//www.github.com/skuttenkuler" >
                                                        <i style={{color:"#fff"}} className="fa fa-github fa-4x">
                                                            <span className="screen-reader-text"></span>
                                                        </i>
                                                    </a>
                                                    <a href="//linkedin.com/in/skdev91" >
                                                        <i style={{color:"#fff"}} className="fa fa-linkedin fa-4x">
                                                            <span className="screen-reader-text"></span>
                                                        </i>
                                                    </a>
                                                    <a href="//medium.com/@sam.kuttenk" >
                                                        <i style={{color:"#fff"}} className="fa fa-medium fa-4x">
                                                            <span className="screen-reader-text"></span>
                                                        </i>
                                                    </a>
                                                   
                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-2">
                                        <div className="about-right">
                                            <div className="about-header">
                                            <h1>Software</h1>
                                            <h1 className="engineer-text">Engineer</h1>
                                            </div>
                                            <div className="bio">
                                                <p> Full Stack Web Developer with a Bachelor’s in Music that brings a 
                                                    strong creative approach to not only the front end design but problem 
                                                    solving as well. Recently procuring certifications from Stanford University 
                                                    in Machine Learning as well as a certificate in Full Stack Web Development 
                                                    from UC Berkeley. I utilize my creativity and knowledge of a variety of tools 
                                                    such as React, Django, AWS, Python, and Javascript to build incredibly dynamic 
                                                    and interactive applications whether built for web or on mobile.  
                                                    Applying my three years experience of self-starting freelancing building and 
                                                    deploying web and mobile applications for a variety of clients and new education from 
                                                    Berkeley to build the best experiences on all platforms. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}