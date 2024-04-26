import React from 'react'
import ReactDOM from 'react-dom/client'
import LayoutApp from './components/LayoutApp'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LayoutApp />
  </React.StrictMode>,
)
