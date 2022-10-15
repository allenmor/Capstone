import React from 'react'
import { useNavigate } from 'react-router-dom'


import './BetSlip.css'
function BetSlip({time, date, setCurrAwayGame, currAwayGame, currGame, setCurrGame}) {
    const navigate = useNavigate();

    function handleRemoveAllClick() {
        setCurrGame({})
        setCurrAwayGame({})
    }

    function handleLogInBetClick() {
        navigate(`/login`);
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
            <form className='wager-form'>
                <i>$</i>
                <input placeholder='Wager' type='text' />
                <i>$</i>
                <input placeholder='To Win' type='text' />
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
