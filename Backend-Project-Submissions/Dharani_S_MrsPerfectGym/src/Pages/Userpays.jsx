
import React, { useContext } from 'react'
import { Othercontexts } from '../Components/Otherprovider'
import Emptypayment from '../Components/Emptypayment'
const Userpays = () => {
    const {fees}=useContext(Othercontexts)
    const [fee,setfee]=fees
    const dara=Array.isArray(fee)?fee:[]

  return (
    <>
    <Emptypayment/>
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

export default Userpays