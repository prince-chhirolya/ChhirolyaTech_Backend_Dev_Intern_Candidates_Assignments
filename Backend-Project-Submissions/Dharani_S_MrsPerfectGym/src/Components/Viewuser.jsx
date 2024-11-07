
import React, {  useContext, useState } from 'react'
import { Othercontexts } from './Otherprovider'
import { useNavigate } from 'react-router-dom'


const Viewuser = () => {

    
    const {opens,userdets}=useContext(Othercontexts)
    const [open,setopen]=opens
    const [userdet,setuserdet]=userdets
    const navigate=useNavigate()


const handlepay=()=>{
    
     navigate("/userpays")
     
}

  return (
<>

    <div className='pay' style={{display:open?"flex":"none"}}>
           <div className='paybody' style={{alignItems:"start",color:"white"}}>
           <button onClick={()=>setopen(false)}  type="button" className="btn-close btncus" aria-label="Close"></button>
             <h5>{`name  : ${userdet.name}`}</h5>
             <h5>{`Email  : ${userdet.mail}`}</h5>
             <h5>{`Phone No  : ${userdet.phoneno}`}</h5>
             <h5>{`Membership  : ${userdet.membership}`}</h5>
               <button onClick={handlepay} style={{alignSelf:"center"}}>Fees Details</button>
           </div>
    </div>
</>
  )
}

export default Viewuser


