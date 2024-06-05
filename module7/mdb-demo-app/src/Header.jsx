import React from 'react'
import { MDBContainer,MDBRow,MDBBtn} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
        <MDBContainer fluid className="bg-secondary p-4">
         <MDBRow>
            <div className="col-md-8">
                <Link to="/"><span className="bi bi-grid text-white fs-2"> <b className="ms-3">Task Manager</b></span></Link>
            </div>
            <div className="col-md-4">
                <Link to="/add-task"><MDBBtn className="btn btn-lg btn-warning fs-5">TASK <span className="bi bi-grid"></span></MDBBtn></Link>
                <Link to="/manage-task"><MDBBtn className="btn btn-lg btn-warning ms-2 fs-5">Manage TASK <span className="bi bi-grid"></span></MDBBtn></Link>
            </div>
         </MDBRow>

         </MDBContainer>
       
    </div>
  )
}
