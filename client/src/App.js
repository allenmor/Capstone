import './App.css';
import Join from './components/Join';
import Home from './components/Home';
import LogIn from './components/LogIn';
import MyBets from './components/MyBets';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import AddMoney from './components/AddMoney';
import { Routes, Route } from 'react-router-dom';
import WithdrawMoney from './components/WithdrawMoney';
import LiveCasino from './components/LiveCasino';
import BlackJack from './components/BlackJack';
import Roulette from './components/Roulette';
import NFL from './components/NFL';
import Soccer from './components/Soccer';
import MLB from './components/MLB';
import NBA from './components/NBA';

function App() {
  const [loggedUser, setLoggedUser] = useState({name: ''})
  const [userSignedUp, setUserSignedUp] = useState(false)
  const [moneyAddedClicked, setMoneyAddedClicked] = useState(false)

  useEffect(() => {
    let token = sessionStorage.getItem('jwt')
    if(token && !loggedUser.name) {
        fetch('https://mysite-8r0y.onrender.com/me', {
            headers: {
                token: token,
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
             setLoggedUser(data)
          })
        }
      },[userSignedUp])
  return (
    <>
    <Routes>
      <Route path='/' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <Home loggedUser={loggedUser}/>
        </>
      }/>
      <Route path='/join' element={
        <>
        <NavBar />
        <Join setUserSignedUp={setUserSignedUp}/>
        </>
      }/>
      <Route path='/login' element={
        <>
        <NavBar/>
        <LogIn setUserSignedUp={setUserSignedUp}/>
        </>
      }/>
      <Route path='/addfunds' element={
        <>
         <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <AddMoney setLoggedUser={setLoggedUser}/>
        </>
      }/>
      <Route path='/withdrawmoney' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <WithdrawMoney loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
        </>
      }/>
    <Route path='/livecasino' element={
        <>
        <NavBar loggedUser={loggedUser}/>
        <LiveCasino />
        </>
      }/>
    <Route path='/blackjack' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <BlackJack setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
        </>
      }/>
    <Route path='/roulette' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <Roulette setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
        </>
      }/>
    <Route path='/mybets' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <MyBets setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
        </>
      }/>
    <Route path='/nfl' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <NFL loggedUser={loggedUser}/>
        </>
      }/>
    <Route path='/soccer' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <Soccer loggedUser={loggedUser}/>
        </>
      }/>
    <Route path='/mlb' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <MLB loggedUser={loggedUser}/>
        </>
      }/>
    <Route path='/nba' element={
        <>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} user={loggedUser}/>
        <NBA loggedUser={loggedUser}/>
        </>
      }/>
    </Routes>
    </>
  );
}

export default App;
