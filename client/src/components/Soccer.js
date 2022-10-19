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
    <img className='images-front' src='https://usclubsoccer.org/wp-content/uploads/2022/02/Web-Article-Template-Option-1-scaled.jpg'/>
    <img className='images-front' src='https://image.ibb.co/cooSC0/DAVIDE-CORTI-NATIONAL.png'/>
    <img className='images-front' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGiyAhVC-F_Ply980bA4dFfS8MfYt28SaLA&usqp=CAU'/>
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
      <BetSlip id={5} currAwayGame={currAwayGame} setCurrAwayGame={setCurrAwayGame} setCurrGame={setCurrGame} currGame={currGame} date={currDate} time={currTime}/>
  </div>
  )
}

export default Soccer
