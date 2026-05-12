import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import ActivityApp from './ActivityApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActivityApp />
  </StrictMode>,
)
