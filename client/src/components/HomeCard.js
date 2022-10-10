import React from 'react'
import './Home.css'

function HomeCard({game}) {

  return (
    <div className='each-game'>
        <p className='sports-title'>{game.sport_title}</p>
        <div className='home-at-away'>
        <p>{game.home_team}&nbsp;</p>
        <p>@&nbsp;</p>
        <p>{game.away_team}</p>
        </div>
        <p>{game.bookmakers[0].markets[0].outcomes[0].name}&nbsp;<span>{game.bookmakers[0].markets[0].outcomes[0].price}</span></p>
        <p>{game.bookmakers[0].markets[0].outcomes[1].name}&nbsp;<span>{game.bookmakers[0].markets[0].outcomes[1].price}</span></p>
    </div>
  )
}

export default HomeCard;
