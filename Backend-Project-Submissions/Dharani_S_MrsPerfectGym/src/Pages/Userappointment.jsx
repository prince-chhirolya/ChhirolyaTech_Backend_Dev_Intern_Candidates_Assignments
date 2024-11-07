import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Othercontexts } from '../Components/Otherprovider'

const Usersappointment = () => {
    const {loaders}=useContext(Othercontexts)
    const [loader,setloader]=loaders
    const [app,setapp]=useState([])
      const fetchdata=async()=>{
        try {
            setloader(true)
            const res=await axios.post("https://mpbackend-2udh.onrender.com/users/allapp",{},{withCredentials:true})
            const datas=Array.isArray(res.data)?res.data:[]
            setapp(datas)
        } catch (error) {
            console.log(error.message)
        }finally{
            setloader(false)
        }
      }

     useEffect(()=>{
         fetchdata()
     },[])




  return (
    <div className='userside'>
           <div>
            <table className='usertable' style={{width:"96%"}}>
                <thead style={{backgroundColor:"red"}}>
                    <tr><td>Phone No</td><td >Session</td><td>Booked Date</td><td>Activity</td><td>Help</td></tr>
                </thead>
                <tbody>
                {
                    app.map((val,ind)=>(
                        <tr key={ind}><td>{val.phoneno}</td><td >{val.session}</td><td>{(val.createdAt).split("T")[0]}</td><td>{val.activity.join(", ")}</td><td style={{height:"100%"}}>{val.help}</td></tr>
                    ))
                }
                </tbody>
            </table>
           </div>
    </div>
  )
}

export default Usersappointment