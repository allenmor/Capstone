import './App.css';
import Join from './components/Join';
import Home from './components/Home';
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [loggedUser, setLoggedUser] = useState({name: ''})
  const [userSignedUp, setUserSignedUp] = useState(false)

  useEffect(() => {
    let token = sessionStorage.getItem('jwt')
    if(token && !loggedUser.name) {
        fetch('http://127.0.0.1:3000/me', {
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
        <NavBar setLoggedUser={setLoggedUser} user={loggedUser}/>
        <Home loggedUser={loggedUser}/>
        </>
      }/>
      <Route path='/join' element={
        <>
        <NavBar/>
        <Join setUserSignedUp={setUserSignedUp}/>
        </>
      }/>
      <Route path='/login' element={
        <>
        <NavBar/>
        <LogIn setUserSignedUp={setUserSignedUp}/>
        </>
      }/>
    </Routes>
    </>
  );
}

export default App;
