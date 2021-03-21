import React from 'react'
import WorkoutNav from '../workouts/workout_nav'
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
      <WorkoutNav/>
      Create a New Workout
      <form onSubmit={this.handleSubmit}>
        Title <input type="text" value={this.props.title} onChange={this.handleChange('title')}/>
        Date <input type="date" onChange={this.handleChange('date')} 
        min="2021-01-01" max="2030-12-31"/>
        Description <input type="text"  onChange={this.handleChange('description')}/>
        Time <input type="time"  onChange={this.handleChange('time')}/>
        {/* <input type="time" name="limittime" list="limittimeslist" step="0.001"></input> */}
        Type <select onChange={this.handleChange('run_type')}>
          <option>run</option>
          <option>walk</option>
          </select>
        Route <select onChange={this.handleChange('route_id')}>
          <option >Park Run</option>
          <option >Short Run</option>
        </select>
        <button>Create Workout</button>
      </form>
    </div>
  )
  }
}

export default WorkoutForm;