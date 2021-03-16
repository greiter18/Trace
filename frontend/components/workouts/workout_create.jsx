import React from 'react'
import WorkoutNav from '../workouts/workout_nav'
import { Link, withRouter } from 'react-router-dom';

class WorkoutForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {title:'',description:'',date:'',time:'', run_type:'',route_id:''}
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

  // handleTitle(e){
  //   this.setState({ title: e.target.value })
  // }
  // handleDescription(e){
  //   this.setState({ description: e.target.value })
  // }
  // handleDate(e){
  //   this.setState({ date: e.target.value })
  // }
  // handleTime(e){
  //   this.setState({ time: e.target.value })
  // }
  // handleType(e){
  //   this.setState({ type: e.target.value })
  // }
  // handleRoute(e){
  //   this.setState({ route_id: e.target.value })
  // }
  // handleDate(e){
  //   this.setState({ date: e.target.value })
  // }


  render(){
  return (
    <div>
      <WorkoutNav/>
      Create a New Workout
      <form onSubmit={this.handleSubmit}>
        Title <input type="text" onChange={this.handleChange('title')}/>
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