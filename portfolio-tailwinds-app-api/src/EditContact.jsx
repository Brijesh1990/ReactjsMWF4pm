import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BiUser,BiMailSend,BiMobile,BiMapPin,BiLogoFacebook,BiLogoInstagram,BiLogoYoutube } from 'react-icons/bi'
import Navbar from './Navbar'
import Swal from 'sweetalert2'
export default function EditContact() {
// destructuring of data
const[data,setData]=useState([]);

// stored all data of contact us form 
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const subject=useRef("");
const message=useRef("");
const {id}=useParams();
const Navigate=useNavigate("");

// edit contact data
useEffect(()=>{
axios.get(`http://localhost:8000/contact/${id}`).then((response)=>{

name.current.value=response.data.name; 
email.current.value=response.data.email; 
phone.current.value=response.data.phone; 
subject.current.value=response.data.subject; 
message.current.value=response.data.message

})

},[]);

// create a formHandeler function
const UpdContactFormHandeler=(e)=>
{
e.preventDefault();   
var upd={
name:name.current.value,
email:email.current.value,
phone:phone.current.value,
subject:subject.current.value,
message:message.current.value,
}   
// call insert api
axios.put(`http://localhost:8000/contact/${id}`,upd).then(()=>{
// pass a message
Swal.fire({
title: "Good job!",
text: "Thanks for Update contact us details!",
icon: "success"
});

Navigate('/contact-us');

});

e.target.reset();

}



return (
<div>
{/* content start here */}
<Navbar />
<div className='container p-10'>     
<div className="flex">
<div className="flex-none w-50 text-white p-10 ms-52 mt-12">
<p><button className='bg-lime-500 m-0 p-3 w-40 rounded-t-3xl rounded-r-2xl animate-bounce'>Hello i am</button></p>
<p className='text-white font-extrabold text-2xl mt-4 animate-pulse'>Brijesh Kumar Pandey</p>
<p className='txt-white'>Products Developer</p>
<h4 className='mt-3 flex'><BiMailSend className='mt-1' /> &nbsp;&nbsp; <a href=''>info@hr.com</a></h4>

<h4 className='mt-3 flex'><BiMobile className='mt-1' /> &nbsp;&nbsp; (+91)-9998003879</h4>
<h4 className='mt-3 flex'><BiMapPin className='mt-1' /> &nbsp;&nbsp; 150 feet ring road Rajkot-360005</h4>

<h4 className='mt-3 flex'><BiLogoFacebook className='ml-10 text-4xl text-blue-700 animate-bounce' /> &nbsp;&nbsp;<BiLogoInstagram className='text-4xl text-red-300 animate-bounce' />&nbsp;&nbsp;<BiLogoYoutube className='text-4xl text-red-600 animate-bounce' /></h4>
</div>
<div className="flex-initial w-50 text-white p-10 ms-5 mt-1">

<h1 className='text-white font-extrabold text-3xl'>Edit Contact data</h1>
<hr className='border border-x-slate-50 border-spacing-1' />
<form>
<div className='p-2 m-0 mt-3'>
<input type='text' className='p-3 w-112 text-black' name="name" ref={name}  placeholder='Name *' />
</div>
<div className='p-2 m-0 mt-3'>
<input type='text' className='p-3 w-112 text-black' name='email' ref={email} placeholder='Email *' />
</div>
<div className='p-2 m-0 mt-3'>
<input type='text' className='p-3 w-112 text-black' name='phone' ref={phone} placeholder='Phone *' />
</div>
<div className='p-2 m-0 mt-3'>
<input type='text' className='p-3 w-112 text-black' name='subject' ref={subject} placeholder='Subject *' />
</div>
<div className='p-2 m-0 mt-3'>
<textarea className='p-3 w-112 text-black' ref={message} name='message' placeholder='Message *'></textarea>
</div>

<div className='p-2 m-0 mt-3'>
<button type='button' onClick={UpdContactFormHandeler} className="p-3 text-black  bg-gray-50 w-40">Update Contact</button>
<input type='submit' className='p-3   bg-red-700 ms-5 text-white w-40' value="Reset" />
</div>
</form>

</div>
</div>
</div>
</div>
)
}
