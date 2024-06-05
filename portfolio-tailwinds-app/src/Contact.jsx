import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BiUser,BiMailSend,BiMobile,BiMapPin,BiLogoFacebook,BiLogoInstagram,BiLogoYoutube } from 'react-icons/bi'
import Navbar from './Navbar'
import Swal from 'sweetalert2'
export default function Contact() {
// destructuring of data
const[data,setData]=useState([]);
// display api from contact us
useEffect(()=>{
axios.get(`http://localhost:8000/contact`).then((response)=>{
    setData(response.data);
})
},[data])
// stored all data of contact us form 
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const subject=useRef("");
const message=useRef("");
const Navigate=useNavigate("");
// create a formHandeler function
const AddContactFormHandeler=(e)=>
{
 e.preventDefault();   
 var insert={
    name:name.current.value,
    email:email.current.value,
    phone:phone.current.value,
    subject:subject.current.value,
    message:message.current.value,
 }   
// call insert api

axios.post(`http://localhost:8000/contact`,insert).then(()=>{
    // pass a message
    Swal.fire({
        title: "Good job!",
        text: "Thanks for Contact with us we will contact with you soon!",
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

<h1 className='text-white font-extrabold text-3xl'>Contact with us</h1>
<hr className='border border-x-slate-50 border-spacing-1' />
<form onSubmit={AddContactFormHandeler}>
<div className='p-2 m-0 mt-3'>
    <input type='text' className='p-3 w-112 text-black' ref={name}  placeholder='Name *' />
</div>
<div className='p-2 m-0 mt-3'>
    <input type='text' className='p-3 w-112 text-black' ref={email} placeholder='Email *' />
</div>
<div className='p-2 m-0 mt-3'>
    <input type='text' className='p-3 w-112 text-black' ref={phone} placeholder='Phone *' />
</div>
<div className='p-2 m-0 mt-3'>
    <input type='text' className='p-3 w-112 text-black' ref={subject} placeholder='Subject *' />
</div>
<div className='p-2 m-0 mt-3'>
    <textarea className='p-3 w-112 text-black' ref={message} placeholder='Message *'></textarea>
</div>

<div className='p-2 m-0 mt-3'>
    <input type='submit' className='p-3 text-black  bg-gray-50 w-40' value="send" />
    <input type='submit' className='p-3   bg-red-700 ms-5 text-white w-40' value="Reset" />
</div>
</form>
{/* table to display data */}
<h1 className='text-white font-extrabold text-3xl'>Display All Contact data</h1>
<hr className='border border-x-slate-50 border-spacing-1' />
<table   className='p-24 mt-3 w-128  border-spacing-1 border-4  border-white'>
    <thead>
        <tr className='border'>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>subject</th>
            <th>message</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
       {data && data.map((row)=>{
        return(
            <>
            <tr align='center' className='border'>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.subject}</td>
            <td>{row.message}</td>
            <td><button type='button' onClick={()=>Navigate(`/delete-contact/${row.id}`)}><span className='bi bi-trash text-red-600'></span></button></td>
            </tr>
            </>
        )
       })
       }
     
    </tbody>
</table>

</div>
</div>
</div>
</div>
)
}
