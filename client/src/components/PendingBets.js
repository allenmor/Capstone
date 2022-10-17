import React from 'react'

function PendingBets({bet}) {
  return (
    <tr>
    <td>{bet.add_game_name.name}</td>
    <td>{bet.updated_at}</td>
    <td>${bet.bet_amount}</td>
    <td>{(bet.payout / bet.bet_amount).toFixed(2)}x</td>
    <td>{bet.payout}</td>
  </tr>
  )
}

export default PendingBets;
