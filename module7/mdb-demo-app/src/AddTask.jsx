import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import Header from './Header'

export default function AddTask() {
  return (
    <>
    <Header />
    <MDBContainer className="mt-5 p-5">
         <form>
                <h1 className="text-center">Add New Task</h1>
                <div className="form-group w-50 mx-auto mt-3">
                <input type="text" placeholder="Add New Task *" className="form-control p-3 bg-secondary border border-0" />
                </div>

                <div className="form-group w-50 mx-auto mt-3">
                <input type="date" placeholder="Add Date *" className="form-control p-3 bg-secondary border border-0" />
                </div>

                <div className="form-group w-50 mx-auto mt-3">
                <input type="submit" value="Add Task" className="btn btn-lg btn-warning border border-0" />

                <input type="reset" value="Reset Task" className="btn btn-lg btn-danger ms-4 border border-0" />
                </div>
            </form>
    </MDBContainer>
</>
  )
}
