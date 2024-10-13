import {useState,useEffect} from 'react';
import axios from 'axios';
import ListCreate from './ListCreate';
import ListList from './ListList';
function App(){
    const [tasks,setTasks]=useState([]);
    const fetchTasks=async ()=>{
    const response=await axios.get('http://localhost:3001/tasks');

    setTasks(response.data); 
 };
 useEffect(()=>{
    fetchTasks();
 },[]);  
    const EditTaskbyId=async(newTitle,id)=>{
        const response=await axios.put(`http://localhost:3001/tasks/${id}`,{
        title:newTitle,
    });
        const updatedTasks=tasks.map((task)=>{
            if(task.id===id)
                return {...task,...response.data};
            return task;
        });
        setTasks(updatedTasks);
    }
    const deleteTaskbyId=async(id)=>{
        await axios.delete(`http://localhost:3001/tasks/${id}`);
        const updatedTasks=tasks.filter((task)=>{
            return task.id!=id;
        })
        setTasks(updatedTasks)
    }
    const createTask=async(title)=>{
        const response=await axios.post('http://localhost:3001/tasks',{
        title:title
    });
        const updatedTasks=[
            ...tasks,response.data
        ];
        setTasks(updatedTasks);
    }
    return <div>
        <ListCreate onCreate={createTask} />
        <ListList tasks={tasks}  onDelete={deleteTaskbyId} onEdit={EditTaskbyId} />
    </div>
}
export default App;