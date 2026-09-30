import { BrowserRouter } from 'react-router-dom'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const shouldHydrate = window.location.pathname === '/' && root.childElementCount > 0

if (shouldHydrate) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
