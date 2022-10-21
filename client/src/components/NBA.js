import React from 'react'
import NBACard from './NBACard'
import Popular from './Popular'
import { useEffect, useState } from 'react'
import BetSlip from './BetSlip'

function NBA({loggedUser}) {
    const [games, setGames] = useState([])
    const [userSignedUp, setUserSignedUp] = useState(false)
    const [moneyAddedClicked, setMoneyAddedClicked] = useState(false)
    const [currGame, setCurrGame] = useState({})
    const [currAwayGame, setCurrAwayGame] = useState({})
  
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();

    const [nba, setNba] = useState([])

    useEffect(()=>{
    
        fetch('https://raw.githubusercontent.com/allenmor/Capstone/main/client/odds.json')
        .then(res => res.json())
        .then(data => {
            let newArr = data.filter((el, i) => {
                return el.sport_key.includes('basketball')
            })
            setNba(newArr)
        })
    },[])
  return (
    <div className='home-div'>
    <Popular />
    <div className='home-card-div'>
    <div className='ads-div'>
    <img className='images-front' src='https://www.thesportsgeek.com/app/uploads/2022/10/2022-2023-nba-championship-predictions-and-odds-1-1.jpg'/>
    <img className='images-front' src='https://www.nbcsports.com/sites/rsnunited/files/archive/assets_article/boston/2018/06/07/606_updated_2019_nba_title_odds.png'/>
    <img className='images-front' src='https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/04/1408/814/04.12.22_HowToBetNBAPlayoffsFirstRound_Horizontal.jpg?ve=1&tl=1'/>
    <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/4/25/2022-04-25_18-42-43_624x220.jpg'/>
    <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/4/25/2022-04-25_18-42-43_624x220.jpg'/>
    <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/9/12/2022-09-12_16-33-55_624x220.jpg'/>
    <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/8/30/2022-08-30_16-19-18_624x220.jpg'/>
    <img className='images-front' src='https://d1m565i184w2i9.cloudfront.net/cpp/fd/2022/9/8/2022-09-08_20-45-55_624x220.jpg'/>
    </div>
    {nba.map((el, i) => {
      return <NBACard setCurrAwayGame={setCurrAwayGame} setCurrGame={setCurrGame} game={el} key={i} />
    })}
    </div>
      <BetSlip id={7} currAwayGame={currAwayGame} setCurrAwayGame={setCurrAwayGame} setCurrGame={setCurrGame} currGame={currGame} date={currDate} time={currTime}/>
  </div>
  )
}
export default NBA