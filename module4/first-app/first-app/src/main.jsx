import React from "react";
import ReactDOM from 'react-dom/client'
// import App from "./App";
// import External from "./ExternalApp.jsx";
//import './assets/css/style.css'
// import InternalApp from "./assets/css/InternalApp";
import { Calculator,Mult } from "./Calculator";
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
// fragements : fragements is just access multiple jsx element via <></>  <React.Fragement></ReactFragment>
<>
{/* 
<App />
<External /> */}

{/* <InternalApp /> */}
<Calculator />
<Mult />

</> 
)