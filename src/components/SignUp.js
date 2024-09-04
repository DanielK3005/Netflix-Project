import React, { useState } from 'react'
import "./styles/SignUp.css"
import Header from "./Header"
import Footer from './Footer'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [email,SetEmail] = useState();
    const [password,SetPassword] = useState();
    const [passwordagain,SetPasswordAgain] = useState();
    const nav = useNavigate();

    const handelSignUp = (event) => {
        event.preventDefault();
        if(password !== passwordagain){
            alert("Your passwords fields is not match, please enter the same password");
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
              nav("..", { relative: "path" });
          })
          .catch((error) => {
            alert(error.message);
          });

            SetEmail("");
            SetPassword("");
            SetPasswordAgain("");
        }
    }

    
  return (
    <div className='signup'>
      <Header isLoggedIn= {false} />
      <div className="signup__coverimg">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/6b565e58-df11-4c74-bae6-dcb94965629e/IL-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_63ad7e87-458c-4e6e-9061-8551c54e39de_large.jpg" alt="" />
      </div>
      <div className='signup__container'>
        <header className="signup__headline">
            <h1>Sign Up</h1>
        </header>
        <form className='signup__form'>
            <div className="signup__email">
                <input type='email' placeholder="Email" value={email} onChange={(e) => {SetEmail(e.target.value)}}></input>
            </div>
            <div className="signup__password">
                <input type='password' placeholder="Password" value={password} onChange={(e) => {SetPassword(e.target.value)}}></input>
            </div>
            <div className="signup__passwordagain">
                <input type='password' placeholder="Confirm Password" value={passwordagain} onChange={(e) => {SetPasswordAgain(e.target.value)}}></input>
            </div>
            <button type= "submit" className='signup__button' onClick={handelSignUp}>Sign Up</button>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default SignUp
