import React from 'react'
import './Home.css'

function HomeCard({game, setCurrAwayGame, setCurrGame}) {


    function imageSourceSwitch(el) {
        switch(el.title) {
            case 'Unibet':
            return 'https://upload.wikimedia.org/wikipedia/commons/2/24/Unibet-Logo-white.jpg'
            case 'TwinSpires':
            return 'https://edge.twinspires.com/embedimage.png'
            case 'Betfair':
            return 'https://logos-world.net/wp-content/uploads/2022/05/Betfair-Symbol.png'
            case 'DraftKings':
            return 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/DraftKings_logo.svg/1200px-DraftKings_logo.svg.png'
            case 'BetMGM':
            return 'https://www.playtenn.com/wp-content/uploads/2020/05/betMGM-sportsbook.png'
            case 'FanDuel':
            return 'https://teamrankings-blog-images.s3.amazonaws.com/wordpress-uploads/prod/fanduel_sportsbooklogo.jpg'
            case 'Circa Sports':
            return 'https://www.goldengatecasino.com/wp-content/uploads/circa-logo.png'
            case  "Barstool Sportsbook":
            return 'https://s37171.pcdn.co/wp-content/uploads/2021/09/Barstool-Sportsbook.png'
            case "PointsBet (US)":
            return 'https://mma.prnewswire.com/media/1338137/PointsBet_Logo.jpg?p=facebook'
            case "SugarHouse":
            return 'https://www.nicepng.com/png/detail/952-9522945_sugarhouse-sportsbook-logo-sugarhouse-sportsbook-logo-png.png'
            case 'Bovada':
            return 'https://www.cardschat.com/news/wp-content/uploads/2014/05/logo-bovada.jpg'
            case 'FOX Bet':
            return 'https://e7n9s5t9.stackpathcdn.com/betting/wp-content/uploads/2019/12/fox-bet-promo-code-nj-pa.jpg'
            case "William Hill (US)":
            return 'https://www.williamhill.us/wp-content/uploads/2019/11/whpr.jpg'
            case 'GTbets':
            return 'https://www.gamblingsites.org/app/uploads/2021/02/gt-bets-logo-1.jpg'
            case 'MyBookie.ag':
            return 'https://cdn.mybookie.ag/wp-content/uploads/mybookie-sportsbook-01.jpg'
            case 'BetOnline.ag':
            return 'https://static.casinousa.com/images//casino-rooms/betonline-logo.jpg'
            case 'BetRivers':
            return 'https://images.ctfassets.net/pnq4hpds29uh/53Y6ddVix4KiUBLBpuVcrI/b7f1d7ab46b447232bccd8909b18d5e3/BetRivers_Canada_Logo.jpg'
            case 'SuperBook':
            return 'https://mma.prnewswire.com/media/1154535/Superbook_Final_Black2_Logo.jpg'
            case 'BetUS':
            return 'https://www.thesportsgeek.com/app/uploads/2020/11/betus-logo.jpg'
            case 'WynnBET':
            return 'https://www.bettingpros.com/wp/wp-content/uploads/WynnBET_Sportsbook_Logo_Gold_Indigo_RGB-copy.jpg'
            case 'Intertops':
            return 'https://www.thesportsgeek.com/app/uploads/2021/07/Intertops-Large-Logo.jpg'
            case 'LowVig.ag':
            return 'https://ui.lowvig.ag/images/LowVig-LowvigSubHeader-953x159.jpg'
            default: 
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9nR7-VdHkrRrGf5rSYy4l-Ztsx2PwdNB-w&usqp=CAU'
        }
    }


    let arr = []
    let awayArr = []
    game.bookmakers.map((el, i) => {
        return arr.push(el.markets[0].outcomes[0].price)
    })
    game.bookmakers.map((el, i) => {
        return awayArr.push(el.markets[0].outcomes[1].price)
    })

    function handleBetClick(el) {
        setCurrGame({
            name: el.markets[0].outcomes[0].name,
            price: el.markets[0].outcomes[0].price,
            opposing_team: el.markets[0].outcomes[1].name
        })
    }
    function handleAwayClick(el) {
        setCurrGame({
            name: el.markets[0].outcomes[1].name,
            price: el.markets[0].outcomes[1].price,
            opposing_team: el.markets[0].outcomes[0].name
        })
    }


  return (
    <div className='each-game'>
        <div className='home-at-away'>
        <p>{game.home_team}&nbsp;</p>
        <p>@&nbsp;</p>
        <p>{game.away_team}</p>
        <p>{game.commence_time}</p>
        </div>
        <table className='odds-table'>
            <thead className='table-head'>
                <tr>
                
                    <th className='home-away'>{game.sport_key.includes('soccer')? 'Soccer':game.sport_title}</th>
                    {game.bookmakers.map((el, i) => {
                        return <th className='table-header' key={i}><img className='casino-logo-img' src={imageSourceSwitch(el)}/></th>
                    })}
                </tr>
            </thead>
            <tbody>
                <tr className='numbers-row'>
                    <td className='home-away-team'>{game.home_team}</td>
                    {game.bookmakers.map((el, i) => {
                        return <td onClick={() => handleBetClick(el)} className={Math.max(...arr) == el.markets[0].outcomes[0].price ? 'bet-num best-bet' : 'bet-num'} key={i}>{el.markets[0].outcomes[0].price > 0 ? '+':''}{el.markets[0].outcomes[0].price}</td>
                    })}
                </tr>
                <tr className='numbers-row'>
                    <td className='home-away-team'>{game.away_team}</td>
                    {game.bookmakers.map((el, i) => {
                        return <td onClick={() => handleAwayClick(el)} className={Math.max(...awayArr) == el.markets[0].outcomes[1].price ? 'bet-num best-bet' : 'bet-num'} key={i}>{el.markets[0].outcomes[1].price > 0 ? '+':''}{el.markets[0].outcomes[1].price}</td>
                    })}
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default HomeCard;
