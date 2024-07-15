import React,{useState} from 'react'

export default function FunctionAppHooks() {

  //destructring of data  
  const[name,setName]=useState("brijesh");
  const[age,setAge]=useState("34");
  return (
    <div>
    <>
      <h1>My name is {name}</h1>
      <h4>I am {age} years old</h4>
      <button type='button' onClick={()=>{setName("Yash kumar")}}>Change Name</button>

    </>
      
    </div>
  )
}
