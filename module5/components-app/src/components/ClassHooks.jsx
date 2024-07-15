import React,{Component,useState} from 'react'
class App extends Component
{
  
    render()
    {
   // destructuring of data inside useState()
    const[name,SetName]=useState("Brijesh");
    const[age,setAge]=useState("34");
    
        return(
            <>
                <h1>My name is :{name}</h1>
                <p>I am {age} years old</p>
            </>
        )
    }
}

export default App