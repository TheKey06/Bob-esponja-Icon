import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Cuerpo } from './Cuerpo.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cuerpo/>
  </StrictMode>
)
