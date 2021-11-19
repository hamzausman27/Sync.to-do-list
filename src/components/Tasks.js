import Task from "./Task";
import {useState} from 'react'
import {IoIosAddCircle} from 'react-icons/io'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Menu,
    MenuItem
} from "@mui/material";


const Tasks = ({tasks, onDelete, onToggle, removeList, showCompleted, showUncompleted}) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showCompletedTasks,setShowCompleted] = useState(false);
    const [showUncompletedTasks,setShowUncompleted] = useState(false);
    const [showAllTasks,setShowAll] = useState(false);
    const open1 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl(null);
    };

    const showUncompletedTaskList = () => {
        setShowUncompleted(true);
    }
    
    const showCompletedTaskList = () => {
        setShowCompleted(true);
    }
    const showAllTaskList = () => {
        setShowAll(true);
    }
    
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        removeList();
    };
    const handleKeepClose = () => {
        setOpen(false);
    };
    return (
        < div style={{backgroundColor: '#FFFFFF'}}>
            <div className={'row'}>
                <div className={'col-md-6'}>{tasks.length > 0 ?
                    <h3>To do list <IoIosAddCircle style={{cursor: 'pointer'}} className={'ms-1 mt-2'}
                                                   onClick={() => handleClickOpen()}/></h3> : ''}</div>
                <div className={'col-md-6'}>
                    {tasks.length > 0 ?
                        <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open1 ? 'true' : undefined}
                            onClick={handleClick}
                            className={'float-end'}
                        >
                            All Items
                        </Button>
                        : ''}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open1}
                        onClose={handleClose1}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={showAllTaskList}>All</MenuItem>
                        <MenuItem onClick={showCompletedTaskList}>Completed</MenuItem>
                        <MenuItem onClick={showUncompletedTaskList}>Uncompleted</MenuItem>
                    </Menu>
                </div>
            </div>
                        

           {  tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))
           }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Start a New List"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        When you start a new list, your existing list will be deleted. Would you like to start a new
                        list?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Start New list</Button>
                    <Button onClick={handleKeepClose} autoFocus>
                        Keep Existing
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Tasks
