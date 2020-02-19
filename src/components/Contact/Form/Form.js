import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
                        name: '',
                        email: '',
                        message: ''
                    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
            name: event.target.name,
            email: event.target.email,
            message: event.target.message});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name + this.state.email + this.state.message);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="col-md-6 col-sm-6">
        <form className="form" id="fs-frm" name="contact" onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label for="full-name">
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          </div>
          <div className="form-group">
          <label for="email-address">
            Email:
            <input type="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          </div>
          <div className="form-group">
          <label for="message">
            Message:
            <input type="text" value={this.state.message} onChange={this.handleChange} />
          </label>
          </div>
          <input className="contact_form_button" type="submit" value="Submit"/>
        </form>
        </div>
      );
    }
  }
export default Form;