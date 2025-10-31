import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PrimerCompenente} from './PrimerComponente'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerCompenente />
  </StrictMode>,
)
