import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar({setLoggedUser, loggedUser}) {

  console.log(loggedUser)
  const [profileClicked, setProfileClicked] = useState(false)

  const navigate = useNavigate();

  function handleJoinClick() {
    navigate('/join')
  }
  function handleHomeClick() {
    navigate('/')
  }

  function handleLogOut() {
    sessionStorage.clear();
    setLoggedUser({name: ""})
    navigate(`/`);
  }
  function handleLogIn() {
    navigate(`/login`);
  }

  function handleProfileClick(){
    setProfileClicked(prev => !prev)
  }

  function handleAddMoneyClick() {
    navigate(`/addfunds`);
  }
  return (
    <div className="nav-container">
      <div>
        <p className="logo">Sports Book</p>
        <p onClick={handleHomeClick} className="home-btn">Home</p>
        <p className="my-bets">My Bets</p>
      </div>
      {
        sessionStorage.getItem('jwt') == null || sessionStorage.getItem('jwt') == 'undefined'?
      <div className="log-join-div">
        <p onClick={handleLogIn} className="log-btn">Log In</p>
        <p onClick={handleJoinClick} className="join-btn">Join Now</p>
      </div> :
      <div className='log-join-div'>
        <img onClick={handleProfileClick} className="user-image" src={loggedUser.image}/>
        <p onClick={handleProfileClick}>{loggedUser.name}</p>
        <div className="profile-div" style={profileClicked ? {display: ''} : {display:'none'}}>
          <h1 style={{}}>{loggedUser.name}</h1>
          <p>${loggedUser.balance}</p>
          <p>Playable Balance</p>
          <div className="add-withdraw-div">
          <p onClick={handleAddMoneyClick} className="add-money-btn">Add Funds</p>
          <p className="withdraw-btn">Withdraw Funds</p>
          </div>
          <p>Transaction History</p>
          <p>Help and Support</p>
          <p className="log-out-in-profile">Log Out</p>
        </div>
        <div className="balance-div">
         <p>{`$${loggedUser.balance}`}</p> 
         <p className="balance-word">Balance</p>
        </div>
      <p onClick={handleLogOut} className="log-out-btn">Log Out</p>
      </div>    
      }
    </div>
  );
}

export default NavBar;
