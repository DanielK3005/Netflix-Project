import React, { useEffect, useState } from 'react'
import "./styles/PlansList.css"
import db from "../firebase"
import { query, where, getDocs, collection } from "firebase/firestore";
import Plan from './Plan';

function PlansList(props) {
    const [products, SetProducts] = useState([]);

    useEffect(() => {
        const q = query(collection(db,"products"), where('active', '==', true));
        getDocs(q).then((productsSnap) => {
            const plans = {};
            productsSnap.forEach((product) => {
                plans[product.id] = product.data();
                const prices = collection(product.ref,"prices");
                getDocs(prices).then((priceSnap) => {
                    priceSnap.forEach((priceRef) => {
                    plans[product.id].price = {
                        priceId : priceRef.id,
                        price : priceRef.data()
                    }
                });
            });
            });
            SetProducts(plans);
        });
    }, [])

        const plans = Object.entries(products).map(([planId, planData])=> <Plan key={planId} id={planId} subscription= {props.subscription} data={planData} />);
        console.log(plans);

  return (
    <div className='plansList'>
      {plans}
    </div>
  )
}

export default PlansList
