# README

An fullstack application where you can create your favorite running routes using Google Maps API and use them to log your workouts.  
Inspired by Strava

##### Quick Demo
![mapdemo](https://user-images.githubusercontent.com/66323451/119569613-fb9e9300-bd7c-11eb-861f-6d5f6aaaac0b.gif)  

<img width="1242" alt="HomeScreen" src="https://user-images.githubusercontent.com/66323451/108069374-4c417a00-7031-11eb-81e2-7ca3321e6e5a.png">

## Features  

#### User Authorization

Users are required to create an account with an email and password to gain access to the application, Otherwise you can not access the site.  

![Screen Shot 2021-04-19 at 12 04 30 PM](https://user-images.githubusercontent.com/66323451/115268155-f90aa700-a107-11eb-99cb-5d69803b1297.png)

Otherwise you can use the demo button for quick and easy access.

```javascript
   <form className="session_form" onSubmit={this.handleSubmit}>
              <br/>
              <div className="form_body">
                <span className="session_form_lines" id="session_form_demo" 
                onClick={() => { this.props.login({ email: 'guest', password:'password'})}}> Demo User </span> 
                <br/>
                <section className="orSwitch">{OrSwitch}</section>    
                <br/> 
                <input className="session_form_lines" className="form_input" type="text" 
                value={this.state.email} onChange={this.handleChange('email')}  placeholder={'     Your Email'}/>  
                <input className="session_form_lines" className="form_input" type="password" 
                value={this.state.password} onChange={this.handleChange('password')}  placeholder={'     Password'}/>
                <br/>
                <button className="session_form_lines" id="session_button">{buttonName}</button>
              </div>  
              <p className='session_fine_print'>{finePrint}</p>
            </form>    
```
#### Create Routes
Users can create the favorite running routes using google maps. Click on 2 points of the map to see the route.  

![Screen Shot 2021-04-19 at 12 07 33 PM](https://user-images.githubusercontent.com/66323451/115268430-41c26000-a108-11eb-80a9-da33be4b6d51.png)  

#### Google Maps Api
Google Mapis Api is the heart of the application. Each route is saved in the database. Each route consist of a beginning and end latitude and longitude. These are just coordinates saved as integers in the database. Below shows the code to create the map and the click feature that adds the waypoints on the map.  


```javascript
 componentDidMount(){
    const options = {
      center: {lat: 40.6302923, lng: -74.1077045},
      zoom: 15,
      mapId: '2cf9dff401d20cef',
      clickableIcons: false,
      maxZoom: 15
    };
    this.map = new google.maps.Map(this.mapstart, options);
    this.directionsRenderer.setMap(this.map)
    this.map.addListener("click", (e) => {
      if(this.points.length > 1) this.points.pop()
			this.points.push({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      this.toggleDisable()
			this.renderMarkers();
		});
```  


#### Create Workouts
Once routes are created, you can design a workout. Use one of your created routes and fill out addiitonal information to create the workout.   

![Screen Shot 2021-04-19 at 12 05 40 PM](https://user-images.githubusercontent.com/66323451/115268515-57d02080-a108-11eb-94ff-eb042473e487.png)  

Each workout uses the user's Id to access the appropriate **user_id** that are contained in the routes.  

```javascript
  <form onSubmit={this.handleSubmit}>
            <div className="topWorkoutForm">
              <div>
                <label className="workoutFormlabel">Route 
                  <select onChange={this.handleChange('route_id')} className="routeOptions" >
                    <option className="routeOptionschoices" 
                    value={this.state?.route?.title}  disabled selected>Choose a route</option>
                    {routesList}
                  </select>
                </label>
              </div> 
              <div className="woTimeEntry" className="workoutFormlabel">
                <label>Time 
                  <div className="timeinputAreas">
                    <input type="number" onChange={this.handleChange('hours')} value={this.state.hours} placeholder={'hr'} className="timeInpute" min="0" max="100"/>
                    <input type="number" onChange={this.handleChange('minutes')} value={this.state.minutes} placeholder={'min'} className="timeInpute" min="0" max="59"/>
                    <input type="number" onChange={this.handleChange('seconds')} value={this.state.seconds} placeholder={'s'} className="timeInpute" min="0" max="59"/>
                  </div>
                </label> 
              </div>
            </div>
            <div className="midWorkoutForm">
              <div className="midWorkoutForm-top">
                <label className="workoutFormlabel" id="run_type">Type
                <select onChange={this.handleChange('run_type')} value={this.state.run_type} className="wOforminput">
                  <option>run</option>
                  <option>walk</option>
                </select>
                </label>
                <label className="workoutFormlabel">Date
                  <input type="date" onChange={this.handleChange('date')} className="wOforminput"
                  min="2021-01-01" max="2030-12-31" value={this.state.date} id="date_entry"/>
                </label> 
              </div>
              <label className="workoutFormlabel">Title 
                <input className="workinput" type="text" value={this.state.title} onChange={this.handleChange('title')} className="wOforminput" placeholder={'Afternoon Run'}/>
              </label> <br/>
            </div>
            <div className="lowWorkoutForm">
              <label className="workoutFormlabel">Description 
                <textarea  className="workinput" id="workDescBox" 
                onChange={this.handleChange('description')} 
                value={this.state.description} 
                placeholder={'How did it go? Were you tired or rested? How was the weather?'}
                />
              </label>
              <br/>
            </div>
            <button className="workoutCreatebutton" 
              disabled={
                !this.state.title || 
                !this.state.description || 
                !this.state.hours ||
                !this.state.minutes ||
                !this.state.seconds ||
                !this.state.run_type ||
                !this.state.date
              }
              >{formName}</button>
            <Link to={link} className="cancelButton">Cancel</Link>
          </form>
```

#### Activity Feed
On the user's homepage, it will container the users dashboard which will display the users most recently made workouts. There is also the profile section which totals up the user's total routes and workouts.  

![Screen Shot 2021-04-27 at 5 47 04 PM](https://user-images.githubusercontent.com/66323451/116317005-c3f1fa80-a780-11eb-9a98-1df708f7fe58.png)  



