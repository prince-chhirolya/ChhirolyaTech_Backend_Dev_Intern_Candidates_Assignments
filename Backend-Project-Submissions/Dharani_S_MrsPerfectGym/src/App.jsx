import React, { useContext } from 'react'
import "./App.css"
import Login from './Pages/Login'
import Changepass from './Pages/Changepass'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader'
import Signup from './Pages/Signup'
import Userside from './Pages/Userside'
import Userpay from './Pages/Userpay'
import Authside from './Pages/Authside'
import Userpays from './Pages/Userpays'
import Home from './Pages/Home'
import Usersappointment from './Pages/Userappointment'
import { Othercontexts } from './Components/Otherprovider'

const App = () => {
  const {auths,users}=useContext(Othercontexts)
  const [auth,setauth]=auths
  const [user,setuser]=users
  return (
    <div>
      <Loader/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/changepass' element={<Changepass/>}/>
    <Route path='/userside' element={auth&&user.role==="user"?<Userside/>:<Navigate to={"/signin"}/>}/>
    <Route path='/userpay' element={auth&&user.role==="user"?<Userpay/>:<Navigate to={"/signin"}/>}/>
    <Route path='/userpays' element={auth&&user.role==="auth"?<Userpays/>:<Navigate to={"/signin"}/>}/>
    <Route path='/authside' element={auth&&user.role==="auth"?<Authside/>:<Navigate to={"/signin"}/>}/>
    <Route path='/userapp' element={auth&&user.role==="auth"?<Usersappointment/>:<Navigate to={"/signin"}/>}/>
   </Routes>

    </div>
  )
}

export default App