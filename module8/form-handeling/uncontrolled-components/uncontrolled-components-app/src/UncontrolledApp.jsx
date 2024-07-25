import React,{useRef} from 'react'
import { Container } from 'react-bootstrap'
export default function UncontrolledApp() {
 const name=useRef("");
 const email=useRef("");
 const phone=useRef("");
//create function for handelsubmit data
const handelSubmit=(e)=>{
    e.preventDefault();
    var ins={
        name:name.current.value,
        email:email.current.value,
        phone:phone.current.value
    }
   
    console.log("form submitted successfully",ins);
    e.target.reset();

}  
// 

  return (
    <div>
      <Container className='p-5 shadow mt-5 w-50 mx-auto'>
        <h2>Form data via Uncontrolled components</h2>
          <form onSubmit={handelSubmit}>
            <div className='form-group mt-3'>
                <input type='text' ref={name}   className='form-control' placeholder='Name *' />
            </div>
            
            <div className='form-group mt-3'>
                <input type='text' ref={email} className='form-control' placeholder='Email *' />
            </div>
            
            <div className='form-group mt-3'>
                <input type='text' ref={phone} placeholder='Phone *' className='form-control' />
            </div>
            <div className='form-group mt-3'>
                <input type='submit' value="Submit"  className='btn btn-dark text-white' />
            </div>
          </form>
      </Container>
    </div>
  )
}
