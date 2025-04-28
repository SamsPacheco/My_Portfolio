import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import { MyPortfolio } from './Myportfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyPortfolio />
  </StrictMode>,
)
