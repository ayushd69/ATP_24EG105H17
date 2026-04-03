import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './Context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*add contxt provider at room */}
    <ContextProvider>
    <App />
    </ContextProvider>
  </StrictMode>,
)