import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios';
import {Container,Row} from 'react-bootstrap'
import Swal from 'sweetalert2';
// useEffect : fetch api or add effects , pass dependencies there we used useEffects
// no depenednecy : its render data again and again or refresh data again and again 
// pass [] : its render only one times no refresh of data
// pass[props,state] : render only one times but using depenedency of props and state we modify any times in data.

// useRef : useRef is pass a refrence from user input
// axios:axios is an librarires i.e used to get | post | delete | update data in api
// install axios --save

// form handeler : create any form and handle data of form calling event handeler 

// event handeler : calling any events i.e onSubmit, onClick , OnChange etc.

export default function AppointmentApp() {
// book appointment stored each ref data in variables
const[data,setData]=useState([]);
// display the data using useEffect()
useEffect(()=>{
axios.get(`http://localhost:8000/appointments`).then((response)=>{
    setData(response.data);
})
},[data]);

const patientname=useRef("");
const doctorname=useRef("");
const appointment_date=useRef("");
const deases=useRef("");
const location=useRef("");
const age=useRef("");
const weight=useRef("");
// after click on submit button data should be stored in db.json using api
// create a formHandeling
const AddFormHandeler=(e)=>{
e.preventDefault();
var insert={
patientname:patientname.current.value,
doctorname:doctorname.current.value,
appointment_date:appointment_date.current.value,
deases:deases.current.value,
location:location.current.value,
age:age.current.value,
weight:weight.current.value   
}

// call a api for insert data in db.json
axios.post(`http://localhost:8000/appointments`,insert).then(()=>{
// pass a message via Swal
Swal.fire({
title: "Wow",
text: "Thanks for Booked Your appointment",
icon: "success"
});

});
e.target.reset();   

}



return (
<div>
<Container className='p-5 mt-3'>
<Row>
<div className='col-md-4'>
<img src='https://i.pinimg.com/originals/3e/5e/61/3e5e61f165a97bede87a096025ffc1fb.gif' alt='book' title='book' className='img-fluid' />
</div>
<div className='col-md-7 ms-4'>
<h2>Book Appintments here</h2>
<form onSubmit={AddFormHandeler}>
<div className='form-group mt-3'>
<input type='text' ref={patientname} placeholder='Patient Name *' required />
</div>

<div className='form-group mt-3'>
<select  ref={doctorname} placeholder='Doctors Name *' required>
<option value="1">Dr.Vijay</option>
<option value="2">Dr.Raghav</option>  
</select>
</div>
<div className='form-group mt-3'>
<input type='date' ref={appointment_date} placeholder='appointment-date *' required />
</div>
<div className='form-group mt-3'>
<input type='text' ref={deases} placeholder='deases *' required />
</div>

<div className='form-group mt-3'>
<input type='text' ref={location} placeholder='location *' required />
</div>


<div className='form-group mt-3'>
<input type='text' ref={age} placeholder='age *' required />
</div>

<div className='form-group mt-3'>
<input type='text' ref={weight} placeholder='Weight *' required />
</div>

<div className='form-group mt-3'>
<input type='submit' value="BookAppointment" />
</div>
</form>
</div>
</Row>

{/* display each appointment booking */}
<table className='table table-responsive table-bordered mt-5'>
    {data && data.map((item)=>{
       return (
        <>
        <tr>
        {/* <td key={item.id}>{item.id}</td> */}
        <td>{item.patientname}</td>
        <td>{item.doctorname}</td>
        <td>{item.appointment_date}</td>
        <td>{item.location}</td>
        <td>{item.age}</td>
        <td>{item.deases}</td>
        <td>{item.weight}</td>
        </tr>
        </>
       )


    })}
   
</table>

</Container>
</div>
)
}
