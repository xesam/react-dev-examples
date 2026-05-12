import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import PaymentApp from './PaymentApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaymentApp />
  </StrictMode>,
)
