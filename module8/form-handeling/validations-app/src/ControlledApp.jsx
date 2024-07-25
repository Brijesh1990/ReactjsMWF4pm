import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
export default function ControlledApp() {
 //destructuring of data
 const[formdata,setFormData]=useState({
    name:"",
    email:"",
    phone:""

 });
 
// create a function for onChange
const handelChange=(e)=>{
    const{name,value}=e.target;
    setFormData({
    ...formdata,[name]:value,
   })
}

//create function for handelsubmit data
const handelSubmit=(e)=>{
    e.preventDefault();
    console.log("form submitted successfullt",formdata);
    e.target.reset();

}  
// 

  return (
    <div>
      <Container className='p-5 shadow mt-5 w-50 mx-auto'>
        <h2>Form data via controlled components</h2>
          <form onSubmit={handelSubmit}>
            <div className='form-group mt-3'>
                <input type='text' name='name' value={formdata.name} onChange={handelChange} className='form-control' placeholder='Name *' />
            </div>
            
            <div className='form-group mt-3'>
                <input type='text' name='email' value={formdata.email} onChange={handelChange} className='form-control' placeholder='Email *' />
            </div>
            
            <div className='form-group mt-3'>
                <input type='text' name='phone' value={formdata.phone} onChange={handelChange} placeholder='Phone *' className='form-control' />
            </div>
            <div className='form-group mt-3'>
                <input type='submit' value="Submit"  className='btn btn-dark text-white' />
            </div>
          </form>
      </Container>
    </div>
  )
}
