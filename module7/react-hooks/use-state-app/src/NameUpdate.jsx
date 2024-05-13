import React,{useState} from 'react'

export default function NameUpdate() {
//destructuring of data

// const[name1,setName1]=useState([{

// }]);

const[name1,setName1]=useState("Hitesh");
const[name2,setName2]=useState("Mitesh");
const[name3,setName3]=useState("Ritesh");
const[name4,setName4]=useState("Sukesh");

  return (
    <div>
     <h1>I am {name1}</h1>
     <h1>I am {name2}</h1>
     <h1>I am {name3}</h1>
     <h1>I am {name4}</h1>      
     <button type="button" onClick={()=>setName("Monu")}>Change Name</button>
    </div>
  )
}
