import React from 'react'
const a=10;
const b=20;
const c=a+b;
const d=a*b;

function Calculator() {
  return (
    <div>
       <h1>Additions of numbers is :{c}</h1>      
    </div>
  )
}


function Mult() {
    return (
      <div>
         <h1>Multiplications of numbers is :{d}</h1>      
      </div>
    )
  }

 export {Calculator,Mult} 
  
