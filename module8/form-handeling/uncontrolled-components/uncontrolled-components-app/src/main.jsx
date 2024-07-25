import React from 'react'
import ReactDOM from 'react-dom/client'
// import ControlledApp from './ControlledApp'
// import UncontrolledApp from './UncontrolledApp'
import Validation from './ValidationApp'
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ControlledApp /> */}
    {/* <UncontrolledApp /> */}
    <Validation />
    
  </React.StrictMode>,
)
