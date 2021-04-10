import React from 'react'
import MainNav from '../mainNav/main_nav'
import { Link, withRouter } from 'react-router-dom';

class WorkoutForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.workout; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchRoutes(this.props.session?.id)
  }

  handleSubmit(e){
    e.preventDefault(); // stops a refresh 
    this.props.action(this.state, this.props.currentUser).then(this.props.history?.push("/workouts"));
  }

  handleChange(field){
    return e => {
        this.setState({[field]: e.target.value})
    }
  }

  render(){
    let link = this.props.formType === "Edit" ?
    `/workouts` : `/`

    let routesList = this.props?.routes?.map(route => {
      return <option value={route.id}>{route.title}</option> 
    })

    let formName = this.props.formType === "Edit" ?
    'Update' : 'Create'
    return (
      <div>
        <MainNav/>
        <h1 className="woFormTitle">Workout Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="topWorkoutForm">
            <label className="workoutFormlabel" className="workoutFormlabel" >Route </label> 
            <select onChange={this.handleChange('route_id')} className="routeOptions" >
              <option className="routeOptionschoices" value={this.state?.route?.title}  disabled selected>Choose a route</option>
              {routesList}
            </select>
            <div className="woTimeEntry">
              <label className="workoutFormlabel">Time</label>  
              <input type="number" onChange={this.handleChange('hours')} value={this.state.hours} placeholder={'hr'} className="timeInpute" min="0" max="100"/>
              <input type="number" onChange={this.handleChange('minutes')} value={this.state.minutes} placeholder={'min'} className="timeInpute" min="0" max="59"/>
              <input type="number" onChange={this.handleChange('seconds')} value={this.state.seconds} placeholder={'s'} className="timeInpute" min="0" max="59"/>
            </div>
          </div>
          <div className="midWorkoutForm">
            <label className="workoutFormlabel">Date</label>  <br/>
            <input type="date" onChange={this.handleChange('date')} 
            min="2021-01-01" max="2030-12-31" value={this.state.date}/>
            <label className="workoutFormlabel">Title </label> <br/>
            <input type="text" value={this.state.title} onChange={this.handleChange('title')} placeholder={'Evening Run'}/>
          </div>
          <div className="lowWorkoutForm">
           <label className="workoutFormlabel">Type</label> 
            <select onChange={this.handleChange('run_type')} value={this.state.run_type}>
              <option>run</option>
              <option>walk</option>
            </select>
            <label className="workoutFormlabel">Description </label>
            <textarea onChange={this.handleChange('description')} value={this.state.description} placeholder={'How did it go? Were you tired or rested? How was the weather'}/>
            <br/>
          </div>
          <button className="workoutCreatebutton">{formName}</button>
          <Link to={link}>Cancel</Link>
        </form>
        {console.log({ 
          title: this.state.title,
          description: this.state.description,
          date: this.state.date,
          hours: this.state.hours, 
          minutes: this.state.minutes, 
          seconds: this.state.seconds, 
          run_type: this.state.run_type,
          route_id: this.state.route_id,
          current: this.props.currentUser},
          this.props.action
          )}
      </div>
    )
  }
}

export default WorkoutForm;