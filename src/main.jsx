import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SocialDashDark from './components/SocialDashDark.jsx'
import SocialDashLight from './components/SocialDashLight.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="darkMode" element={<SocialDashDark />}/>
        <Route path="lightMode" element={<SocialDashLight />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
