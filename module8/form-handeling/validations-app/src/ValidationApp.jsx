import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import Swal from 'sweetalert2';
export default function Validation() {
 //destructuring of data
 const[formdata,setFormData]=useState({
    name:"",
    email:"",
    phone:""

 });

//  for pass errors destructuring of data
const[errors,setErrors]=useState({});

const validate=()=>{
    const errors={};
    if(!formdata.name)
    {
        errors.name='Please Enter your Name';
    }
    if(!formdata.email)
    {
       errors.email='Please Enter your Email';
    }
    if(!formdata.phone)
    {
           errors.phone='Please Enter your Phone';
    }

    return errors;
} 
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
    
    // pass validations after submit forms
    const errors=validate();
    if(Object.keys(errors).length===0)
    {
 // console.log("form submitted successfully",formdata);
 Swal.fire({
    title: "Thanks",
    text: "Data successfully addedd",
    icon: "success"
  });

console.log(formdata);  
e.target.reset();
    }
    else 
    {
        setErrors(errors);
    }

   

}  
// 

  return (
    <div>
      <Container className='p-5 shadow mt-5 w-50 mx-auto'>
        <h2>Form Validations</h2>
          <form onSubmit={handelSubmit}>
            <div className='form-group mt-3'>
                <input type='text' name='name' value={formdata.name} onChange={handelChange} className='form-control' placeholder='Name *' />
                {errors.name && <p style={{color:"red"}}>{errors.name}</p> } 
            
            </div>
            
            <div className='form-group mt-3'>
                <input type='text' name='email' value={formdata.email} onChange={handelChange} className='form-control' placeholder='Email *' />
                {errors.email && <p style={{color:"red"}}>{errors.email}</p> }
            </div>
            
            <div className='form-group mt-3'>
                <input type='text' name='phone' value={formdata.phone} onChange={handelChange} placeholder='Phone *' className='form-control' />
                {errors.phone && <p style={{color:"red"}}>{errors.phone}</p> }
            </div>
            <div className='form-group mt-3'>
                <input type='submit' value="Submit"  className='btn btn-dark text-white' />
            </div>
          </form>
      </Container>
    </div>
  )
}
