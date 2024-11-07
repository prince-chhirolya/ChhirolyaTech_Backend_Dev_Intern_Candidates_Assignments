
import React, { useContext, useEffect, useState } from 'react'
import { Othercontexts } from '../Components/Otherprovider'
import axios from 'axios'
import Viewuser from '../Components/Viewuser'
const Authside = () => {
    const {loaders,fees,opens,userdets}=useContext(Othercontexts)
    const [loader,setloader]=loaders
    const [fee,setfee]=fees
    const [userdet,setuserdet]=userdets
    const [app,setapp]=useState([])

    // console.log(alluser)
    const fetchdata=async()=>{
        try {
            setloader(true)
            const res=await axios.post("https://mpbackend-2udh.onrender.com/users/getusers",{},{withCredentials:true})
            const dara=Array.isArray(res.data)?res.data:[]
            setapp(dara)
        } catch (error) {
            console.log(error.message)
        }finally{
            setloader(false)
        }
    }
    useEffect(()=>{
        fetchdata()
    },[])
   
    const handleview=(val)=>{
        

        setfee(val.fees)
        setuserdet({
            mail:val.mail,
            name:val.name,
            membership:val.membership,
            phoneno:val.phoneno
        })
        setopen(true)
    }

   const handlemember=async(mail)=>{
          try { setloader(true)
            const res=await axios.post("https://mpbackend-2udh.onrender.com/users/changemember",{mail},{withCredentials:true})
           if(res.data.message==="Membership status changed"){
            alert("Membership status changed")
            fetchdata()
           }
        } catch (error) {
            console.log(error.message)
          }finally{
            setloader(false)
          }
   }

   const handledelete=async(mail)=>{
    try {
        setloader(true)
        const res=await axios.post("https://mpbackend-2udh.onrender.com/users/deleteuser",{mail},{withCredentials:true})
        if(res.data.message==="User deleted successfully."){
            alert("User deleted successfully.")
            fetchdata()
           }
    } catch (error) {
        console.log(error.message)
    }finally{
        setloader(false)
      }
   }


  return (
    <>

    <Viewuser/>
    <div className='userside'>
           <div>
            <table className='usertable'>
                <thead style={{backgroundColor:"red"}}>
                    <tr><td>Name</td><td style={{display:"block"}}>View User</td><td>MemberShip</td><td>Delete User</td></tr>
                </thead>
                <tbody>
                {
                    app.map((val,ind)=>(
                        <tr key={ind}><td>{val.name}</td><td style={{display:"block"}}><button onClick={()=>handleview(val)}>View</button></td><td><button onClick={()=>handlemember(val.mail)}>{val.membership}</button></td><td><button onClick={()=>handledelete(val.mail)}>DELETE</button></td></tr>
                    ))
                }
                </tbody>
            </table>
           </div>
    </div></>
  )
}

export default Authside