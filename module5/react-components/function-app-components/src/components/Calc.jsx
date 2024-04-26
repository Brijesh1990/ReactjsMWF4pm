// import React from 'react'

// export default function Calc() {
//   return (
//     <div>
      
//     </div>
//   )
// }

import React from "react";
const a=10;
const b=30;
const c=a+b;
const d=a-b;
function Calc()
{
    return (
        <>
          <h2>Additions of numbers is :{c}</h2>
            
        </>
    )
}

function JustChil()
{
    return (
        <>
          <Calc />  
          <h2>Substractions is {d}</h2>
        </>
    )
}

export default JustChil


/* note : function based components are max used inside of react 18.2.0 version
          function based components are used a hooks 
          hook is must be only suported in function based components 


*/
