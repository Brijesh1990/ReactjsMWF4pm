import React,{useState} from 'react'
function Employee()
{
    // destructuring 
    const[name,setName]=useState([
        "vidya","parth","gaurav"
    ])

    const updname=()=>{

        const newname=["divya","raghav","hitesh"];
        setName(newname);
    }
    return(
        <>
           {/* <button type='button' onClick={updname}>Change Name</button>
            <h1>{name}</h1> */}

            <button type='button' onClick={updname}>Change Name</button>
            <ul>
            {name.map((name,index)=>{
                 return ( 
                
                <li key={index}>{name}</li>
            
                 )
               })}
            </ul>
        </>
    )
}
export default Employee