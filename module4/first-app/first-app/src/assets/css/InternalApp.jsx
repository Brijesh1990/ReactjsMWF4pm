import React from 'react'
const version=React.version;

export default function InternalApp() {
  return (
    <React.Fragment>
    <div className='content'>
        <h1>About us</h1>
        <p> lorem ipsum</p>
        <h1>i am using {version}</h1>
    </div>   
    </React.Fragment>
  )
}
