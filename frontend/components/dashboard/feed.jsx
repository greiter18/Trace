import React from 'react';
import { Link } from 'react-router-dom';


const Feed = ({workout}) => {
  return (
    <div >
      <i class="fas fa-user"></i>
      <h1 id="feedTitle"> {workout?.title}</h1>
      <h1 id="feedDescription"> {workout?.description}</h1>
      <h1> {workout?.hours}:{workout?.minutes}:{workout?.seconds}</h1>
      <img id="routefeedImage" 
          src='https://www.mamilian.bike/wp-content/uploads/2020/07/strava-routes.png'/>
    </div>
  )
}

export default Feed;