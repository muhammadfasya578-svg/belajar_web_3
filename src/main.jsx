import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Halamanjsx from './Halamanjsx.jsx'
import Button from './Button.jsx'
import Input from './Input.jsx'
import NamaLengkap from './NamaLengkap.jsx'
import LoginForm from './component/LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>,
)
