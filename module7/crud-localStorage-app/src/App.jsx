import React,{useEffect, useState} from "react";
import { Container,Row } from "react-bootstrap";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
// import uuid package
import uuid from "react-uuid";
// swal packages 
import Swal from "sweetalert2";
import Tasks from "./components/Tasks";

function App()
{
// destructuring of data fro lazy loading
const[loading,setloading]=useState(true);//pre loader state
const[tasks,setTasks]=useState([]);//task state
const[showTask,setShowTask]=useState(false); //show data state

// pre loader
useEffect(()=>{

setTimeout(()=>{
setloading(false);
},3000);

},[]);

{/* Add task add form here */}
const addTask=(task)=>{
const id=uuid();
const newTask={id,...task}
setTasks([...tasks,newTask]);
// console.log(newTask);
Swal.fire({
title: "Wow",
text: "Your task successfully Added",
icon: "success"
});
// localStorage 
localStorage.setItem("taskAdded",JSON.stringify([...tasks,newTask]));
}

{/* counter of added task */}
{/* Display added Tasks */}
const getTasks=JSON.parse(localStorage.getItem("taskAdded"));

useEffect(()=>{
if(getTasks==null)
  {
    setTasks([]);
  } 
  else 
  {
    setTasks(getTasks);

  }

},[]);

  // after click on delete button data will be delete
const deleteTask=(id)=>{

    const deleteTask=tasks.filter((task)=>task.id!==id);
    setTasks(deleteTask);

    Swal.fire({
      title: "error",
      text: "Your task successfully Deleted",
      icon: "error"
  })

  localStorage.setItem("taskAdded",JSON.stringify(deleteTask));

}

// after click on edit button data should be edit & update
const editTask=(id)=>{
  const text=prompt("Enter Updated Task Name");
  const day=prompt("Enter Updated Day");
  let data=JSON.parse(localStorage.getItem('taskAdded'));
  const myData=data.map(x=>{
    if(x.id===id) {
      return {
        ...x,
        text:text,
        day:day,
        id:uuid()
    
      }
  }

  return x;
})

//console.log(myData);
Swal.fire({
  title: 'wow',
  text: 'You have successfully Edited an existing task',
  icon: 'success'
})

localStorage.setItem('taskAdded', JSON.stringify(myData));
window.location.reload();

}

return (
<>
{
loading ? 
// spinner via bootstrap
<div className="spinnerContainer p-5 w-75 mx-auto">       
<div className="spinner-grow text-primary" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
<span className="visually-hidden">Loading...</span>
</div>

</div>
:
<Container className="p-5 mt-5 w-75 mx-auto shadow main-content">

{/* App header that has to be open and closed appname */}

<Header showForm={()=>setShowTask(!showTask)} changeTextAndColor={showTask} />

{showTask && <AddTask  onSave={addTask} />}

{/* counter total task */}
<h3>Numbers of Tasks : <span className="badge badge-md bg-danger text-white">
  {tasks.length}
</span></h3>
{/* for display added tasks */}
{
tasks.length > 0 ?
(<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />)
: ('No data Found')
}
</Container>  

}

</>
)
}

export default App;