import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddMoney.css'
function UserCards({card, setLoggedUser}) {
    const navigate = useNavigate();
    const [cardClicked, setCardClicked] = useState(true)
    const [balanceAmount, setBalanceAmount] = useState({balance: ''})
    let cardLogos = [
        'https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1976.png',
        'https://banner2.cleanpng.com/20181128/gkr/kisspng-mastercard-logo-visa-credit-card-portable-network-mastercard-plus-datacenter-trkiyeampaposde-5bfe50c6987830.6480665815433934786245.jpg',
        'https://brandlogos.net/wp-content/uploads/2012/10/discover-card-logo-vector-400x400.png',
        'https://png.monster/wp-content/uploads/2022/01/png.monster-475.png'
    ]

    function handleClick() {
        setCardClicked(false)
    }

    function handleBalanceChange(e) {
        setBalanceAmount({
            ...balanceAmount,
            [e.target.name]: e.target.value
        })
        console.log(balanceAmount)
    }
    function handleCardSubmit(e) {
        e.preventDefault()
        
        fetch('/addMoney', {
            method: 'PATCH',
            headers: {
                token: sessionStorage.getItem('jwt'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({balance: balanceAmount.balance})
        })
        .then(res => res.json())
        .then(data => {
            setLoggedUser(data)
        })
        navigate(`/`);
    }
  return (
      <>
    {cardClicked ? <div onClick={handleClick} className='each-card'>
        <p>Ending&nbsp;{String(card.number).slice(-4)}&nbsp;</p>
        <p>Expires&nbsp;{card.exp}</p>
        <img className='card-type-logo' src={cardLogos[Math.floor(Math.random()*cardLogos.length)]} /> 
        <p>&#8250;</p>
    </div> : 
    <div className='each-card'>
        <form onSubmit={handleCardSubmit}>
            <input onChange={handleBalanceChange} name='balance' value={balanceAmount.balance} placeholder='Amount' type='numbers' />
            <input type='submit' />
        </form>
    </div>}
      </>
  )
}


export default UserCards;