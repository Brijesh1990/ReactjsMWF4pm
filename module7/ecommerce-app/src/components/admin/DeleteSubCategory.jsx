import react,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom' 
import Swal from 'sweetalert2';
export default function DeleteSubCategory() {
const[data,setData]=useState([]);
const Navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{
    axios.delete(`http://localhost:8000/addsubcategory/${id}`).then(()=>{
        Swal.fire({
            title: "Wow",
            text: "Your subcategory Data Deleted successfully",
            icon: "error"
          });

          Navigate('/admin-login/manage-subcategory');
    })
  
},[]);
  return (
    <div>
      
    </div>
  )
}
