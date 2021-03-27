import React from 'react'
import MainNav from '../mainNav/main_nav'
import { Link, withRouter } from 'react-router-dom';

class WorkoutForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.workout 
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault(); // stops a refresh 
    this.props.createWorkout(this.state);
  }

  handleChange(field){
    return e => {
        this.setState({[field]: e.target.value})
    }
  }

  render(){
    return (
      <div>
        <MainNav/>
        Create a New Workout
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Route </label> 
            <select onChange={this.handleChange('route_id')}>
              <option >Park Run</option>
              <option >Short Run</option>
            </select>
            <div>
              <label>Time</label>  
              <input type="number" onChange={this.handleChange('time')}/><input type="number" onChange={this.handleChange('time')}/><input type="number" onChange={this.handleChange('time')}/>
            </div>
          </div>
          <div>
          <label >Date</label>  <br/>
          <input type="date" onChange={this.handleChange('date')} 
          min="2021-01-01" max="2030-12-31"/>
          <label>Title </label> <br/>
          <input type="text" value={this.props.title} onChange={this.handleChange('title')}/>
          </div>
          <div>
           <label>Type</label> 
            <select onChange={this.handleChange('run_type')}>
              <option>run</option>
              <option>walk</option>
            </select>
            <label>Description </label>
            <textarea onChange={this.handleChange('description')}/>
            <br/>
          </div>
          <button>Create</button>
          <Link to='/'>Cancel</Link>
        </form>
      </div>
    )
  }
}

export default WorkoutForm;