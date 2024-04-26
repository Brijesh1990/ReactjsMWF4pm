import React,{Component} from 'react'
const emp="Brijesh Kumar Pandey";
const cmpname="Tops technology pvt ltd";
class Employee extends Component
{
    render()
    {
        return (

            <>
            <h1>Hi i am {emp}</h1>

            </>
      
        )
       
    }
}

class Company extends Employee
{
    render()
    {
        return (

          
            <>
              <Employee />
             <h2>Company name is {cmpname}</h2>   
            </>
      
        )
       
    }
}

export default Company