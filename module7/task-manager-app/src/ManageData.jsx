import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
export default function ManageData() {
//destructuring of data   // 
const[data,setData]=useState([]);
const Navigate=useNavigate();   
// fetch all task and display data
useEffect(()=>{
    axios.get(`http://localhost:8000/added-task`).then((response)=>{
     setData(response.data);
     console.log(data);
    });
 },[data]);
  return (
    <div>
       <table align='center' className="table table-responsive mt-5 p-5 table-bordered">
        <tr>
            <th>#</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Added Date</th>
            <th>Action</th>
        </tr>
        {data && data.map((item)=>{
            return (
                <>
            <tr>
            <td>{item.id}</td>
            <td>{item.taskname}</td>
            <td>{item.priority}</td>
            <td>{item.added_date}</td>
            <td><button type='button' onClick={()=>{Navigate(`/delete-task/${item.id}`)}}><span className="bi bi-trash text-danger"></span></button></td>
        </tr>
                </>
            )
        })}
      
       </table>
    </div>
  )
}
