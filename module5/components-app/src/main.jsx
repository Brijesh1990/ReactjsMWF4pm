import React from 'react'
import ReactDOM from 'react-dom/client'
//import FunctionApp from './components/FunctionApp'
// import ClassApp from './components/ClassApp'
// import App from './components/ClassHooks'
import FunctionAppHooks from './components/FunctionAppHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FunctionApp /> */}
    {/* <ClassApp /> */}
    {/* <App /> */}
    <FunctionAppHooks />
  </React.StrictMode>,
)
