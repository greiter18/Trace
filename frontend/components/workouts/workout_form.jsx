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

  componentDidMount(){
    this.props.fetchRoutes(this.props.session.id)
  }

  handleSubmit(e){
    e.preventDefault(); // stops a refresh 
    this.props.createWorkout(this.state);
    console.log('routes--------',routes)
  }

  handleChange(field){
    return e => {
        this.setState({[field]: e.target.value})
    }
  }

  render(){
    let routesList = this.props?.routes.map(route => {
      return <option>{route.title}</option> 
    })
    return (
      <div>
        <MainNav/>
        <h1 className="woFormTitle">Workout Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="topWorkoutForm">
            <label className="workoutFormlabel" className="workoutFormlabel">Route </label> 
            <select onChange={this.handleChange('route_id')}>
              <option value="" disabled selected>Choose a route</option>
              {routesList}
              {/* <option >{Park Run}</option>
              <option >Short Run</option> */}
            </select>
            <div className="woTimeEntry">
              <label className="workoutFormlabel">Time</label>  
              <input type="number" onChange={this.handleChange('time')}/><input type="number" onChange={this.handleChange('time')}/><input type="number" onChange={this.handleChange('time')}/>
            </div>
          </div>
          <div className="midWorkoutForm">
            <label className="workoutFormlabel">Date</label>  <br/>
            <input type="date" onChange={this.handleChange('date')} 
            min="2021-01-01" max="2030-12-31"/>
            <label className="workoutFormlabel">Title </label> <br/>
            <input type="text" value={this.props.title} onChange={this.handleChange('title')} placeholder={'Evening Run'}/>
          </div>
          <div className="lowWorkoutForm">
           <label className="workoutFormlabel">Type</label> 
            <select onChange={this.handleChange('run_type')}>
              <option>run</option>
              <option>walk</option>
            </select>
            <label className="workoutFormlabel">Description </label>
            <textarea onChange={this.handleChange('description')} placeholder={'How did it go? Were you tired or rested? How was the weather'}/>
            <br/>
          </div>
          <button className="workoutCreatebutton">Create</button>
          <Link to='/'>Cancel</Link>
        </form>
      </div>
    )
  }
}

export default WorkoutForm;