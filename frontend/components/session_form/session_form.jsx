import React from 'react';
import NavBar from './nav_bar'

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
      formName = 'Sign Up'
    }


    return (
      <div className="loginForm Container">
        <header><NavBar/></header>
        <h1>{formName}</h1>
        <form onSubmit={this.handleSubmit}>
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

        </form>
      </div>
    )
  }
}

export default SessionForm;