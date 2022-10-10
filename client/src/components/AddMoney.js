import React from 'react'
import './AddMoney.css'

function AddMoney() {
  return (
    <div className='add-money-div'>
        <h1>Add Funds</h1>
        <div className='transaction-div'>
        <div className='credit-cards-div'>
            <p>Credit Card deposits are not available at this time, any previously saved Credit Cards are not available.</p>
        </div>
        <div className='any-funds'>
            <p>Any funds you deposit here can be used in Sportsbook and Casino.</p>
        </div>
        <div className='saved'>
            <p>Saved deposit methods</p>
        </div>
        <div className='new-method'>
            <p>Add new method</p>
        </div>
        </div>
    </div>
  )
}

export default AddMoney