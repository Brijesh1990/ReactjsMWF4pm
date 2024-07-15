import React from "react"
import { Container,Row } from "react-bootstrap"
const studentdata=[
  {
    id:101,
    name:"tanmay",
    salary:18500,
    address:"150 feet ring road rajkot"
  },
  {
    id:102,
    name:"mukesh",
    salary:18500,
    address:"150 feet ring road rajkot"
  },
  {
    id:103,
    name:"prateek",
    salary:18500,
    address:"150 feet ring road rajkot"
  },
  {
    id:104,
    name:"kumar",
    salary:18500,
    address:"150 feet ring road rajkot"
  },

  {
    id:105,
    name:"Raman & Raghav",
    salary:18500,
    address:"150 feet ring road rajkot"
  },

  {
    id:106,
    name:"Disha khunt",
    salary:18500,
    address:"150 feet ring road rajkot"
  }
]
function App()
{
   
  return (
    <>
   
      <Container className="p-5 mt-3">
        <h1 className="text-center">Employee details</h1>
        <Row>
          {studentdata && studentdata.map((items)=>{

            return (

              <>
              <div className="col-md-4 shadow mt-5">
                <p className="fs-3 text-center">{items.id}</p>
                <p className="fs-5 text-center">{items.name}</p>
                <p className="fs-5 text-center">{items.salary}</p>
                
                <p className="fs-5 text-center">{items.address}</p>
                
                <p className="fs-5 text-center"><button type="button" className="btn bg-primary text-white">Hire Me!</button></p>
              </div>
              </>
            )

          })}
          
        </Row>
      </Container>
     

    </>
  )
}

export default App
