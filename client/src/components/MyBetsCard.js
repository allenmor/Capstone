import React from 'react'
import './MyBets.css'
function MyBetsCard({bet}) {
  return (
    <div className='each-bet'>
        <p>Blackjack</p>
        <p><b>time:</b> {bet.updated_at}</p>
        <p><b>bet:</b> amount{bet.bet_amount}</p>
        <p><b>payout:</b> {bet.payout}</p>
    </div>
  )
}

export default MyBetsCard