import React from 'react'
import SoccerCard from './SoccerCard'
import { useEffect, useState } from 'react'
import BetSlip from './BetSlip'
import Popular from './Popular'


function Soccer({loggedUser}) {
    const [games, setGames] = useState([])
    const [userSignedUp, setUserSignedUp] = useState(false)
    const [moneyAddedClicked, setMoneyAddedClicked] = useState(false)
    const [currGame, setCurrGame] = useState({})
    const [currAwayGame, setCurrAwayGame] = useState({})
  
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();


    const [soccer, setSoccer] = useState([])

    useEffect(()=>{
    
        fetch('https://raw.githubusercontent.com/allenmor/Capstone/main/client/odds.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let newArr = data.filter((el, i) => {
                return el.sport_key.includes('soccer')
            })
            setSoccer(newArr)
        })
    },[])
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
    {soccer.map((el, i) => {
      return <SoccerCard setCurrAwayGame={setCurrAwayGame} setCurrGame={setCurrGame} game={el} key={i} />
    })}
    </div>
      <BetSlip currAwayGame={currAwayGame} setCurrAwayGame={setCurrAwayGame} setCurrGame={setCurrGame} currGame={currGame} date={currDate} time={currTime}/>
  </div>
  )
}

export default Soccer
