import React from 'react'
import './Home.css'

function HomeCard({game, setCurrAwayGame, setCurrGame}) {

    let arr = []
    let awayArr = []
    game.bookmakers.map((el, i) => {
        return arr.push(el.markets[0].outcomes[0].price)
    })
    game.bookmakers.map((el, i) => {
        return awayArr.push(el.markets[0].outcomes[1].price)
    })

    function handleBetClick(el) {
        setCurrGame({
            name: el.markets[0].outcomes[0].name,
            price: el.markets[0].outcomes[0].price,
            opposing_team: el.markets[0].outcomes[1].name
        })
    }
    function handleAwayClick(el) {
        console.log(el)
        setCurrGame({
            name: el.markets[0].outcomes[1].name,
            price: el.markets[0].outcomes[1].price,
            opposing_team: el.markets[0].outcomes[0].name
        })
        console.log(el)
    }


  return (
    <div className='each-game'>
        <div className='home-at-away'>
        <p>{game.home_team}&nbsp;</p>
        <p>@&nbsp;</p>
        <p>{game.away_team}</p>
        <p>{game.commence_time}</p>
        </div>
        <table className='odds-table'>
            <thead>
                <tr>
                    <th className='home-away'>{game.sport_key.includes('soccer')? 'Soccer':game.sport_title}</th>
                    {game.bookmakers.map((el, i) => {
                        return <th className='table-header' key={i}>{el.title}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                <tr className='numbers-row'>
                    <td>{game.home_team}</td>
                    {game.bookmakers.map((el, i) => {
                        return <td onClick={() => handleBetClick(el)} className={Math.max(...arr) == el.markets[0].outcomes[0].price ? 'best-bet' : 'bet-num'} key={i}>{el.markets[0].outcomes[0].price > 0 ? '+':''}{el.markets[0].outcomes[0].price}</td>
                    })}
                </tr>
                <tr className='numbers-row'>
                    <td>{game.away_team}</td>
                    {game.bookmakers.map((el, i) => {
                        return <td onClick={() => handleAwayClick(el)} className={Math.max(...awayArr) == el.markets[0].outcomes[1].price ? 'best-bet' : 'bet-num'} key={i}>{el.markets[0].outcomes[1].price > 0 ? '+':''}{el.markets[0].outcomes[1].price}</td>
                    })}
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default HomeCard;
