// import {Modal} from 'flowbite-react';
import ListShow from './ListShow';
function ListList({tasks,onDelete,onEdit}){
    const ShowList=tasks.map((task)=>{
        return <ListShow task={task} key={task.id} onDelete={onDelete} onEdit={onEdit} />
    })
    return <div>
       {ShowList}
    </div>
};
export default ListList;