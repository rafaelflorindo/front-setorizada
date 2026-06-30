import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from '@routes/index'

import '@styles/variables.css'
import '@styles/global.css'
import '@styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)