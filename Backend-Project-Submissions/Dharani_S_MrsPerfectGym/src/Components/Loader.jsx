import React, { useContext } from 'react'
import { Othercontexts } from './Otherprovider'

const Loader = () => {
    const {loaders}=useContext(Othercontexts)
    const [loader,setloader]=loaders
  return (
    <div style={{display:loader?"flex":"none"}}>
        <div className='popup' style={{zIndex:"999999"}}></div>
    <div className="spinner loader" style={{zIndex:"9999999"}}></div>

    </div>
  )
}

export default Loader