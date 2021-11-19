import Task from "./Task";
import {IoIosAddCircle} from 'react-icons/io'
import { Alert } from "bootstrap";
import PopMenu from "./PopMenu";


const CompletedTasks = ({tasks, onDelete, onToggle, removeList, showCompleted, showUncompleted}) => {
  

    const handleClickOpen = () => {
        setOpen(true);
    };

    
    return (
        < div style={{backgroundColor: '#FFFFFF'}}>
            <div className={'row'}>
                <div className={'col-md-6'}>{tasks.length > 0 ?
                    <h3>To do list <IoIosAddCircle style={{cursor: 'pointer'}} className={'ms-1 mt-2'}
                                                   onClick={() => handleClickOpen()}/></h3> : ''}</div>
                                                   
               <PopMenu/>
            </div>


            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}
                                       />))}
            <Alert removeList={removeList} />
        </div>
    )
}

export default CompletedTasks
