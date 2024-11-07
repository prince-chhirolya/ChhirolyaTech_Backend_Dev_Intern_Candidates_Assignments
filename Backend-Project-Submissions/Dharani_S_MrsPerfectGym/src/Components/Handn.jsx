import React from 'react'
import img1 from "../../public/max1.png"
import img2 from "../../public/max4.png"
import img3 from "../../public/max3.png"


const Handn = () => {
  return (
  
        <div className='handn'>
       <p>80% OF STAYING FIT IS <span>FOOD.</span></p>
       <div className='ll'><h2></h2></div>
       <h1>HEALTH & NUTRITION</h1>
       <p className='p1'>Everyday food choices are guided by a number of considerations—emotions, habits, fast-paced lifestyles, traditions, social influences, religion, and pleasure. Let me help you feel confident in your diet choices while still enjoying the foods that you love with one-on-one nutrition counseling sessions. Whether your goal is to lose weight, lower cholesterol, or optimize your health, having me as your private nutrition coach provides the support you need to stay on track and keep yourself motivated.</p>
       <div className='pic'>
        <span><img src={img1} alt="img" /><p>PREMIUM HEALTH
        </p></span>
        <span><img src={img3} alt="img" /><p>QAULITY NUTRITION
        </p></span>
        <span><img src={img2} alt="img" /><p>MEAL PLANS</p></span>

       </div>
       <p className='p2'>As part of all of my training programs, you’ll work one-on-one with me as your nutrition coach to develop a plan that meets you where you’re starting, no matter what your goal or your experience level is.</p>
    </div>
  
  )
}

export default Handn