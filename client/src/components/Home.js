import React from 'react'
import Popular from './Popular'
import { useEffect, useState } from 'react'
import HomeCard from './HomeCard'
import './Home.css'

function Home() {

  const [games, setGames] = useState([])


  useEffect(()=>{
  fetch('https://raw.githubusercontent.com/allenmor/Capstone/main/client/odds.json')
  .then(res =>res.json())
  .then(data => {
    setGames(data)
  })
  },[])

  let trueGames = games.filter((el, i) => {
    return el.bookmakers.length > 0
  })
  console.log(trueGames)
  return (
    <div className='home-div'>
      <Popular />
      <div className='home-card-div'>
      {trueGames.map((el, i) => {
        return <HomeCard game={el} key={i} />
      })}
      </div>
    </div>
  )
}

export default Home
