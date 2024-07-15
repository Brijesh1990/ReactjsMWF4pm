import React, {Component} from "react";
const a=10;
const b=20;
const c=a+b;

// class ClassApp extends React.Component
// {
//     render()
//     {
//         return (

//            <>
//               <h1>I am just load Class based components</h1>
//               <h3>Additions of numbers is {c}</h3>
//            </>

//         );
//     } 
// }

// export default ClassApp


class ClassApp extends Component
{
    render()
    {
        return (

           <>
              <h1>I am just load Class based components wait its adding ....</h1>
             
           </>

        );
    } 
}

// class Add extends ClassApp
class Add extends Component
{
    render()
    {
        return(
            <>
            <ClassApp />  
            <h4>Hey additions of numbers is {c}</h4>   

            </>
        )
        
    }
}

export default Add