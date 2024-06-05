import React from 'react'
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit'
export default function Content() {
  return (
    <div>
        <MDBContainer className="mt-5 p-5">
         <MDBRow>
        
            <div className='col-md-5'>
            <h2 className='bg-dark text-white p-3'>Welcome to Our Task</h2>
            </div>
            
            <div className='col-md-7'><h2 className=' bg-dark p-3 text-white'>Create Task Manage App</h2>
                <h3>1) Create Task</h3>
                <h3>2) Read Task</h3>
                <h3>3) Edit Task</h3>
                <h3>4) Update Task</h3>
                <h3>5) Delete Task</h3>
            </div>
         </MDBRow>
         </MDBContainer>
       
    </div>
  )
}
