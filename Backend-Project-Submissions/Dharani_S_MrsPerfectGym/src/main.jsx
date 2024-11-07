
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Otherprovider from './Components/Otherprovider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Otherprovider>
    <App />
    </Otherprovider>
    </BrowserRouter>
  ,
)
