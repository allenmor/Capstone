import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import WithdrawUserCard from './WithdrawUserCard';

function WithdrawMoney({setLoggedUser, loggedUser}) {
  const [errorWithdraw, setErrorWithdraw] = useState([])
    const navigate = useNavigate();
    const [userCards, setUserCards] = useState([])
    let initialCard = {
        name: '',
        company: '',
        number: '',
        exp: '',
        code: '',
        amount: ''
    }
    const [cardInfo, setCardInfo] = useState(initialCard)
    
    function handleCardChange(e) {
        setCardInfo({
            ...cardInfo,
            [e.target.name]: e.target.value
        })
    }
    function handleAddCardSubmit(e) {
        e.preventDefault()
        console.log(loggedUser)
        console.log(cardInfo)
        if(cardInfo.amount < loggedUser.balance) {

            fetch('https://mysite-8r0y.onrender.com/withdrawcards', {
                method: 'PATCH',
                headers: {
                    token: sessionStorage.getItem('jwt'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardInfo)
            })
            .then(res => res.json())
            .then(data => {
              if(!data.error) {
                setLoggedUser(data)
                setErrorWithdraw(['Card added and money withdrawn'])
              } else {
                setErrorWithdraw(data.error)
              }
            })
            // navigate(`/`);
        } else {
            setCardInfo({
                name: '',
                company: '',
                number: '',
                exp: '',
                code: '',
                amount: loggedUser.balance
            })
        }
    }


    // LOAD EXISTING CARDS

    useEffect(()=>{
    fetch('https://mysite-8r0y.onrender.com/cardsbyuser' , {
        headers: {
            token: sessionStorage.getItem('jwt')
        }
    })
    .then(res => res.json())
    .then(data => {
        setUserCards(data)
    })
    },[])
  return (
    <div className="add-money-div">
      <h1>Withdraw Funds</h1>
      <div className="transaction-div">
          <p>Saved withdrawal methods</p>
        <div className="saved">
          <div className="saved-card-container">
          {userCards.map((el, i) => {
              return <WithdrawUserCard loggedUser={loggedUser} setLoggedUser={setLoggedUser} card={el} key={i}/>
          })}
          </div>
        </div>
        <div className="new-method">
          <p>Or choose another method</p>
        </div>
        <div className="container">
          <form className="add-form" onSubmit={handleAddCardSubmit}>
            <div className="wrapper">
              <div className="outer-card">
                {errorWithdraw.map((el, i) => {
                  return <p className='errors'>{el}</p>
                })}
                <div className="forms">
                  <div className="input-items">
                    <span>Amount</span>
                    <input
                    onChange={handleCardChange}
                    value={cardInfo.amount}
                    name='amount'
                    type='number'
                      placeholder=""
                      data-slots="."
                      data-accept="\d"
                      size="19"
                    />
                    <span>Card Number</span>
                    <input
                      onChange={handleCardChange}
                      value={cardInfo.number}
                      type='number'
                      name='number'
                      placeholder=".... .... .... ...."
                      data-slots="."
                      data-accept="\d"
                      size="19"
                    />
                  </div>
                  <div className="input-items">
                    <span>Name on card</span>
                    <input
                      onChange={handleCardChange}
                      value={cardInfo.name}
                      name='name'
                     placeholder="Samuel Iscon" />
                  </div>
                  <div className="one-line">
                    <div className="input-items">
                      <span>Expiry Date</span>
                      <input
                      type='number'
                      onChange={handleCardChange}
                      value={cardInfo.exp} 
                      name='exp'
                      placeholder="mm/yy" data-slots="my" />
                    </div>
                    <div className="input-items">
                      <span>CVV</span>
                      <input
                      onChange={handleCardChange}
                      type='number'
                      value={cardInfo.code}
                      name='code'
                        placeholder="..."
                        data-slots="."
                        data-accept="\d"
                        size="3"
                      />
                    </div>
                  </div>
                  <div className="input-buttons">
                    <input type="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WithdrawMoney
