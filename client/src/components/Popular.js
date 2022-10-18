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
        <p>Live Now</p>
        <div>
        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png'/>
        <p onClick={handleNFLClick}>NFL</p>
        </div>
        <div>
        <img src='https://logos-world.net/wp-content/uploads/2021/09/MLB-Logo.png'/>
        <p onClick={handleMLBClick}>MLB</p>
        </div>
        <div>
        <img src='https://www.freeiconspng.com/thumbs/soccer-ball-png/soccer-ball-png-33.png'/>
        <p onClick={handleSoccerClick}>Soccer</p>
        </div>
        <div>
        <img src='https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2ad6.png'/>
        <p onClick={handleNBAClick}>NBA</p>
        </div>
    </div>
  )
}

export default Popular