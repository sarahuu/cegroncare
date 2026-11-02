import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes/index.jsx'

// Each deploy replaces the hashed route chunks, so a tab left open across a
// deploy can request a file that no longer exists. Reload once to pick up the
// new build; the guard stops a reload loop if the chunk is genuinely missing.
const RELOAD_KEY = 'cegron:chunk-reload'

window.addEventListener('vite:preloadError', (event) => {
  const lastReload = Number(sessionStorage.getItem(RELOAD_KEY) ?? 0)
  if (Date.now() - lastReload < 10_000) return

  event.preventDefault()
  sessionStorage.setItem(RELOAD_KEY, String(Date.now()))
  window.location.reload()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
