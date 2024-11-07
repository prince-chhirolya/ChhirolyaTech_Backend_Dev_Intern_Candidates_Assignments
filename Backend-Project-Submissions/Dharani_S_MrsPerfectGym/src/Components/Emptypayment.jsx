
import React, { useContext, useEffect, useState } from 'react'
import { Othercontexts } from './Otherprovider'
import axios from 'axios'

const Emptypayment = () => {

    const {loaders,users,userdets}=useContext(Othercontexts)
    const [loader,setloader]=loaders
    const [user,setluser]=users
    const [userdet,setluserdet]=userdets
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
    }, [loader]);

const handlepay=async()=>{

    if(selectedDate.length!==10) return alert("enter the valid date")

               try {
                setloader(true)
                const res=await axios.post("https://mpbackend-2udh.onrender.com/users/paymentfee",{
                    mail:userdet.mail,
                    date:selectedDate
                  },{withCredentials:true})
                  alert(res.data.message)
               } catch (error) {
                alert(error.message)
               }finally{
                setloader(false)
               }
}

  return (  
<>
<div className='payment' onClick={()=>setopen(true)}>
            <h4>Pay Fees</h4>
    </div>
    <div className='pay' style={{display:open?"flex":"none"}}>
           <div className='paybody' style={{height:"300px"}}>
           <button onClick={()=>setopen(false)}  type="button" className="btn-close btncus" aria-label="Close"></button>
            <h4>Payment 600/-</h4>
            
               <div>
                <p>Payment Month :</p>
               <input type="date" value={selectedDate} min={minDate} onChange={(e)=>setSelectedDate(e.target.value)}/>
               </div>

               <button onClick={handlepay}>Pay</button>
           </div>
    </div>
</>
  )
}

export default Emptypayment


