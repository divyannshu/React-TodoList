import {useState} from 'react';
import ListEdit from './ListEdit';
function ListShow({task,onDelete,onEdit}){
    const [showEdit,setShowEdit]=useState(false);
    console.log(task.title);
    const handleDelete=()=>{
        onDelete(task.id);
    }
    const handleEdit=()=>{
        setShowEdit(true);
    }
    const handleSubmit=(id,newTitle)=>{
        setShowEdit(false);
        onEdit(newTitle,id);
    }
    let content=<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{task.title}</h5>
    if(showEdit)
        content=<ListEdit onSubmit={handleSubmit} task={task} />
    return (
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4"></div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={`https://picsum.photos/seed/${task.id}/300/200`} alt="Task"/>
        {content}
        {/* <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
        <div class="flex mt-4 md:mt-6">
            <a  onClick={handleDelete} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</a>
            <a  onClick={handleEdit} class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</a>
        </div>
    </div>
</div>

)};
export default ListShow;