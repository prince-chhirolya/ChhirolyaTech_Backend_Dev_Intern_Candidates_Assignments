import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Othercontexts } from '../Components/Otherprovider'

const validate = values => {
  const errors = {}
  
  if (!values.name) {
    errors.name = "Name is required."
  }

  if (!values.phoneno) {
    errors.phoneno = "Phone number is required."
  }

  if (!values.mail) {
    errors.mail = "Email is required."
  }

  if (!values.city) {
    errors.city = "City is required."
  }

  // Corrected password validation logic
  if (!values.password) {
    errors.password = "Password is required."
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters."
  }

  return errors;
}

const Signup = () => {
    const {loaders}=useContext(Othercontexts)
    const [loader,setloader]=loaders
    const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneno: "",
      mail: "",
      city: "",
      password: "",
    },
    validate,
    onSubmit: async(values) => {
        try {
            setloader(true)
            const res=await axios.post("https://mpbackend-2udh.onrender.com/users/signup",{
                name:values.name,
                phoneno:values.phoneno,
                city:values.city,
                mail:values.mail,
                password:values.password,
            },{withCredentials:true})
            if(res.data.message==="user registered"){
                alert("user registered")
                navigate("/signin")
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
    <div className='signupcon'>
      <form onSubmit={formik.handleSubmit} className='signbody'>
      <h1 style={{marginBottom:"6px"}}>SignUp</h1>
        <div>
          <input 
            type="text" 
            required 
            placeholder='Name..' 
            name='name' 
            onChange={formik.handleChange} 
            value={formik.values.name} 
          /> 
          {formik.errors.name ? <p>{formik.errors.name}</p> : null}
        </div>
        
        <div>
          <input 
            type="number" 
            required 
            placeholder='Phone No..' 
            name='phoneno' 
            onChange={formik.handleChange} 
            value={formik.values.phoneno} 
          /> 
          {formik.errors.phoneno ? <p>{formik.errors.phoneno}</p> : null}
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
            type="text" 
            required 
            placeholder='City..' 
            name='city' 
            onChange={formik.handleChange} 
            value={formik.values.city} 
          /> 
          {formik.errors.city ? <p>{formik.errors.city}</p> : null}
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
        
        <button type='submit'>Sign Up</button>
      </form>
      <h3 onClick={()=>navigate("/signin")}>Login?</h3>
    </div>
  )
}

export default Signup
