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
    console.log(data)
  })
  },[])

  let trueGames = games.filter((el, i) => {
    return el.bookmakers.length > 0
  })



  return (
    <div className='home-div'>
      <Popular />
      <div className='home-card-div'>
      <div className='ads-div'>
      <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/9/13/2022-09-13_18-26-17_624x220.jpg'/>
      <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/10/10/2022-10-10_16-04-32_624x220.png'/>
      <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/8/30/2022-08-30_16-21-32_624x220.jpg'/>
      <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/4/25/2022-04-25_18-42-43_624x220.jpg'/>
      <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/4/25/2022-04-25_18-42-43_624x220.jpg'/>
      <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/9/12/2022-09-12_16-33-55_624x220.jpg'/>
      <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/8/30/2022-08-30_16-19-18_624x220.jpg'/>
      <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/9/8/2022-09-08_20-45-55_624x220.jpg'/>
      </div>
      {trueGames.map((el, i) => {
        return <HomeCard game={el} key={i} />
      })}
      </div>
      <div>
        <h1>Bet Slip</h1>
      </div>
    </div>
  )
}

export default Home
