import React from 'react'
import './Popular.css'

function Popular() {
  return (
    <div className='popular-div'>
        <h3>Popular</h3>
        <p>Live Now</p>
        <p><span><img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png'/></span>NFL</p>
        <p><span><img src='https://logos-world.net/wp-content/uploads/2021/09/MLB-Logo.png'/></span>MLB</p>
        <p>NHL</p>
        <p>TENNIS</p>
        <p><span><img src='https://www.freeiconspng.com/thumbs/soccer-ball-png/soccer-ball-png-33.png'/></span>SOCCER</p>
        <p><span><img src='https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2ad6.png'/></span>NBA</p>
    </div>
  )
}

export default Popular