import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginForm from './example.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm/>
  </StrictMode>
)
