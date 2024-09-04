import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../../features/user/userSlice';

function SignedInCheck(props) {
    const navigate = useNavigate();
    let user = useSelector(selectUser);

    /*useEffect(() => {
        if (props.isLoggedIn === false){
            navigate("/Login");
        }
    },[])*/

    const signInHandel = () => {
      if (props.isLoggedIn === false){
        navigate("/Login");
      }
      else {
        return props.children;
      }
    }

    if(user)
      console.log(user.id)

  return (
    <div>
        {signInHandel()}
    </div>
  )
}

export default SignedInCheck
