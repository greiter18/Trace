import React from 'react'
import RouteNav from './routes_nav'
import { Link, withRouter } from 'react-router-dom';

class RouteForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  handleSubmit(e){
    e.preventDefault(); // stops a refresh 
    this.props.createRoute(this.state);
  }

  render(){
    return (
      <div>
        <RouteNav/>
        <br/>
        <h1>Create a New Route</h1>
      <form onSubmit={this.handleSubmit}>
        <button>Create Route</button>
      </form>
        <br />
      </div>
    )
  }
}

export default RouteForm;