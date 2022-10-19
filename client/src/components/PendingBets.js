import React from 'react'

function PendingBets({bet}) {
  return (
    <tr className='my-bets-tr'>
    <td className='my-bets-td'>{bet.add_game_name.name}</td>
    <td className='my-bets-td'>{bet.updated_at}</td>
    <td className='my-bets-td'>${bet.bet_amount}</td>
    <td className='my-bets-td'>{(bet.payout / bet.bet_amount).toFixed(2)}x</td>
    <td className='my-bets-td'>${bet.payout}</td>
  </tr>
  )
}

export default PendingBets;
