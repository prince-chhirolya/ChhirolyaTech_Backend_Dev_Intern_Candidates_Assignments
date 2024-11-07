import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Othercontexts } from './Otherprovider'
import axios from 'axios'
const date=new Date
const Foot = () => {
   const {loaders,auths}=useContext(Othercontexts)
   const [loader,setloader]=loaders
   const [auth,setauth]=auths
  const navigate=useNavigate()

  const handlelogout=async()=>{
    try {
      setloader(true)
      const res=await axios.post("https://mpbackend-2udh.onrender.com/users/logout",{},{withCredentials:true})
      alert(res.data.message)
      if(res.data.message==="successfully logout"){
        setauth(false)
        
        window.location.reload()
      }
    } catch (error) {
      console.log(error.message)
    }finally{
      setloader(false)
    }
  }

  return (
    <div className='foot'>
      <div className='f1'><h1>Mr.P</h1></div>
      <div className='f2'>
        <h1>Mr.Perfect</h1>
        <span>
          <p onClick={()=>{
            const sec=document.querySelector(".maxlife")
            sec.scrollIntoView({
              behavior:"smooth",
              block:"start"
            })
          }}>About Me</p>
          <p onClick={()=>{
            const sec=document.querySelector(".program")
            sec.scrollIntoView({
              behavior:"smooth",
              block:"start"
            })
          }}>Personal Training</p>
          <p onClick={()=>{
            const sec=document.querySelector(".handn")
            sec.scrollIntoView({
              behavior:"smooth",
              block:"start"
            })
          }}>Nutrition</p>
          </span>
          <p>Mr.Perfectgym.com © {date.getFullYear()} ALL RIGHTS RESERVED WEBSITE DESIGNED BY S.D</p>
          <a href="https://maps.app.goo.gl/H4o4KNC6WjcJx7CS6">Location🚩</a>
      </div>
      <div className='f3'>
        {(auth==false)&&<button className='bb' onClick={()=>{navigate("/signin")}}>Sign In/Up</button>}
        {auth&&<button className='bb' onClick={handlelogout}>Logout</button>}
        <button className='las' onClick={()=>{window.scrollTo({
          top:0,
          behavior:"smooth"
        })}}>🔝</button>
      </div>
    </div>
  )
}

export default Foot