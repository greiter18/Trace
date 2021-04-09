import React from 'react'
import WorkoutForm from './workout_form'

class EditWorkout extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.workout
  }

  componentDidMount(){
    this.props.fetchWorkout(this.props.match.params.workoutId)
    this.props.fetchRoutes(this.props.session.id)
  }

  handleSubmit(e){
    e.preventDefault(); // stops a refresh 
    this.props.updateWorkout(this.state, this.props.id).then(this.props.history?.push("/workouts"));
  }

  render(){
    if(!workout) return null

    let routesList = this.props?.routes.map(route => {
      return <option value={route.id}>{route.title}</option> 
    })
    return(
      // <div>
      //   <WorkoutForm 
      //   update={update}
      //   workout={workout}
      //   />
        <div>
        <form onSubmit={this.handleSubmit}>
          <div className="topWorkoutForm">
            <label className="workoutFormlabel" className="workoutFormlabel">Route </label> 
            <select onChange={this.handleChange('route_id')} className="routeOptions">
              <option className="routeOptionschoices" value="" disabled selected>Choose a route</option>
              {routesList}
            </select>
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
          <button className="workoutEditbutton">Save</button>
          <Link to='/'>Cancel</Link>
        </form>
      </div>

    )
  }
}

export default EditWorkout;