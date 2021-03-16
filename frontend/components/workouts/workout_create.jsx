import React from 'react'
import WorkoutNav from '../workouts/workout_nav'
import { Link, withRouter } from 'react-router-dom';

class WorkoutForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {title:'',description:'',date:'',time:'', run_type:''}
    console.log('++++++++++++++++++',this.state)
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

  handleTitle(e){
    this.setState({ title: e.target.value })
  }
  handleDescription(e){
    this.setState({ title: e.target.value })
  }
  handleTime(e){
    this.setState({ title: e.target.value })
  }
  handleType(e){
    this.setState({ title: e.target.value })
  }


  render(){
  return (
    <div>
      <WorkoutNav/>
      {console.log('-----------------state:',this.state)}
      <form onSubmit={this.handleSubmit}>
        Title <input type="text" value={this.state.title} onChange={this.handleTitle}/>
        Description <input type="text" value={this.state.description} onChange={this.handleDescription}/>
        Time <input type="text" value={this.state.time} onChange={this.handleTime}/>
        
        Type <select value={this.state.run_type} onChange={this.handleType}>
          <option value="run">Run</option>
          <option value="walk">Walk</option>
        </select>

      </form>
    </div>
  )
  }
}

export default WorkoutForm;