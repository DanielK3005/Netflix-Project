import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../../features/user/userSlice';

function SignedInCheck(props) {
    const navigate = useNavigate();
    let user = useSelector(selectUser);


    const signInHandel = () => {
      if (props.isLoggedIn === false){
        navigate("/Login");
        window.location.reload();
      }
      else {
        return props.children;
      }
    }

  return (
    <div>
        {signInHandel()}
    </div>
  )
}

export default SignedInCheck
