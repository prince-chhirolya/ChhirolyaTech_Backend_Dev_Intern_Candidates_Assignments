
import React, { useContext, useEffect, useState } from 'react'
import { Othercontexts } from '../Components/Otherprovider'
import Payment from '../Components/Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripepromise=loadStripe("pk_test_51Pzb3mDT9oorOBKm3Y5LvAYRCeYLavBv6YN5l4Jbg4VSPVk3KaYT9oo2QyEEFfgWde23OXfDBos28wIbiKkLbTkC00IQEvzMUb")
const Userpay = () => {
    const {users}=useContext(Othercontexts)
    const [user,setuser]=users
    const dara=Array.isArray(user.fees)?user.fees:[]
// console.log(dara)

  return (
    <>
    <Elements stripe={stripepromise}>
    <Payment/>
    </Elements>
    <div className='userside'>
           <div>
            <table className='usertable'>
                <thead style={{backgroundColor:"red"}}>
                    <tr><td>Payment Date</td><td style={{display:"block"}}>Processed Date</td><td>Status</td></tr>
                </thead>
                <tbody>
                {
                    dara.map((val,ind)=>(
                        <tr key={ind}><td>{val.paymentDate.split("T")[0]}</td><td style={{display:"block"}}>{val.processedDate.split("T")[0]}</td><td style={{color:"green"}}>Paid</td></tr>
                    ))
                }
                </tbody>
            </table>
           </div>
    </div></>
  )
}

export default Userpay