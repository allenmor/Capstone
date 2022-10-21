import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


import './BetSlip.css'
function BetSlip({time, id=3, date, setCurrAwayGame, currAwayGame, currGame, setCurrGame}) {

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
        if(parseInt(e.target.value) < 0) {
            e.target.value = 0
        }
        setBet({
            ...bet,
           game_id: id,
           bet_amount: e.target.value,
           payout: currGame.price > 0 ? currGame.price / 100 * e.target.value: Math.ceil(e.target.value / Math.abs(currGame.price / 100)),
           spread: currGame.price,
           home: currGame.name,
           away: currGame.opposing_team,
           pending: true
        })
    }

    function handleBetSubmit(e) {
        e.preventDefault()
        console.log(bet.bet_amount)
        console.log(bet.spread)
        console.log(bet.payout)
        if(bet.bet_amount * bet.spread != bet.payout) {
            setBet({
                ...bet,
                payout: bet.payout * 10
            })
        }
        if(sessionStorage.getItem('jwt')) {
            console.log(bet)
            fetch('https://mysite-8r0y.onrender.com/sportsbet', {
                method: 'POST',
                headers: {
                    token: sessionStorage.getItem('jwt'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bet)
            })
            .then(res => res.json())
            .then(data => {
                setBet(initialBet)
            })
        }
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
            <p className='teams-betting-on'>{currGame.name} vs {currGame.opposing_team}</p>
            <form onSubmit={handleBetSubmit} className='wager-form'>
                <div className='current-bets-div'>
                <i>$</i>
                <input onChange={handleBetChange} name='bet_amount' value={bet.bet_amount} placeholder='Wager' type='number' />
                <i>$</i>
                <input onChange={handleBetChange} name='payout' value={(currGame.price > 0 ? currGame.price / 100 * bet.bet_amount: bet.bet_amount / Math.abs(currGame.price / 100)).toFixed(0)} placeholder='To Win' type='number' />
                </div>
                <input className='submit-sports-bet' type='submit' value={sessionStorage.getItem('jwt') ? 'Submit' : 'Log In'} />
            </form>
            </div>
        </div>
        <div className='remove-all'>
            <button onClick={handleRemoveAllClick} className='remove-btn'>Remove All Selections</button>
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