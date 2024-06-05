import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import Header from './Header'
export default function ManageTask() {
  return (
    <>
        
    <Header />
    
    <MDBContainer className="mt-5 p-5">
           <h1 className="text-center mt-5">Manage  Task</h1>
            <hr className="w-50 mx-auto" />
            <table className="w-50 mx-auto" align="center">
             <tr>
                <th>#</th>
                <th>Task</th>
                <th>Date</th>
                <th>Action</th>
             </tr>
             <tr>
                <td>101</td>
                <td>101</td>
                <td>101</td>
                <td>101</td>
             </tr>
            </table>
    </MDBContainer>
  </>
  )
}
