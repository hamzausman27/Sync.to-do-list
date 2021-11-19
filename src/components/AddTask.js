import { useState } from 'react'
import Button from './Button'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [completed, setCompleted] = useState(false)
     
    const onSubmit = (e) =>{
        e.preventDefault();
        
        if(!text){
            alert('Please add text!')
            return
        }
       
        onAdd({text,completed})
      
        setText('')
        setCompleted(false)
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
           <input type='text' placeholder='Enter Item' value ={text} onChange={(e) =>setText(e.target.value)}></input>
            </div>
            <Button color={text.length>0?'':'#FFFFFF'} text = 'Add' onClick = {onSubmit} />


        </form>
    )
}

export default AddTask
