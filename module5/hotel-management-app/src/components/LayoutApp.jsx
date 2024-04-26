import React from 'react'
import { MDBContainer,MDBRow,MDBCard,MDBCardHeader,MDBCardBody,MDBBtn,MDBNavbar,MDBNavbarBrand } from 'mdb-react-ui-kit'
export default function LayoutApp() {
  return (
    <div>
      <MDBContainer fluid className='p-0 mt-0  text-white'>
        {/* <MDBRow>
            <div className='col-md-12'>
                
                <MDBCard className='p-2'>
                <MDBCardHeader className='bg-white'>
                <MDBBtn type='button' className='btn btn-md btn-danger'>Click Me</MDBBtn>
                </MDBCardHeader>
                <MDBCardBody className='p-5'>
                <form>
                <div className='input-group'>
                <input type='text' placeholder='Name *' className='form-control' />
                </div>
                  
                <div className='input-group mt-3'>
                <input type='text' placeholder='Name *' className='form-control' />
                </div>
                  
                </form>
                </MDBCardBody>
                </MDBCard>
                
              

            </div>
        </MDBRow> */}

        {/* task manager header */}

        <MDBNavbar className='nav navbar navbar-expand-md'>
            <MDBNavbarBrand><span className='ms-2 text-white'>Task Manager App</span></MDBNavbarBrand>
            <MDBBtn type='button' className='navbar-toggler btn btn-sm border border-0' data-bs-toggle="collapse" data-bs-target="#togg">
            <span className='bi bi-grid bg-warning text-white p-2 ms-5 fs-4'></span> 
            </MDBBtn>
            <div className='collapse navbar-collapse' id='togg'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Add Task</a></li>
                    <li><a href='#'>Read Task</a></li>
                    <li className='mt-1'><a href='#' className='btn btn-warning'>Update Task</a></li>
                   
                </ul>
            </div>
        </MDBNavbar>
      </MDBContainer>

      {/* content here */}

      <MDBContainer className='p-5 mt-4'>
        <h2 style={{textAlign:'center'}}>Add Task Manager App</h2>
         <form>
            <div className='input-group w-50 mx-auto mt-3'>
                <label className='input-group-text border border-0'><span className='bi bi-pencil fs-3 '></span></label>
                <input type='text' placeholder='Task Name *' className='form-control' />
            </div>
            <div className='input-group w-50 mx-auto mt-3'>
                <label className='input-group-text border border-0'><span className='bi bi-pencil fs-3 '></span></label>
                <input type='text' placeholder='Task Name *' className='form-control' />
            </div>

            <div className='input-group w-25 mt-3 mx-auto'>
                <MDBBtn type='button' placeholder='Task Name *' className='btn btn-md btn-warning'>Create <span className='bi bi-send-x'></span></MDBBtn>
            </div>
         </form>

         {/* display the data  */}

         <h2 style={{textAlign:'center'}} className='mt-5'>Display Task Manager App</h2>
         <table className='table  w-50 mx-auto  mt-5 table-responsive table-bordered'>
         <tr>
            <td>#id</td>
            <td>Angular sms OTP</td>
            <td>24/04/2024</td>
            <td><a href='#' className='btn btn-sm btn-danger bg-danger fs-6'><span className='bi bi-trash'></span></a>  |  <a href='#' className='btn btn-sm fs-6 btn-primary bg-primary'><span className='bi bi-pencil'></span></a></td>
            
         </tr>

         <tr>
            <td>#id</td>
            <td>Angular sms OTP</td>
            <td>24/04/2024</td>
            <td><a href='#' className='btn btn-sm btn-danger bg-danger fs-6'><span className='bi bi-trash'></span></a>  |  <a href='#' className='btn btn-sm fs-6 btn-primary bg-primary'><span className='bi bi-pencil'></span></a></td>
            
         </tr>

         <tr>
            <td>#id</td>
            <td>Angular sms OTP</td>
            <td>24/04/2024</td>
            <td><a href='#' className='btn btn-sm btn-danger bg-danger fs-6'><span className='bi bi-trash'></span></a>  |  <a href='#' className='btn btn-sm fs-6 btn-primary bg-primary'><span className='bi bi-pencil'></span></a></td>
            
         </tr>

         </table>

      </MDBContainer>


     {/* footer */}

     <MDBContainer fluid className='p-5 mt-4 footer'></MDBContainer>
      
    </div>
  )
}
