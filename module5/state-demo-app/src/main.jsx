import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
// import Name from './components/Name'
import './index.css'
// import Name from './components/ClassName'
import Name from './components/Name'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Name /> */}
    <Name />
  </React.StrictMode>,
)


/* 

Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app


*/