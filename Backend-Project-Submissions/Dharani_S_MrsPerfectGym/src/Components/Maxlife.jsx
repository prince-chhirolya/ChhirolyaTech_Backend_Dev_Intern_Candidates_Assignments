import React from 'react'
import m1 from "../../public/max1.png"
import m2 from "../../public/max2.png"
import m3 from "../../public/max3.png"
import m4 from "../../public/max4.png"



const Maxlife = () => {
  return (
    <div className='maxlife'>
        <div className='mp'><p>EVERY<span>BODY</span> IS DIFFERENT</p></div>
        <div className='mpwid'></div>
         <div className='mpbody'>
          <div className='mpbody1'>
            <h1>MAXIMIZE YOUR LIFE</h1>
            <p>Stop waiting to get in <span>shape!</span>
            I will help you sculpt the body that fits your lifestyle and I'll help you maintain it through all aspects of life. Why give up the things you love to do? I will walk you through every step of transforming your body from nutrition to exercise all the way down to your molecular structure.</p>
            <p>Personalization is key to getting the best possible results, which is why my workout programs are modified to fit your individual fitness goals and fitness level. Whether you're new to working out or you're an experienced fitness buff my <span>fitness masterclass</span> is designed for you to achieve your goals and to enjoy your life!</p>
            <button className='buttonn' onClick={()=>{
              const sec=document.querySelector(".form")
              sec.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>Free Consultation</button>
          </div>
          <div className='row row-cols-2 mpbody2'>
            <div><img src={m1} alt="img" style={{width:"50px"}}/>
            <p style={{fontWeight:"bold",color:"#32325d"}}>Body Analysis</p>
            <div></div>
            <p>I usually start my consultations off by performing an in-depth health assessment, using functional movement screenings and a body composition analysis, to gauge your most accurate fitness level.</p>
</div>
            <div><img src={m2} alt="img" style={{width:"50px"}} />
            <p style={{fontWeight:"bold",color:"#32325d"}}>Fitness Programs</p>
            <div></div>
            <p> Once fitness levels have been assessed, I design a custom workout routine for your goals, time constraints, & budget. I encourage, motivate & guide you to reach your health and fitness goals on a personalized level.
            </p></div>
             <div>
<img src={m3} alt="img" style={{width:"50px"}}/>
<p style={{fontWeight:"bold",color:"#32325d"}}>Health and Nutrition</p>
<div></div>
<p>As part of my training program, I'll work one-on-one with you as your nutrition coach to develop a meal plan that creates new and sustainable eating habits that still fit your lifestyle & will maximize your fitness goals.
</p>
</div>
            <div>
<img src={m4} alt="img" style={{width:"50px"}}/>
<p style={{fontWeight:"bold",color:"#32325d"}}>Flexibility</p>
<div></div>
<p>My programs are flexible & specifically designed to help you reach your health & fitness goals. I'll work with you to customize an exercise & meal plan that reflects not only your short term goals but the long game as well.
</p>
</div>
          </div>
         </div>
    </div>
  )
}

export default Maxlife