import './App.css';
import Join from './components/Join';
import Home from './components/Home';
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import AddMoney from './components/AddMoney';
import { Routes, Route } from 'react-router-dom';
import WithdrawMoney from './components/WithdrawMoney';

function App() {
  const [loggedUser, setLoggedUser] = useState({name: ''})
  const [userSignedUp, setUserSignedUp] = useState(false)
  const [moneyAddedClicked, setMoneyAddedClicked] = useState(false)

  useEffect(() => {
    let token = sessionStorage.getItem('jwt')
    if(token && !loggedUser.name) {
        fetch('/me', {
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
    </Routes>
    
    </>
  );
}

export default App;
