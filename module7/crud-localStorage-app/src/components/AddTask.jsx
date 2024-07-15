import React,{useState} from 'react'
import Swal from 'sweetalert2'
// add task from here
// eslint-disable-next-line react/prop-types
const AddTask=({onSave})=>{

    const[text,setText]=useState("");
    const[day,setDay]=useState("");

    // create a FormHandeler events
    const AddFormHandeler=(e)=>{
     e.preventDefault();
   //applied validation 
   if(!text && !day){
        Swal.fire({
            title: "Something went wrong?",
            text: "Fill your task name and added date",
            icon: "error"
          });
    } else if(!text && day){
            Swal.fire({
                title: "Something went wrong?",
                text: "Fill your task name and added date",
                icon: "error"
              });
        }else if(text && !day){
                Swal.fire({
                    title: "Something went wrong?",
                    text: "Fill your task name and added date",
                    icon: "error"
                  });
            } else {
              //alert('hi')
              onSave({ text,day })
            }
            //onSave({ text,day });
            // set day and set text
            setText("");
            setDay("");

    }


 return (
    <div>

    {/* add task form */}

    <form onSubmit={AddFormHandeler}>

    <div className='form-group mt-2'>
        <label>Add Task Name *</label> 
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)}  className='form-control' placeholder='Enter task Name *' />
    </div>

    
    <div className='form-group mt-2'>
        <label>Add Task Date *</label> 
        <input type='text' value={day} onChange={(e)=>setDay(e.target.value)} className='form-control' placeholder='Enter task date *' />
    </div>

    
    <div className='form-group mt-2'>
         
        <input type='submit' className='btn btn-primary bg-primary text-white' value="Save Task" />
    </div>

    </form>
      
    </div>
  )
}

export default AddTask
