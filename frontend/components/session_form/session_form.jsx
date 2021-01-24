import React from 'react';
import NavBar from './nav_bar'
import { Link, withRouter } from 'react-router-dom';

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


    return (
      <div className="form_container">
        <header><NavBar/></header>
        
        <form  onSubmit={this.handleSubmit}>
          <div className="session_form">
            <h1>{formName}</h1>
            <Link to="/demo">Demo</Link>

            <section className="orSwitch">{OrSwitch}</section>
            {this.renderErrors()}
            <label>Email:
          <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
            </label>
            <br/>
            <label>Password:
          <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
            </label>

          
          <button>{this.props.formType}</button>
          {/* <input className="sessionSubmit" type="submit" value={this.props.formType}/> */}

          <div>
              <p className="sessions_fine_print">By signing up for Trace, you agree to the <p className='white_print'> Terms of Service.</p> View our <p className='white_print'> Privacy Policy</p></p>
          </div>
            </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;