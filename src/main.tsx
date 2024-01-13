import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = document.getElementById('root') as HTMLElement

// prettier-ignore
ReactDOM
  .createRoot(root)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
