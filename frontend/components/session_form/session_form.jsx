import React from 'react';
import NavBar from './nav_bar'
import { Link, withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { REMOVE_SESSION_ERROR } from '../../actions/session_actions';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
  }


  componentWillUnmount(){
    this.props.removeErrors(); // clear errors
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  handleChange(field){
    return e => {
      this.setState({[field]: e.target.value})
    }
  }


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){

    let buttonName;
    if (this.props.formType === 'login') {
      buttonName = 'Log In'
    } else {
      buttonName = "Sign Up"
    }


    let formName;
    if (this.props.formType === 'login'){
      formName = 'Log In'
    } else {
      formName = "Join Trace today, it's Free."
    }

    let OrSwitch;
    if(this.props.formType === 'login'){
      OrSwitch = 'Or log in with email'
    } else {
      OrSwitch = 'or sign up with your email address'
    }

    let finePrint;
    if (this.props.formType === 'signup') {
      finePrint = 'By signing up for Trace, you agree to the.Terms of Service.View our Privacy Policy'
    } 


    return (
      <div>
      <NavBar/>
      <div className="background_image">
        <body className="form_container">
          {/* <section>
            <img className="session_image" />
          </section>   */}
          <h1 className="form_title">{formName}</h1>    
          <form className="session_form" onSubmit={this.handleSubmit}>
            <br/>
            <div className="form_body">
              <section className="error_message">{this.renderErrors()}</section>
              <Link className="session_form_demo" to="/demo">Demo</Link>
                <button onClick={() => { this.props.login({ email: 'guest', password:'password'})}}> Demo User </button> 
              <br/>
              <section className="orSwitch">{OrSwitch}</section>    
              <br/>  
              <input className="form_input" type="text" value={this.state.email} onChange={this.handleChange('email')}  placeholder={'Your Email'}/>
              <br/>
                <input className="form_input" type="password" value={this.state.password} onChange={this.handleChange('password')}  placeholder={'Password'}/>
              <br/>
              <button className="session_button">{buttonName}</button>
            </div>  
            <p className='session_fine_print'>{finePrint}</p>
          </form>    
          
        </body>
      </div>
      </div>
    )
  }
}

export default SessionForm;