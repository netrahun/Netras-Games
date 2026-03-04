import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router'
import { Routes } from 'react-router'
import { Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />}></Route>
      </Routes>
    </HashRouter>

  </StrictMode>,
)
