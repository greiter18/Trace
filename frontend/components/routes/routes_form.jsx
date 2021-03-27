import React from 'react'
import RouteNav from './routes_nav'
import { Link, withRouter } from 'react-router-dom';
import Maps from './map'

class RouteForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e){
    e.preventDefault(); 
    this.props.createRoute(this.state);
  }

  handleChange(field){
    return e => {
        this.setState({[field]: e.target.value})
    }
  }

  render(){
    return (
      <div>
        <RouteNav/>
        <br/>
      <form onSubmit={this.handleSubmit}>
        <div className="routeFormTop">
          <label>Title</label><br/>
          <input type="text" onChange={this.handleChange('title')}/>
          <button>Save</button>
        </div>
        <Maps/> 
      </form>
        <br />
      </div>
    )
  }
}

export default RouteForm;