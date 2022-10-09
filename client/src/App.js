import './App.css';
import Join from './components/Join';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [meFetch, setMeFetch] = useState(false)
  const [loggedUser, setLoggedUser] = useState({name: ''})
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
             setMeFetch(prev => !prev)
          })
        }

      },[])

      useEffect(()=>{
      
      },[])

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
        <Join />
        </>
      }/>
    </Routes>
    </>
  );
}

export default App;
