import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/Button.css"

function Button(props) {
    const navigate = useNavigate();
    const signup = (props.action === "Sign Up") ? "__signup" : ""
  
  const hanelOnClick = (action) => {
    if(action === 'Sign In')
    {
        navigate("/Login");
    } else {
        navigate("/SignUp");
    }
  }

    return (
        <button className={`button${signup}`} onClick={() => hanelOnClick(props.action)}>{props.action}</button> 
  )
}

export default Button
