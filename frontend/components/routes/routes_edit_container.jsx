import {connect} from 'react-redux';
import { updateRoute, fetchRoute } from '../../actions/routes_action';
import Map from './map'
import React from 'react'


class EditRouteForm extends React.Component{
  constructor(props){
    super(props)

    
  }
  render(){
    const { route, formType, updateRoute } = this.props;
    const routeId = this.props.match.params.routeId;

    return route[routeId] ? (
      <div>
        <Map route={route} formType={formType} updateRoute={updateRoute}/>
      </div>
    ) : null;
  }
}

const mstp = (store, ownProps) => {
  console.log('container------',store)
  const routeId = ownProps.match.params.routeId
  return {
    route :store.entities.routes[routeId]
  };
};

const mdtp = dispatch => {
  debugger
  return {
    fetchRoute: workoutId => dispatch(fetchRoute(workoutId)),
    updateRoute: routeId => dispatch(updateRoute(routeId))
  }
}

export default connect(mstp,mdtp)(EditRouteForm);