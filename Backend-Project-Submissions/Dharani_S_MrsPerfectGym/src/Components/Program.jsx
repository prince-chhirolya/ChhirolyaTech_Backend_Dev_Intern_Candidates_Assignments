import React from 'react'
import img from "../../public/pro.svg"
import img1 from "../../public/pp1.png"
import img2 from "../../public/pp2.png"
import img3 from "../../public/pp3.png"
import img4 from "../../public/pp4.png"
import img5 from "../../public/pp5.png"
import img6 from "../../public/pp6.png"



const Program = () => {
  return (
    <div className='program'>
        <div className='theory'>
            <h1 className='ph1'>Mr.P</h1>
            <div >
            <h1>FITNESS</h1>
            <h1>PROGRAMS</h1>
            </div>
            <p>Getting in shape shouldn’t be a punishment. It’s an amazing and empowering lifestyle decision that anyone can achieve. I believe in finding the pleasurable side of fitness, and while there may be sore muscles along the way, the amount of fun and levels of energy you will experience will far exceed the discomfort.</p>
            <p>While Specializing in weight loss training, I also offer many other types of personal training programs that are designed around your needs, including individualized programs, athletic & sports training, cardiovascular conditioning & functional fitness, muscle building, muscle toning, injury rehab, mind-body connection, nutrition coaching, fitness for seniors and more.</p>
            <button className='buttonn' onClick={()=>{
              const sec=document.querySelector(".form")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>Free Consultation</button>
        </div>
        <div className='sec'>
        <img src={img} alt="img" />
         <div className='row row-cols-3 spanimg'>
            <span><img src={img1} alt="img" /><h6>Weight Loss</h6></span>
            <span><img src={img2} alt="img" /><h6>Body Building</h6></span>
            <span><img src={img3} alt="img" /><h6>Silambam</h6></span>
            <span><img src={img4} alt="img" /><h6>Shaping</h6></span>
            <span><img src={img5} alt="img" /><h6>Strength Training</h6></span>
            <span><img src={img6} alt="img" /><h6>Health & Nutrition</h6></span>
         </div>
        </div>
    </div>
  )
}

export default Program

{/* <img src={img} alt="img" /> */}