import React from "react";
import Hello from "./components/Hello";
import ReactDOM from 'react-dom/client';

const root=ReactDOM.createRoot(document.getElementById("demo"))
root.render(
    //  <h1>Hi my name is Brijesh</h1>
    <>
    <Hello />
    </>
)