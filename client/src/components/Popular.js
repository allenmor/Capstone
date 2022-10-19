import React from 'react'
import './Popular.css'
import { useNavigate } from 'react-router-dom'

function Popular() {
  const navigate = useNavigate();

  function handleNFLClick() {
    navigate('/nfl')
  }

  function handleSoccerClick() {
    navigate('/soccer')
  }
  function handleMLBClick() {
    navigate('/mlb')
  }
  function handleNBAClick() {
    navigate('/nba')

  }
  return (
    <div className='popular-div'>
        <h3>Popular</h3>
        <div>
        <img src='https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-08/nfl-logo-football-081122-getty-ftr.jpg?itok=txoeTXyp'/>
        <p onClick={handleNFLClick}>NFL</p>
        </div>
        <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png'/>
        <p onClick={handleMLBClick}>MLB</p>
        </div>
        <div>
        <img src='https://www.logodesign.net/logo/soccer-with-crown-in-shield-3981ld.png'/>
        <p onClick={handleSoccerClick}>Soccer</p>
        </div>
        <div>
        <img src='https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700'/>
        <p onClick={handleNBAClick}>NBA</p>
        </div>
    </div>
  )
}

export default Popular