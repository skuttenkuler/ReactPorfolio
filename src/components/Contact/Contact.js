import React from 'react';
import Form from './Form/Form'
import Footer from '../Footer/Footer'
import './Contact.css'
export default function Contact(){
    return(
        <div id="contact">
            <div className="section" id="contactSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="contact-left">
                                <h1>Thank you for visiting!</h1>
                                <p>If you wish to contact me,</p>
                                <p>please fill out this form!</p>
                                <p></p>
                                <p> - Cheers!</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="contact-right">
                                <div className="contact-form">
                                    <Form/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    </div>
)
}