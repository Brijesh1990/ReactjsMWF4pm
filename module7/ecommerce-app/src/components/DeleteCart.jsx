import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
export default function DeleteCart() {
//delete category from manage category list in admin  http://localhost:8000/addcategory
const[data,setData]=useState([]); 
const{id}=useParams();
const Navigate=useNavigate();
useEffect(()=>{
    // delete api using axios
    axios.delete(`http://localhost:8000/cart/${id}`).then((response)=>{
        setData(response.data);
        // pass a deleted messages

        Swal.fire({
            title: "Wow",
            text: "Cart successfully deleted",
            icon: "error"
          });

          Navigate('/view-cart');
    
    });

},[]);

return (
    <div>
      
    </div>
  )
}
