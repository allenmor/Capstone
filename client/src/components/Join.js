import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Join.css'

function Join() {

    let initialSignup = {name: '', password: ''}
    const [signUp, setSignUp] = useState(initialSignup)
    const [user, setUser] = useState({name: ""})
    const navigate = useNavigate();


    function handleSignUpChange(e) {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
    }

    function handleSignUpSubmit(e){
        e.preventDefault()
        fetch('http://127.0.0.1:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUp)
        })
        .then(res => res.json())
        .then(data => {
            setSignUp(initialSignup)
            sessionStorage.setItem("jwt", data.token)
            navigate(`/`);
        })
    }

  return (
    <div className='join-container'>
        <h1>Sports Book</h1>          
        <div className='form-div'>  
        <form onSubmit={handleSignUpSubmit} className='join-form'>
            <h2>Create Sports Book Account</h2>
            <p className='already'>Already have a Sports Book account?</p>
            <input onChange={handleSignUpChange} value={signUp.name} placeholder='Username' name='name' type='text'/>
            <input onChange={handleSignUpChange} value={signUp.password} placeholder='Password' name='password' type='text'/>
            <input type='submit' placeholder='Submit' value='Create account'/>
            <p className='bottom-text'>
            By creating an account you are agreeing to <span>Sports Books Group's Terms of Use</span> and <span>Privacy Policy</span> and to be updated about FanDuel Group products, news, and promotions. Users must be 18+ (21+ in MA) to play Fantasy and 21+ to place bets on Sportsbook.
            </p>
            <p className='bottom-text'>
            If you or someone you know has a gambling problem, help is available. Call (877-8-HOPENY) or text HOPENY (467369).
            </p>
        </form>
        </div>
    </div>
  )
}
export default Join
