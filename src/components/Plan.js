import React, { useEffect, useState } from 'react'
import "./styles/Plan.css"
import db from "../firebase"
import { collection, onSnapshot, addDoc, getDocs, query } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import { loadStripe } from '@stripe/stripe-js';

function Plan(props) {
    let user = useSelector(selectUser);
    const [isSamePlan, SetIsSamePlan] = useState(false)

    useEffect(() =>{
        if(props.subscription === null){
            SetIsSamePlan(false)
        }
        else {
            SetIsSamePlan((props.id === props.subscription.product))
        }
    }, [user])


    const loadCheckout = async () => {
        const usercollection = collection(db, "customers", user.id, "checkout_sessions")
        const newDoc = await addDoc(usercollection, {
            price: props.data.price.priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        })

        onSnapshot(newDoc, async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                alert(error.message)
            }

            if (sessionId) {
                const stripe = await loadStripe('pk_test_51PpTuEDqlZOy4KPs2SIhiYTjeTaLXi6gWiI8pQRQ3Ww1Yx2rtBK5QYDBK9mgBPRSVMtgu2oI6n44DyYSDMBm6XM400Sn3Sm9lF')
                stripe.redirectToCheckout({sessionId})
            }
        })
    }

    return (
        <div className='plan'>
            <div className="plan__info">
                <h4>{props.data.name}</h4>
                <h5>{props.data.description}</h5>
            </div>
            <button style = {!isSamePlan ? {} : {backgroundColor: "grey" , cursor: "not-allowed"}} onClick={() => { !isSamePlan && loadCheckout() }}>{isSamePlan ? 'Current Package' : 'Subscribe'}</button>
        </div>
    )
}

export default Plan
