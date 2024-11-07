import React, { useContext, useEffect, useState } from 'react'
import { Othercontexts } from './Otherprovider'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const {users}=useContext(Othercontexts)
  const [user,setuser]=users
    const [open,setopen]=useState(false)
    const [width,setwidth]=useState(0)
const handlescroll=()=>{
  const scroll=window.scrollY
  const height=document.documentElement.scrollHeight-window.innerHeight
  const res=(scroll/height)*100
  setwidth(res)
}

useEffect(()=>{
  window.addEventListener("scroll",handlescroll)
   return ()=>{
    window.removeEventListener("scroll",handlescroll)
   }
},[])


const navigate=useNavigate()

  return (
<>
<div className='mas' style={{backgroundColor: `rgba(0,0,49, ${width / 9})`,}}>
<div className='nav' >
        <div className='line1'><h1>Mr.P</h1></div>
        <div className='line2 change'> 
            <h6 onClick={()=>{
              const sec=document.querySelector(".program")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              
            }}>PERSONAL TRAINING</h6>
            <h6 onClick={()=>{
              const sec=document.querySelector(".handn")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              
            }}>HEALTH & NUTRITION</h6>
            <h6 onClick={()=>{
              const sec=document.querySelector(".form")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              
            }}>GET IN TOUCH</h6>
            {user.role==="user"&&<h6 onClick={()=>{navigate("/userside")}}>APPOINTMENTS</h6>}
            {user.role==="auth"&&<h6 onClick={()=>{navigate("/userapp")}}>APPOINTMENTS</h6>}
            {user.role==="user"&&<h6 onClick={()=>{navigate("/userpay")}}>FEES DETAILS</h6>}
            {user.role==="auth"&&<h6 onClick={()=>{navigate("/authside")}}>AUTHER VIEWS</h6>}
        </div>
        <div className='line3' onClick={()=>setopen(!open)}>
            <div className={open?'line333':'line33'} >
                <div className='lin-1'></div>
                <div className='lin-2'></div>
            </div>
        </div>
        </div>
</div>
        <div className='progress' style={{width:`${width}vw`}}>

        </div>
        <div className={`opentab2 ${open?"show":""}`} >
          <div className='ran'>
          <div onClick={()=>{
              const sec=document.querySelector(".program")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              setopen(false)
            }}><i className="fa-solid fa-person-running"></i><h4>PERSONAL TRAINING</h4></div>
            <div onClick={()=>{
              const sec=document.querySelector(".handn")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              setopen(false)
            }}><i className="fa-solid fa-apple-whole"></i><h4>HEALTH & NUTRITION</h4></div>
            <div onClick={()=>{
              const sec=document.querySelector(".form")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              setopen(false)
            }}><i className="fa-brands fa-telegram"></i><h4>GET IN TOUCH</h4></div>
            {user.role==="user"&&<div onClick={()=>{navigate("/userside")}}><i className="fa-regular fa-calendar-check" ></i><h4>APPOINTMENTS</h4></div>}
            {user.role==="auth"&&<div onClick={()=>{navigate("/userapp")}}><i className="fa-regular fa-calendar-check" ></i><h4>APPOINTMENTS</h4></div>}
            {user.role==="user"&&<div onClick={()=>{navigate("/userpay")}}><i className="fa-solid fa-wallet"></i><h4>FEES DETAILS</h4></div>}
            {user.role==="auth"&&<div onClick={()=>{navigate("/authside")}}><i className="fa-solid fa-circle-user"></i><h4>AUTHER VIEWS</h4></div>}
          </div>
        </div>
</>
  )
}

export default Nav