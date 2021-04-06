import {connect} from 'react-redux';
import { updateRoute, fetchRoute } from '../../actions/routes_action';
import Map from './map'
import React from 'react'


class EditRouteForm extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const routeId = this.props.match.params.routeId;
		if (!this.props.routes[routeId]) {
			this.props.fetchRoute(routeId);
		}
  }
  render(){
    const { routes, formType, updateRoute } = this.props;
    const routeId = this.props.match.params.routeId;
    debugger
    return routes[routeId] ? (
      <div>
        <Map route={routes[routeId]} formType={formType} updateRoute={updateRoute}/>
      </div>
    ): null;
  }
};

const mstp = (store, ownProps) => {
  console.log('container------',store)
  const routeId = ownProps.match.params.routeId
  return {
    routes: store.entities.routes,
    formType: 'Edit Route'
  };
};

const mdtp = dispatch => {
  debugger
  return {
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    updateRoute: routeId => dispatch(updateRoute(routeId))
  }
}

export default connect(mstp,mdtp)(EditRouteForm);