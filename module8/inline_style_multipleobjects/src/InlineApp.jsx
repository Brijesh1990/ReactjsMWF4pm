import React from "react";
const style1={
   backgroundColor:"black",
   width:"50%",
   height:"auto",
   margin:"auto",
   marginTop:"5%",
   padding:"25px",
   
}
const style2={
   color:"white",
   fontSize:"40px",
   textAlign:"center"
 }

 const style3={
    fontFamily:"arial",
    fontSize:"20px",
    color:"white",
    textAlign:"center"

 }

//create a function 
function App()
{    
    const Implements1={
        ...style1

    }
    const Implements2={
        ...style2

    }
    const Implements3={
        ...style3,

    }

    return (
        <>
            <div style={Implements1}>
                <h1 style={Implements2}>Hey i am using google map!</h1>
                <p style={Implements3}>just wait its loading .........</p>
            </div>
        </>
    )
}

export default App;