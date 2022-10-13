import React from 'react'
import { useNavigate } from 'react-router-dom'
function LiveCasino() {
    const navigate = useNavigate();
    function handleBjClick(){
        navigate(`/blackjack`);
    }

    function handleRouletteClick(){
        navigate(`/roulette`);
    }

  return (
    <div>
        <h1 onClick={handleBjClick}>BlackJack</h1>
        <h1 onClick={handleRouletteClick}>Roulette</h1>
    </div>
  )
}

export default LiveCasino
