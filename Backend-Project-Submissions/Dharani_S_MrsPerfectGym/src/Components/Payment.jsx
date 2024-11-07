import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useContext, useEffect, useState } from 'react'
import { Othercontexts } from './Otherprovider'
import axios from 'axios'

const Payment = () => {

    const {loaders,users}=useContext(Othercontexts)
    const [loader,setloader]=loaders
    const [user,setluser]=users
    const [minDate, setMinDate] = useState('')
    const [open, setopen] = useState(false)
    const [selectedDate, setSelectedDate] = useState('')
    const isdate=()=>{
        const today = new Date()
        const year = today.getFullYear()
        const month = ('0' + (today.getMonth() + 1)).slice(-2)
        const day = ('0' + today.getDate()).slice(-2)
        setMinDate(`${year-2}-${month}-${day}`)
    }
    useEffect(() => {
     isdate()
    }, []);
// console.log(selectedDate.length)
const stripe=useStripe()
const element=useElements()
const handlepay=async()=>{
    
    if(!stripe||!element) return 
    if(selectedDate.length!==10) return alert("enter the valid date")
        setloader(true)
    try {
        const {data}=await axios.post("https://mpbackend-2udh.onrender.com/payments",{
            amount:600
        },{withCredentials:true})
        const cardElement=element.getElement(CardElement)
        const {error,paymentIntent}=await stripe.confirmCardPayment(data.clientSecret,{
            payment_method:{
                card:cardElement,
                billing_details:{
                    name:user.name
                }
            }
        })
        if(error){
            alert(error.message)
        }else if(paymentIntent.status === 'succeeded'){
               alert("payment successfully paid")
               try {
                setloader(true)
                const res=await axios.post("https://mpbackend-2udh.onrender.com/users/paymentfee",{
                    mail:user.mail,
                    date:selectedDate
                  },{withCredentials:true})
                  alert(res.data.message)
               } catch (error) {
                alert(error.message)
               }
        }
    } catch (error) {
        console.log(error.message)
    }finally{
        setloader(false)
        setSelectedDate("")
    }
     
}

  return (
<>
<div className='payment' onClick={()=>setopen(true)}>
            <h4>Pay Fees</h4>
    </div>
    <div className='pay' style={{display:open?"flex":"none"}}>
           <div className='paybody'>
           <button onClick={()=>setopen(false)}  type="button" className="btn-close btncus" aria-label="Close"></button>
            <h4>Payment 600/-</h4>
            
               <div>
                <p>Payment Month :</p>
               <input type="date" value={selectedDate} min={minDate} onChange={(e)=>setSelectedDate(e.target.value)}/>
               </div>
               <CardElement className="StripeElement"/>
               <button onClick={handlepay}>Pay</button>
           </div>
    </div>
</>
  )
}

export default Payment


// isdate()
// setloader(true)
// const res=await axios.post("https://mpbackend-2udh.onrender.com/users/paymentfee",{
//   mail:user.mail,
//   date:selectedDate
// },{withCredentials:true})
// alert(res.data.message)