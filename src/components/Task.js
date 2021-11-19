import {useState} from 'react'

const Task = ({task, onDelete}) => {
    let [isChecked, setIsChecked] = useState(true);
    
    const handleOnChange = (task) => {
      
        setIsChecked(!isChecked);
        isChecked? task.completed=true:task.completed=false;
        console.log(task)
     
     };
    return (
        <div className='taskreminder'>

            <ul className={'list-group'}>
                <li className={'list-group-item'}>
                    <div className="row">
                        <div className="col-md-2">
                            <h3 style={task.completed ? {color: 'lightgrey'} : {color: 'black'}}> {
                                <input type="checkbox" value={task.completed}  onChange={()=>handleOnChange(task)}/>}
                            </h3>
                        </div>
                        <div className="col-md-6" style={task.completed ? {color: 'lightgrey'} : {}}>
                            {task.text}
                        </div>
                        <div className="col-md-4">
                            <p style={{color: 'grey', textDecoration: 'underline', fontSize:'0.9rem' }} onClick={() => onDelete(task.id)}>Delete </p>
                        </div>
                    </div>


                </li>
            </ul>

        </div>
    )
}

export default Task
