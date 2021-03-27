import React from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper , InfoWindow, Marker} from 'google-maps-react';
// let myLatlng = new google.maps.LatLng(40.630087000,-74.107730000);
// let marker = new google.maps.Marker({
//   position: myLatlng,
// })
class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marks: []
    }
    this.points = this.state.marks
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.geocoder = new google.maps.Geocoder();
  }

  componentDidMount(){
    const options = {
      center: {lat: 40.6302923, lng: -74.1077045},
      zoom: 15,
      mapId: '2cf9dff401d20cef',
      clickableIcons: false
    };
    this.map = new google.maps.Map(this.mapstart, options);
    //          where the map is going / options

    this.map.addListener("click", (e) => {
			// adds lat/lng object to waypoints array
			this.points.push({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      console.log("points----------",this.points)
      this.directionsRenderer.setMap(map)
			this.renderMarkers();
		});
  }

  renderMarkers(){
    const beginPoint = this.points[0];
    let endPoint = this.points[this.points.length - 1];
    this.setState({["marks"]: this.points})

    this.directionsService.route({
      origin: beginPoint,
      destination: endPoint,
      travelMode: google.maps.TravelMode.WALKING
    },
    (response, status) => {
      if (status === 'OK') {
        const distance = response.routes[0].legs[0].distance.text;
        // let thumbnail = this.getThumbnailUrl(response);
        let bounds = response.routes[0].bounds;

        this.directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request faile due to " + status);
      }
    })
  }

  searchAddress(address) {
		this.geocoder.geocode({ address: address }, (res, status) => {
			const locationName = res[0];
			if (status === "OK") {
				this.map.setCenter(res[0].geometry.location);
				this.setState({ ["location"]: res[0] });
			}
		});
	}


  render(){
    return(
      <div>
        <div>
        	{/* <form
								className="cr-search-bar"
								onSubmit={() => this.searchAddress(address)}
							>
								<label>Choose map location</label>
								<input
									className="input geocoder"
									type="text"
									placeholder="Enter location"
									// value={this.state.address}
									// onChange={this.update("address")}
								/>
								<button id="geocoder-submit">Search</button>
							</form> */}
        </div>
        <div id='map' ref={(map) => (this.mapstart = map)}></div> 
      </div>
    )
  }
}

export default Maps;