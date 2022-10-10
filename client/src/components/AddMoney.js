import React from "react";
import { useState, useEffect } from "react";
import "./AddMoney.css";
import { useNavigate } from "react-router-dom";

function AddMoney({setMoneyAddedClicked}) {
    const navigate = useNavigate();
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
        fetch('http://127.0.0.1:3000/cards', {
            method: 'POST',
            headers: {
                token: sessionStorage.getItem('jwt'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardInfo)
        })
        .then(res => res.json())
        .then(data => {
        })
        setMoneyAddedClicked(prev => !prev)
        navigate(`/`);
    }

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
        </div>
        <div className="new-method">
          <p>Add new method</p>
        </div>
        <div className="container">
          <form className="add-form" onSubmit={handleAddCardSubmit}>
            <div className="wrapper">
              <div className="outer-card">
                <div className="forms">
                  <div className="input-items">
                    <span>Amount</span>
                    <input
                    onChange={handleCardChange}
                    value={cardInfo.amount}
                    name='amount'
                      placeholder=""
                      data-slots="."
                      data-accept="\d"
                      size="19"
                    />
                    <span>Card Number</span>
                    <input
                      onChange={handleCardChange}
                      value={cardInfo.number}
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
                      onChange={handleCardChange}
                      value={cardInfo.exp} 
                      name='exp'
                      placeholder="mm/yyyy" data-slots="my" />
                    </div>
                    <div className="input-items">
                      <span>CVV</span>
                      <input
                      onChange={handleCardChange}
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
