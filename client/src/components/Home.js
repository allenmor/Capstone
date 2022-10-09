import React from 'react'
import { useEffect } from 'react'

function Home({loggedUser}) {


  console.log(loggedUser);


  return (
    <div>
      <h1>yo</h1>
      <h1>{loggedUser.name}</h1>
    </div>
  )
}

export default Home
