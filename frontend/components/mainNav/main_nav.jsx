import React from 'react'


const MainNav = ({logout}) => {
  return (
    <div> 
      <button onClick={logout}>Log Out</button>
      <h1>Still selling doors</h1>
    </div>
  )
}

export default MainNav;


// const add5 = name => {
//   return differentFunction()
// }

// const differentFunction = (name) => { // component
//   console.log('Hey im different')
// }