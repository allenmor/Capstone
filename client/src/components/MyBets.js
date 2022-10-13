import React from 'react'
import { useState, useEffect } from 'react'
import MyBetsCard from './MyBetsCard'
function MyBets({setLoggedUser, loggedUser}) {

    const [bets, setBets] = useState([])

useEffect(()=>{
fetch('betsforuser' , {
    headers: {
        token: sessionStorage.getItem('jwt'),
        'Content-Type': 'application/json'
    },
})
.then(res => res.json())
.then(data => {
    setBets(data.reverse())
    console.log(data)
})
},[])


  return (
      <div>
          {bets.map((el, i) => {
              return <MyBetsCard key={i} bet={el}/>
          })}
      </div>
  )
}

export default MyBets