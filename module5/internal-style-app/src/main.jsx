import React from 'react'
import ReactDOM from 'react-dom/client'
import InternalApp from './components/InternalApp'
import Employee from './components/Employee'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InternalApp />
    <Employee />
  </React.StrictMode>,
)
