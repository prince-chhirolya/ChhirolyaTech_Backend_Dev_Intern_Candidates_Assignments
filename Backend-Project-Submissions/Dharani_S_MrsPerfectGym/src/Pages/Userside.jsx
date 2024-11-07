import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Othercontexts } from '../Components/Otherprovider'

const Userside = () => {
    const {loaders}=useContext(Othercontexts)
    const [loader,setloader]=loaders
    const [app,setapp]=useState([])
      const fetchdata=async()=>{
        try {
            setloader(true)
            const res=await axios.post("https://mpbackend-2udh.onrender.com/users/getapp",{},{withCredentials:true})
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

    const handledelete=async(id)=>{
        try {
            setloader(true)
            const res=await axios.post("https://mpbackend-2udh.onrender.com/appointments/deleteapp",{id},{withCredentials:true})
            alert(res.data.message)
        } catch (error) {
            console.log(error.message)
        }finally{
            setloader(false)
            fetchdata()
        }
    }
  return (
    <div className='userside'>
           <div>
            <table className='usertable'>
                <thead style={{backgroundColor:"red"}}>
                    <tr><td>Session</td><td>Phone No</td><td>Booked Date</td><td>Activity</td><td>Cancel Appointment</td></tr>
                </thead>
                <tbody>
                {
                    app.map((val,ind)=>(
                        <tr key={ind}><td>{val.session}</td><td>{val.phoneno}</td><td>{(val.createdAt).split("T")[0]}</td><td>{val.activity.join(", ")}</td><td><button onClick={()=>handledelete(val._id)}>Cancel</button></td></tr>
                    ))
                }
                </tbody>
            </table>
           </div>
    </div>
  )
}

export default Userside