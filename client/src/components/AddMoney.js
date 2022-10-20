import React from "react";
import { useState, useEffect } from "react";
import "./AddMoney.css";
import { useNavigate } from "react-router-dom";
import UserCards from "./UserCards";

function AddMoney({setLoggedUser}) {
    const navigate = useNavigate();
    const [userCards, setUserCards] = useState([])
    let initialCard = {
        name: '',
        number: '',
        exp: '',
        code: '',
        amount: ''
    }
    const [errorCard, setErrorCard] = useState([])
    const [cardInfo, setCardInfo] = useState(initialCard)
    function handleCardChange(e) {
        setCardInfo({
            ...cardInfo,
            [e.target.name]: e.target.value
        })
    }
    function handleAddCardSubmit(e) {
        e.preventDefault()
        fetch('/cards', {
            method: 'POST',
            headers: {
                token: sessionStorage.getItem('jwt'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardInfo)
        })
        .then(res => res.json())
        .then(data => {
          if(!data.error){
            setLoggedUser(data)
            setErrorCard(['Card and funds added'])
          } else {

            setErrorCard(data.error)
          }
        })
        // navigate(`/`);
    }

    console.log(errorCard)

    // LOAD EXISTING CARDS

    useEffect(()=>{
    fetch('/cardsbyuser' , {
        headers: {
            token: sessionStorage.getItem('jwt')
        }
    })
    .then(res => res.json())
    .then(data => {
        setUserCards(data)
        console.log(data)
    })
    },[])
  return (
    <div className="add-money-div">
      <h1>Add Funds</h1>
      <div className="transaction-div">
        <div className="credit-cards-div">
          <p>
            Credit Card deposits are not available at this time, any previously
            saved Credit Cards are not available.
          </p>
        </div>
        <div className="any-funds">
          <p>
            Any funds you deposit here can be used in Sportsbook and Casino.
          </p>
        </div>
        <div className="saved">
          <p>Saved deposit methods</p>
          <div className="saved-card-container">
          {userCards.map((el, i) => {
              return <UserCards setLoggedUser={setLoggedUser} card={el} key={i}/>
          })}
          </div>
        </div>
        <div className="new-method">
          <p>Add new method</p>
        </div>
        <div className="container">
          <form className="add-form" onSubmit={handleAddCardSubmit}>
            <div className="wrapper">
              <div className="outer-card">
                {errorCard.map((el, i) => {
                  return <p className="errors">{el}</p>
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

export default AddMoney;
