import {useState} from 'react';
import ListCreate from './ListCreate';
import ListList from './ListList';
function App(){
    const [tasks,setTasks]=useState([]);
    const EditTaskbyId=(newTitle,id)=>{
        const updatedTasks=tasks.map((task)=>{
            if(task.id===id)
                return {title:newTitle};
            return task;
        });
        setTasks(updatedTasks);
    }
    const deleteTaskbyId=(id)=>{
        const updatedTasks=tasks.filter((task)=>{
            return task.id!=id;
        })
        setTasks(updatedTasks)
    }
    const createTask=async(title)=>{
        const updatedTasks=[
            ...tasks,{title:title,id:Math.round(Math.random()*9999)}
        ];
        setTasks(updatedTasks);
    }
    return <div>
        <ListCreate onCreate={createTask} />
        <ListList tasks={tasks}  onDelete={deleteTaskbyId} onEdit={EditTaskbyId} />
    </div>
}
export default App;