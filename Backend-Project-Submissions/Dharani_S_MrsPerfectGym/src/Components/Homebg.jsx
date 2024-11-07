import React from 'react'
import video from "../../public/video.mp4"
import Nav from './Nav'
const Homebg = () => {
  return (
   <>
   <Nav/>
    <div className='homebg'>
        <video autoPlay playsInline loop muted><source src={video} type='video/mp4'/>Your browser does not support the video tag.</video>
        <div className='overlay'></div>
        <div className='homebody'>
             <div className='homebody2'>
            <div><h1>Mr. </h1><h1> PERFECT</h1></div>
             <div className='homeh5'>
             <h5>Helping People live happier, healthier lives </h5>
             <h5>through improved fitness, nutrition and mindset.</h5>
             </div>
            <button onClick={()=>{
              const sec=document.querySelector(".form")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>Free Consultation</button>
             </div>
             <div className='homefoot'>
              <div>
                <a href=""><i  className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/mr.perfectgym_61/"><i className="fa-brands fa-instagram "></i></a>
              
              </div>
     
           </div>
        </div>

    </div>
   </>
  )
}

export default Homebg