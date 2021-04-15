import React from 'react';
import { Link } from 'react-router-dom';


const Feed = ({workout, email}) => {
  return (
    <div id="feedCard">
      <div id="feedCardTop">
        <i id="runnerIcon"className="fas fa-user-circle"></i>
        <h1 id="feedEmail"> {email}</h1>
      </div>
      <div id="feedCardMid"> 
        <i id="personRunning"className="fas fa-running"></i>
        <Link to={`/workouts/${workout.id}`} id="feedTitle"> {workout?.title}</Link>
      </div>
      <h1 id="feedDescription"> {workout?.description}</h1>
      <div id="feedCardMid">
        <div id='feedTime'>
          <h1 id='feedTimeTime'>Time</h1>
          <h1 id='feedTimenums'> {workout?.hours}h {workout?.minutes}m {workout?.seconds}s</h1>
        </div>
      <i id='trophy'class="fas fa-trophy"></i>
      </div>
      <Link to={`/workouts/${workout.id}`} ><img id="routefeedImage" 
          src='https://www.mamilian.bike/wp-content/uploads/2020/07/strava-routes.png'
      /></Link> 
      {console.log('-------------feed',workout.id)}
    </div>
  )
}

export default Feed;