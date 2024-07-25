import React from "react";
import Data from "./Data";
import { Container } from "react-bootstrap";
const Employee=()=>{
    return (
        <>
          <Container className="p-5 shadow">
            
             <h2>Get Employee whose age is greater than 20 </h2>
             {Data.filter(item=>item.age>=26).map(row=>(

               // eslint-disable-next-line react/jsx-key
               <h1>Name is : {row.name}</h1>
              
             ))}

          </Container>
        </>
    )
}


export default Employee