import React, { Component } from 'react';
import {Button} from 'reactstrap';
import emailjs from 'emailjs-com';
import './Form.css'

class Form extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleFormSubmit(event){
    event.preventDefault();

    const {name, email, subject, message} = this.state

    let template = {
      from_name: email,
      to_name: process.env.EMAIL,
      subject: subject,
      message_html: message,
    }
    emailjs.send(
      'gmail',
      'template_H6l3Jaof',
      template,
      'user_O0qb3s8JllMC7ifFAiidy'
    )
    this.resetForm()
  }

  resetForm(){
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleInputChange = (param, event) => {
    this.setState({[param]: event.target.value})
  }
    
  
    render() {
      return (
        <div className="col-md-6 col-sm-6">
        <form className="form" id="fs-frm" name="contact" onSubmit={this.handleFormSubmit.bind(this)}>
          <div className="form-group">
          <label for="full-name">
            Name:
            <br></br>
            <input type="text"
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInputChange.bind(this, 'name')}
                    placeholder="Name..." />
          </label>
          </div>
          <div className="form-group">
          <label for="email-address">
            Email:
            <br></br>
            <input type="email"
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleInputChange.bind(this, 'email')}
                    placeholder="Email..." />
          </label>
          </div>
          <div className="form-group">
          <label for="subject">
            Subject:
            <br></br>
            <input type="text"
                    name="subject" 
                    value={this.state.subject} 
                    onChange={this.handleInputChange.bind(this, 'subject')}
                    placeholder="Subject..." />
          </label>
          </div>
          <div className="form-group">
          <label for="message">
            Message:
            <br></br>
            <input type="text" 
                    name="message"
                    value={this.state.message}
                     onChange={this.handleInputChange.bind(this, 'message')}
                     placeholder="Message..." />
          </label>
          </div>
          <Button variant="primary" className="contact_form_button" type="submit">
            Send
          </Button>
        </form>
        </div>
      );
    }
  }
export default Form;