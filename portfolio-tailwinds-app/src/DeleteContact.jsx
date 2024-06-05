import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useParams,useNavigate } from 'react-router-dom'
export default function DeleteContact() {
    // delete contact data api 
    const[data,setData]=useState([]);
    const{id}=useParams();
    const Navigate=useNavigate();
    useEffect(()=>{
      axios.delete(`http://localhost:8000/contact/${id}`).then(()=>{
        // pass deleted messages
        Swal.fire({
            title: "Good job!",
            text: "Your contact data deleted successfully!",
            icon: "error"
          });
    
          Navigate('/contact-us');
      })
    },[]);
  return (
    <div>
      
    </div>
  )
}
