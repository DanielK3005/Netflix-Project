import React, { useState } from 'react'
import "./styles/Login.css"
import Header from './Header'
import "./styles/Login.css"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login(props) {
const nav = useNavigate();
const [email,SetEmail] = useState();
const [password,SetPassword] = useState();

const handelLogin = (event) => {
  event.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        props.SetLoggedIn(true);
        nav("..", { relative: "path" });
    })
    .catch((error) => {
      alert(error.message);
    });
};

  return (
    <div className='login'>
      <Header isLoggedIn= {false} />
      <div className="login__coverimg">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/6b565e58-df11-4c74-bae6-dcb94965629e/IL-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_63ad7e87-458c-4e6e-9061-8551c54e39de_large.jpg" alt="" />
      </div>
      <div className='login__container'>
        <header className="login__headline">
            <h1>Sign In</h1>
        </header>
        <form className='login__form'>
            <div className="login__email">
                {email ? <label></label> : <label>Email</label>}
                <input type='email' value={email} onChange={(e) => {SetEmail(e.target.value)}}></input>
            </div>
            <div className="login__password">
            {password ? <label></label> : <label>Password</label>}
                <input type='password' value={password} onChange={(e) => {SetPassword(e.target.value)}}></input>
            </div>
            <button type= "submit" className='login__button' onClick={handelLogin}>Sign In</button>
            <h4 style={{marginTop: "20px"}}>
            <span style={{color: "grey"}}>New to Netflix? </span>
            <a style= {{cursor: "pointer", textDecoration: "underline"}}onClick={() => {nav("/SignUp"); window.location.reload();}}>Sign Up Now</a></h4>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default Login
