import React,{useState} from 'react'

export default function SearchApp() {
 //  destructuring of data to search the values using textfield 
 const[input,setInput]=useState("");
 const[search,setSearch]=useState([
    "apple",
    "ramesh",
    "banana",
    "axay",
    "vimal",
    "disha",
    "chinmay",
    "sharma",
    "isaha"
 ]) 

//  for search
const Data=search.filter((item)=>item.includes(input)); 
 
 return (
    <>

      <div style={{padding:"25px",backgroundColor:"orange",textAlign:"center"}}>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search anything here ...' />
      </div>

    {/* display all search data from inputs  */}

      <ul>
        {Data.map((e,i)=>{

            return (
                <>
                 <li key={i.id} onClick={(e)=>setInput(e.target.textContent)} style={{textAlign:"center",textDecoration:"none",listStyleType:"none",fontSize:"20px"}}>{e}</li>   
                </>
            )
        })}
      </ul>   
    
    
    
    </>
  )
}
