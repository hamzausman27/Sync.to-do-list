import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";


function App() {
    const [showAddTask, setShowAddTask] = useState(true)

    const [tasks, setTasks] = useState([])
// delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }


//add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }
//delete list
    const deleteList = () => {
        setTasks(tasks.filter((task) => task.id < 0))
    }
//show completed tasks
    const showCompletetedTasks = () => {
        setTasks(tasks.filter((task) => task.completed === true))
        console.log(tasks)
    }
//show uncompleted tasks
    const showUncompletedTasks = () => {
        setTasks(tasks.filter((task) => task.completed === false))
        console.log(tasks)

    }

    return (
        <div className="container" style={{backgroundColor: "#F5F5F5"}}>
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {tasks.length > 0 ? '' : <h1>To do list</h1>}
            {tasks.length > 0 ? '' : <p>What needs to be done today</p>}
            {showAddTask && <AddTask onAdd={addTask}/>}
            <Tasks tasks={tasks} onDelete={deleteTask} removeList={deleteList}
                   showCompleteted={showCompletetedTasks} showUncompleted={showUncompletedTasks}/>
        </div>
    );
}

export default App;
