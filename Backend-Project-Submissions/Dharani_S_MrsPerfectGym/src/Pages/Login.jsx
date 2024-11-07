import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Othercontexts } from '../Components/Otherprovider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const validate = values => {
  const errors = {}
  

  if (!values.mail) {
    errors.mail = "Email is required."
  }


  if (!values.password) {
    errors.password = "Password is required."
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters."
  }

  return errors;
}

const Login = () => {


    const navigate=useNavigate()
    const {loaders,auths}=useContext(Othercontexts)
    const [loader,setloader]=loaders
    const [auth,setauth]=auths
const [forget,setforget]=useState(false)
const [mails,setmails]=useState("")

  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
    },
    validate,
    onSubmit: async(values) => {
        try {
            setloader(true)
            const res=await axios.post("https://mpbackend-2udh.onrender.com/users/login",{
                
                mail:values.mail,
                password:values.password,
            },{withCredentials:true})
            alert(res.data.message)
            navigate("/")
            setauth(true)
          } catch (error) {
            console.log(error.message)
          }finally{
            formik.resetForm()
            setloader(false)
          }
    }
  })
const handlemail=async()=>{
    try {
        setloader(true)
        const res=await axios.post("https://mpbackend-2udh.onrender.com/users/forgetpassword",{
            
            mail:mails,
        },{withCredentials:true})
       alert(res.data.message)
      } catch (error) {
        console.log(error.message)
      }finally{
        setloader(false)

      }
}

  return (
    <div className='customsig signupcon'>
        {forget?( <form onSubmit={formik.handleSubmit} className='signbody' style={{height:"25%"}}>

<h1 style={{marginBottom:"5px"}}>forget password</h1>
<div>
  <input 
    type="email" 
    required 
    placeholder='Email..' 
    onChange={(e)=>setmails(e.target.value)} 
    value={mails} 
  /> 
</div>


<button onClick={handlemail}>Submit</button>
</form>):( <form onSubmit={formik.handleSubmit} className='signbody' style={{height:"50%"}}>

<h1>Login</h1>
<div>
  <input 
    type="email" 
    required 
    placeholder='Email..' 
    name='mail' 
    onChange={formik.handleChange} 
    value={formik.values.mail} 
  /> 
  {formik.errors.mail ? <p>{formik.errors.mail}</p> : null}
</div>



<div>
  <input 
    type="password" 
    required 
    placeholder='Password..' 
    name='password' 
    onChange={formik.handleChange} 
    value={formik.values.password} 
  /> 
  {formik.errors.password ? <p>{formik.errors.password}</p> : null}
</div>

<button type='submit'>Login In</button>
</form>)}
     
      {forget?<h3 style={{fontWeight:"bolder"}} onClick={()=>setforget(false)}>Login</h3>:<h3 style={{fontWeight:"bolder"}} onClick={()=>navigate("/signup")}>Sign Up</h3>}
      {forget?null:<h4  style={{color:"red",backdropFilter:"blur(2px)"}} onClick={()=>setforget(true)}>forgetpassword?</h4>}
    </div>
  )
}

export default Login
