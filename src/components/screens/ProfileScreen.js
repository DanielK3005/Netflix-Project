import React, { useState, useEffect } from 'react'
import "../styles/ProfileScreen.css"
import Header from '../Header'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { collection, onSnapshot, addDoc, getDocs, query } from 'firebase/firestore'
import db from '../../firebase'
import PlansList from '../PlansList'

function ProfileScreen(props) {
    let user = useSelector(selectUser);
    const navigate = useNavigate();
    const [subscription, SetSubscription] = useState(null)


    useEffect(() => {
        if(user) {
        const sub = query(collection(db,"customers", user.id, "subscriptions"));
        getDocs(sub).then((subs) => {
            if(subs.empty === false) {
                SetSubscription(subs.docs[subs.docs.length - 1].data().items[0].plan);
            }
            else {
                SetSubscription(null)
            }
        })
    }
    }, [user]);

    const handelSignOut = () => {
        auth.signOut();
        navigate("/", { replace: true });
        window.location.reload();
    }

    return (
        <div className="profileScreen">
            <Header isLoggedIn={props.isLoggedIn} />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg" alt="" />
                    <div className="profileScreen__details">
                        <h2>{user?.email}</h2>
                        <div className="profileScreen__plans">
                        <h3>Plans:</h3>
                        <PlansList subscription = {subscription}/>
                        <button className='profileScreen__button' onClick={() => handelSignOut()}>Sign Out</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
