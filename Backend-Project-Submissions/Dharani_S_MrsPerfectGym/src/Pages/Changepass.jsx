import { useFormik } from 'formik'
import React, { useContext } from 'react'
import  { Othercontexts } from '../Components/Otherprovider'
import axios from 'axios'

const validate = values => {
  const errors = {}
  
  if (!values.otp) {
    errors.otp = "Name is required."
  }


  if (!values.mail) {
    errors.mail = "Email is required."
  }


  // Corrected password validation logic
  if (!values.password) {
    errors.password = "Password is required."
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters."
  }

  return errors;
}

const Changepass = () => {
    const {loaders}=useContext(Othercontexts)
    const [loader,setloader]=loaders
  const formik = useFormik({
    initialValues: {
      otp: "",
      mail: "",
      password: "",
    },
    validate,
    onSubmit: async(values) => {
      try {
        setloader(true)
        const res=await axios.post("https://mpbackend-2udh.onrender.com/users/changepass",{
            otp:values.otp,
            mail:values.mail,
            password:values.password,
        },{withCredentials:true})
        if(res.data.message==="password changed successfully"){
            alert("password changed successfully")
        }else{
            alert(res.data.message)
        }
      } catch (error) {
        console.log(error.message)
      }finally{
        formik.resetForm()
        setloader(false)

      }
    }
  })

  return (
    <div className='signupcon customsigg'>
      <form onSubmit={formik.handleSubmit} className='signbody' style={{height:"50%"}}>
      <h1 style={{marginBottom:"6px"}}>Change Password</h1>
        <div>
          <input 
            type="text" 
            required 
            placeholder='otp..' 
            name='otp' 
            onChange={formik.handleChange} 
            value={formik.values.otp} 
          /> 
          {formik.errors.otp ? <p>{formik.errors.otp}</p> : null}
        </div>
 
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
        
        <button type='submit' style={{height:"40%"}}>Submit</button>
      </form>
    </div>
  )
}

export default Changepass
