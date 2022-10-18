import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


import './BetSlip.css'
function BetSlip({time, id, date, setCurrAwayGame, currAwayGame, currGame, setCurrGame}) {

    let initialBet = {
        bet_amount: '',
        home: '',
        away: '',
        spread: '',
        game_id: id
    }
    const [bet, setBet] = useState(initialBet)
    const navigate = useNavigate();

    function handleRemoveAllClick() {
        setCurrGame({})
        setCurrAwayGame({})
    }

    function handleLogInBetClick() {
        navigate(`/login`);
    }


    function handleBetChange(e) {
        setBet({
            ...bet,
           bet_amount: e.target.value,
           payout: Math.floor(Math.floor(bet.bet_amount * currGame.price / 100)),
           spread: currGame.price,
           home: currGame.name,
           away: currGame.opposing_team,
           pending: true
        })
        console.log(currGame)
    }


    function handleBetSubmit(e) {
        e.preventDefault()
        fetch('/sportsbet', {
            method: 'POST',
            headers: {
                token: sessionStorage.getItem('jwt'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bet)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }



  return (
    <div className='bet-slip-container'>
        <div className='slip-title'>
        <p><b>Bet Slip</b></p>
        </div>
       {currGame.name ? <>
        <div className='sports-bet-slip-div'>
            <div className='whole-bet'>

            <div className='name-price-bet'>
            <p>{currGame.name}</p>
            <p className='bet-slip-price'>{currGame.price > 0 ? `+${currGame.price}` : currGame.price}</p>
            </div>
            <p className='action'>Action</p>
            <p className='moneyline'>MONEYLINE</p>
            <p className='teams-betting-on'>{currGame.name} @ {currGame.opposing_team}</p>
            <form onSubmit={handleBetSubmit} className='wager-form'>
                <i>$</i>
                <input onChange={handleBetChange} name='bet_amount' value={bet.bet_amount} placeholder='Wager' type='number' />
                <i>$</i>
                <input onChange={handleBetChange} name='payout' value={Math.floor(bet.bet_amount * currGame.price / 100)} placeholder='To Win' type='text' />
                <input type='submit' value='Submit' />
            </form>
            </div>
        </div>
        <div className='remove-all'>
            <button onClick={handleRemoveAllClick} className='remove-btn'>Remove All Selections</button>
        </div>

        <div className='place-bet-div'>
            {sessionStorage.getItem('jwt') ? <button className='place-bet-btn'>Place Bet</button> : <button onClick={handleLogInBetClick} className='place-bet-btn'>Log In</button>}
        </div>
        </> : 
        <div className='bet-slip-empty-div'>
            <p>Bet Slip Empty</p>
            <p>Add selections to place bet</p>
        </div>
        }
    </div>
  )
}

export default BetSlip;