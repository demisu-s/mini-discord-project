import React from 'react'
import "./index.css"
import ReactDOM from 'react-dom/client'

import App from '@/App.jsx'
import './index.css'
//this change is for hot reload

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <App />
  </React.StrictMode>,
)
