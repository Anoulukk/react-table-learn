import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import MyTable from './modules/table/Table'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyTable />
  </StrictMode>,
)
