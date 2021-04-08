import React from 'react'
import MainNav from '../mainNav/main_nav'
import { Link, withRouter } from 'react-router-dom';

class WorkoutForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.workout; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
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

  handleRoute(){
    return e => {
      this.setState({run_id: e.target.value})
    }
  }

  handleTime(field){
    return e => {
      if(field === 'hr'){
        if (this.state.time % 3600 ){}
        let hour = e.target.value * 3600
        let currentTime = this.state.time
        this.setState({time: currentTime += hour})
      } 
      if(field === 'min'){
        let minute = e.target.value * 60
        let currentTime = this.state.time
        this.setState({time: currentTime += minute})
      } 
      if(field === 'sec'){
        let second = e.target.value * 1
        let currentTime = this.state.time
        this.setState({time: currentTime += second})
      } 
    }
  }

  render(){
    let routesList = this.props?.routes.map(route => {
      return <option value={route.id}>{route.title}</option> 
    })
    return (
      <div>
        <MainNav/>
        <h1 className="woFormTitle">Workout Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="topWorkoutForm">
            <label className="workoutFormlabel" className="workoutFormlabel">Route </label> 
            <select onChange={this.handleChange('route_id')} className="routeOptions">
              <option className="routeOptionschoices" value="" disabled selected>Choose a route</option>
              {routesList}
            </select>
            <div className="woTimeEntry">
              <label className="workoutFormlabel">Time</label>  
              <input type="number" onChange={this.handleTime('hr')} placeholder={'hr'} className="timeInpute"/><input type="number" onChange={this.handleTime('min')} placeholder={'min'} className="timeInpute"/><input type="number" onChange={this.handleTime('sec')} placeholder={'s'} className="timeInpute"/>
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
        {console.log({ 
          title: this.state.title,
          description: this.state.description,
          date: this.state.date,
          time: this.state.time, 
          run_type: this.state.run_type,
          route_id: this.state.route_id
          })}
      </div>
    )
  }
}

export default WorkoutForm;