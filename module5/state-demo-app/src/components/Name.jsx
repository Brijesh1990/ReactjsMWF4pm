import React,{useState} from 'react'
export default function Name() {
  //destructuring of state 
//   const[name,setName]=useState("Brijesh kumar pandey");
const[name1,setName1]=useState("Brijesh kumar pandey");
const[name2,setName2]=useState("Rakesh kumar pandey");
  return (
    <>
       <h1>Name of employees is {name1}</h1>
       <h1>Name of employees is {name2}</h1>
       <button type='button' className='button' onClick={()=>setName1("Dhaval kumar rathi")}>Change Name </button>
       <button type='button' className='button1' onClick={()=>setName2("Nilesh kumar rathi")}>Change Name </button>

    </>
  )
}
