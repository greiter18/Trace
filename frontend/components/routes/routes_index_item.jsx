import React from 'react'


const RoutesIndexItem = ({route}) => {
  return (
    <div> 
      {console.log('indexit-----------------',route)}
    <h1>{route.title}</h1>
    </div>
  )
}

export default  RoutesIndexItem;