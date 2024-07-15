import { FaPencilAlt,FaTimes,FaTrash,FaUser } from "react-icons/fa"
import '../index.css'
const Task=({task,onDelete,onEdit})=>{

    return (

        <>
        <div className="task">
            <div>
                <p className="taskName">Task Name :{task.text} <FaTimes onClick={()=>onDelete(task.id)} className="delIcon" /></p>
         
          
                <p className="taskName">Task Day :{task.day}     
                <FaPencilAlt onClick={()=>onEdit(task.id)} className="editIcon" /></p>
            </div>

              
        </div>

        </>
    )
}

export default Task