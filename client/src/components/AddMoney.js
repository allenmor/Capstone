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
        <div class="container">
        <form>
             <div class="wrapper"> 
             <div class="outer-card"> 
             <div class="forms"> 
             <div class="input-items">

                  <span>Card Number</span> 
                  <input placeholder=".... .... .... ...." data-slots="." data-accept="\d" size="19"/> 
                  </div>
                   <div class="input-items">
                   <span>Name on card</span>
                   <input placeholder="Samuel Iscon" />
                    </div> 
                   <div class="one-line"> 
                   <div class="input-items"> 
                   <span>Expiry Date</span>
                    <input placeholder="mm/yyyy" data-slots="my"/> 
                    </div>
                     <div class="input-items">
                          <span>CVV</span> 
                          <input placeholder="..." data-slots="." data-accept="\d" size="3"/> 
                          </div> 
                          </div> 
                          <div class="input-buttons">
                               <input type='submit' />
                                </div>
                                 </div> 
                                 </div> 
                                 </div> 
                                 </form>
                                 </div>
        </div>
    </div>
  )
}

export default AddMoney